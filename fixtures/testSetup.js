import {expect, test} from "@playwright/test";

const customTest = test.extend({
    context: async({browser},use)=>{
        const context = await browser.newContext({ ignoreHTTPSErrors: true});
        await use(context);
        await context.close();
    },
    page: async({context},use)=>{
        const page = await context.newPage();
        await use(page);
        await page.close();
    }
})

module.exports={
    test:customTest,
    expect
}