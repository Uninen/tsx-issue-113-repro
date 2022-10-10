import { chromium } from 'playwright-chromium'
;(async () => {
  const url = 'https://www.unessa.net'

  const browser = await chromium.launch({
    headless: true,
  })
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto(url)
  await page.screenshot({
    path: 'test-screenshot.png',
    fullPage: true,
  })

  await browser.close()
})()
