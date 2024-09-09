const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Snail');
    await page.screenshot({path:'snail.png'});
   //     await browser.waitForTarget(() => false);

   const result = await page.evaluate(() =>{
      let headingFromWeb = document.querySelectorAll(".mw-headline")
      const headingList = [...headingFromWeb]
      return headingList.map(h => h.innerText);

   });

   console.log(result);
    await browser.close();

})();