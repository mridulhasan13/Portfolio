
import os
from PIL import Image

# Increase limit for large images to prevent DecompressionBombError
Image.MAX_IMAGE_PIXELS = None

def optimize_images(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                filepath = os.path.join(root, file)
                webp_path = os.path.splitext(filepath)[0] + ".webp"

                # Skip if already exists
                if os.path.exists(webp_path):
                    print(f"Skipping (already exists): {file}")
                    continue

                try:
                    print(f"Processing: {file}...")
                    with Image.open(filepath) as img:
                        # Resize if larger than 1920x1920
                        if img.width > 1920 or img.height > 1920:
                            img.thumbnail((1920, 1920))
                        
                        # Convert to WebP
                        img.save(webp_path, "WEBP", quality=80, optimize=True)
                        print(f"Optimized: {file} -> {os.path.basename(webp_path)}")
                except Exception as e:
                    print(f"FAILED {file}: {e}")

if __name__ == "__main__":
    base_dir = "x:/mhm/Mahmudul Hasan Mridul"
    target_dirs = ["Website", "Design", "Images", "Logo"]
    
    for folder in target_dirs:
        full_path = os.path.join(base_dir, folder)
        if os.path.exists(full_path):
            print(f"--- Processing directory: {folder} ---")
            optimize_images(full_path)
        else:
            print(f"Directory not found: {folder}")
