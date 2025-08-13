
import { test, expect } from '@playwright/test';

const   LEAGUE_STR_URL = 'https://www.thesportsdb.com'

const LOCALHOST_URL = 'http://localhost:5173/'

const { webkit } = require('playwright');

test('Test app captura de datos equipos de futbol ', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(LOCALHOST_URL)
  


const select = await page.getByRole('select')

await expect(select).toBeTruthy()

})