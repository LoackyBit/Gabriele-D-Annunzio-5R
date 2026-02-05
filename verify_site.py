import os
from playwright.sync_api import sync_playwright

def verify_site():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Set viewport to standard Desktop
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # Get absolute path to index.html
        cwd = os.getcwd()
        file_path = f"file://{cwd}/dannunzio-project/index.html"

        print(f"Navigating to {file_path}")
        page.goto(file_path)

        # Check Title
        title = page.title()
        print(f"Page title: {title}")
        if "Gabriele D'Annunzio" not in title:
            print("WARNING: Title mismatch")

        # Check Header
        header = page.locator('header.navbar')
        if not header.is_visible():
            print("WARNING: Header not visible")

        # Wait for page load
        page.wait_for_timeout(1000)

        # Take Desktop Screenshot
        screenshot_path = "dannunzio_site_desktop.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Desktop screenshot saved to {screenshot_path}")

        # Mobile Emulation
        page_mobile = browser.new_page(viewport={'width': 375, 'height': 667}, user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
        page_mobile.goto(file_path)
        page_mobile.wait_for_timeout(1000)

        # Take Mobile Screenshot
        screenshot_mobile_path = "dannunzio_site_mobile.png"
        page_mobile.screenshot(path=screenshot_mobile_path, full_page=True)
        print(f"Mobile screenshot saved to {screenshot_mobile_path}")

        browser.close()

if __name__ == "__main__":
    verify_site()
