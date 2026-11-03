import test, { expect, chromium } from "@playwright/test";

test('Order creation', async()=>{
    const browser= await chromium.launch({headless: false, channel: 'chrome'}) //creates connection with node js server of chromium browser
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState('domcontentloaded')
await page.waitForTimeout(3000)

    //Login page
     await page.locator("//input[@id='user-name']").waitFor({ state: 'visible' })
     await page.locator("//input[@id='user-name']").fill('standard_user')
 
     await page.waitForSelector("//input[@id='user-name']")
 
     await page.locator("//input[@id='password']").fill('secret_sauce')
 
     await page.locator("//input[@id='login-button']").click()
 
      console.log("clicked Submit button")

        // Wait for products page
    await expect(page).toHaveURL(/inventory/);






const sortDropdown = page.locator('.product_sort_container');

    // Select Name (A to Z)
    await sortDropdown.selectOption({ index: 0 });
    await expect(sortDropdown).toHaveValue('az');
    await page.waitForTimeout(2000);

    // Select Name (Z to A)
    await sortDropdown.selectOption({ index: 1 });
    await expect(sortDropdown).toHaveValue('za');
    await page.waitForTimeout(2000);

    // Select Price (low to high)
    await sortDropdown.selectOption({ index: 2 });
    await expect(sortDropdown).toHaveValue('lohi');
    await page.waitForTimeout(2000);

    // Select Price (high to low)
    await sortDropdown.selectOption({ index: 3 });
    await expect(sortDropdown).toHaveValue('hilo');
    await page.waitForTimeout(2000);


    // Locate Add to Cart button
    const addToCartButton = page.locator(
        '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    );

    // Wait until button is visible
    await expect(addToCartButton).toBeVisible();

    // Wait until button is enabled
    await expect(addToCartButton).toBeEnabled();

    // Click Add to Cart
    await addToCartButton.click();

    // Wait and verify button text changes
    await expect(
        page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')
    ).toHaveText('Remove');

    // Verify cart badge displays 1
    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');

    // Wait for 2 seconds (optional)
    await page.waitForTimeout(5000);

   // Add product to cart
    const addToCart = page.locator(
        '[data-test="shopping-cart-link"]'
    );

    await expect(addToCart).toBeVisible();
    await expect(addToCart).toBeEnabled();
    await addToCart.click();

    // Locate shopping cart badge
    const cartBadge = page.locator(
        '[data-test="shopping-cart-badge"]'
    );

    // Wait until badge is visible
    await expect(cartBadge).toBeVisible();

    // Verify cart quantity
    await expect(cartBadge).toHaveText('1');

    // Optional fixed wait
    await page.waitForTimeout(2000);

    // Wait for cart page
    await expect(page).toHaveURL(/cart/);

    // Locate Checkout button
    const checkoutButton = page.locator('[data-test="checkout"]');

    // Wait until Checkout button is visible
    await expect(checkoutButton).toBeVisible();

    // Wait until Checkout button is enabled
    await expect(checkoutButton).toBeEnabled();

    // Click Checkout
    await checkoutButton.click();

      await expect(page).toHaveURL(/checkout-step-one/);

// Locate First Name textbox
    const firstName = page.locator('[data-test="firstName"]');

    // Wait until textbox is visible
    await expect(firstName).toBeVisible();

    // Wait until textbox is enabled
    await expect(firstName).toBeEnabled();

    // Enter First Name
    await firstName.fill('Babu');
    await expect(firstName).toHaveValue('Babu');

    // Last Name textbox
    const lastName = page.locator('[data-test="lastName"]');

    await expect(lastName).toBeVisible();
    await expect(lastName).toBeEnabled();

    await lastName.fill('Kannan');
    await expect(lastName).toHaveValue('Kannan');

    // Optional wait
    await page.waitForTimeout(2000);

    // Zip / Postal Code textbox
    const postalCode = page.locator('[data-test="postalCode"]');

    await expect(postalCode).toBeVisible();
    await expect(postalCode).toBeEnabled();

    await postalCode.fill('600126');
    await expect(postalCode).toHaveValue('600126');

const continueButton = page.locator('[data-test="continue"]');

await expect(continueButton).toBeVisible();
await expect(continueButton).toBeEnabled();

await continueButton.click();

const finishButton = page.locator('[data-test="finish"]');

await expect(finishButton).toBeVisible();
await expect(finishButton).toBeEnabled();

await finishButton.click();

await expect(page).toHaveURL(/checkout-complete/);

await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');


    const generatePdfButton = page.locator(
    '[data-test="generate-pdf-order"]'
);

await expect(generatePdfButton).toBeVisible();
await expect(generatePdfButton).toBeEnabled();

const downloadPromise = page.waitForEvent('download');

await generatePdfButton.click();

const download = await downloadPromise;

console.log('Downloaded file:', download.suggestedFilename());

expect(download.suggestedFilename()).toContain('.pdf');


const backHomeButton = page.locator(
    '[data-test="back-to-products"]'
);

await expect(backHomeButton).toBeVisible();
await expect(backHomeButton).toBeEnabled();
await expect(backHomeButton).toHaveText('Back Home');

await backHomeButton.click();

await expect(page).toHaveURL(/inventory/);
await expect(page.locator('.title')).toHaveText('Products');

      // Optional fixed wait
    await page.waitForTimeout(6000);
      

})
 