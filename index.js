const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Snail');
    await page.screenshot({path:'snail.png'});

    await browser.close();

})();