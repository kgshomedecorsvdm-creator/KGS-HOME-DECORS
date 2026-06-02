import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  const fileUrl = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  
  await new Promise(r => setTimeout(r, 2000));
  
  await page.evaluate(() => {
    const searchBtns = Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('search') || b.querySelector('.material-symbols-outlined')?.textContent === 'search');
    if(searchBtns.length > 0) {
        searchBtns[0].click();
    } else {
        const navItems = document.querySelectorAll('.nav-action');
        navItems[0].click();
    }
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  const info = await page.evaluate(() => {
    const wrap = document.querySelector('.search-input-wrap');
    const pop = document.querySelector('.search-popular');
    const tags = document.querySelector('.search-popular__tags');
    const container = document.querySelector('.search-panel .container');
    
    return {
      wrapBox: wrap?.getBoundingClientRect(),
      popBox: pop?.getBoundingClientRect(),
      tagsBox: tags?.getBoundingClientRect(),
      containerBox: container?.getBoundingClientRect(),
      containerFlex: window.getComputedStyle(container).display,
      wrapFlex: window.getComputedStyle(wrap).display,
      popPos: window.getComputedStyle(pop).position,
      popMargin: window.getComputedStyle(pop).marginTop,
    };
  });
  
  console.log(JSON.stringify(info, null, 2));
  
  await browser.close();
})();
