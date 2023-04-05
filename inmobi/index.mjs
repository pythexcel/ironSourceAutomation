import puppeteer from 'puppeteer';
(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
  
    await page.goto('https://iam.auth.inmobi.com/login?state=hKFo2SB5Y01aZVU4UU5JT2FVQ2VfZWxKOFVKaUVjQ1FyQk1BQ6FupWxvZ2luo3RpZNkgSE82YWdCeFVPY0NEUXJCX2YyYmpPakVmbXFTV0ZJdnmjY2lk2SBxUTdWUmxla2NLcFk2NFRUZExvRmFGRWc5QUdJRWxlcg&client=qQ7VRlekcKpY64TTdLoFaFEg9AGIEler&protocol=oauth2&redirect_uri=https%3A%2F%2Fpublisher.inmobi.com%2Fauth%2Fopenid%2Freturn&scope=openid%20profile%20email&response_type=id_token&nonce=40miOmPcKj&response_mode=form_post');
  
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});
  
    // Type into search box
    await page.type('#email', 'atul.etech2011@gmail.com');
    // await page.waitForSelector('#btn-next');
    await page.click('#btn-next');
   await setTimeout(()=>{},1000)
    // // Wait and click on first result
    // const searchResultSelector = '.search-box__link';
    await page.waitForSelector('#password');
    console.log(1)
    await page.$eval('#password', el => el.value = 'Java@123');
    await page.type('#password','Java@123');
    // await page.click('#password');
  
    // // Locate the full title with a unique string
    // const textSelector = await page.waitForSelector(
    //   'text/Customize and automate'
    // );
    // const fullTitle = await textSelector.evaluate(el => el.textContent);
  
    // // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);
  
    // await browser.close();
  })();