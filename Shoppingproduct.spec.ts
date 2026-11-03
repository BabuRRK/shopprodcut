import test, { expect, chromium } from "@playwright/test";

test('Order creation', async()=>{
    const browser= await chromium.launch({headless: false, channel: 'chrome'}) //creates connection with node js server of chromium browser
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState('domcontentloaded')


    //Login page
     await page.locator("//input[@id='user-name']").waitFor({ state: 'visible' })
     await page.locator("//input[@id='user-name']").fill('standard_user')
 
     await page.waitForSelector("//input[@id='user-name']")
 
     await page.locator("//input[@id='password']").fill('secret_sauce')
 
     await page.locator("//input[@id='login-button']").click()
 
      console.log("clicked Submit button")

      //Prodcut sorting
      // Select Name (A to Z)
    await page.locator('.product_sort_container').selectOption('az');

    // Verify selected option
    await expect(page.locator('.product_sort_container'))
        .toHaveValue('az');

    // Select Name (Z to A)
    await page.locator('.product_sort_container').selectOption('za');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('za');

    // Select Price (low to high)
    await page.locator('.product_sort_container').selectOption('lohi');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('lohi');

    // Select Price (high to low)
    await page.locator('.product_sort_container').selectOption('hilo');

    await expect(page.locator('.product_sort_container'))
        .toHaveValue('hilo');

        //Add to cart
        // Click Add to cart button
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    // Verify Remove button is displayed
    await expect(
        page.locator('[data-test="remove-sauce-labs-onesie"]')
    ).toBeVisible();

    // Verify cart badge count
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Click shopping cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify cart page
    await expect(page).toHaveURL(/cart/);

    // Verify product is displayed
    await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();

    // Click Checkout button
    await page.locator('[data-test="checkout"]').click();

    // Verify checkout page
    await expect(page).toHaveURL(/checkout-step-one/);
     
})
 