import urllib.request
import re
import os
import ssl
from urllib.parse import urljoin

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base_url = 'https://giken.com.sg/'
save_dir = r'd:\Giken Website\assets\giken_web'
os.makedirs(save_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# 1. Fetch homepage and extract all internal links
req = urllib.request.Request(base_url, headers=headers)
with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
    homepage_html = resp.read().decode('utf-8', errors='ignore')

all_links = set(re.findall(r'href=["\'](https?://(?:www\.)?giken\.com\.sg/[^"\'#\?]+)', homepage_html, re.IGNORECASE))
all_links.add(base_url)

downloaded = set(os.listdir(save_dir))

for page_url in all_links:
    try:
        req = urllib.request.Request(page_url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            img_srcs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
            bg_srcs = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', html, re.IGNORECASE)
            
            for src in set(img_srcs + bg_srcs):
                if src.startswith('data:'): continue
                full_url = urljoin(page_url, src)
                clean_url = full_url.split('?')[0].split('#')[0]
                fn = os.path.basename(clean_url)
                if fn and fn not in downloaded and any(fn.lower().endswith(ext) for ext in ['.jpg','.jpeg','.png','.gif','.svg','.webp']):
                    target_file = os.path.join(save_dir, fn)
                    try:
                        ireq = urllib.request.Request(full_url, headers=headers)
                        with urllib.request.urlopen(ireq, context=ctx, timeout=12) as iresp:
                            data = iresp.read()
                            with open(target_file, 'wb') as out_f:
                                out_f.write(data)
                            downloaded.add(fn)
                            print(f"Downloaded: {fn}")
                    except Exception as err:
                        print(f"Failed {full_url}: {err}")
    except Exception as e:
        print(f"Error scraping {page_url}: {e}")

print(f"Total downloaded images from giken.com.sg: {len(downloaded)}")
