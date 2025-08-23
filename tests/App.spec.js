const { test, expect } = require("@playwright/test");
const {  email,  password } = require("../user.js");

test("successlAuthorization", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").fill(password);
  await page.getByTestId("login-submit-btn").click();

  await expect(page).locator("[/profile/8820392");
  await expect(page).toHaveTitle("Моё обучение");
  await page.screenshot({ path: 'successScreenshot.png' });
});

test("NotSuccessAuthorization", async ({ page }) => {
  await page.goto("https://netology.ru");
  await page.getByRole("link", { name: "Войти" }).click();
  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Пароль").fill("Qwerty12345!");
  await page.getByTestId("login-submit-btn").click();

  await expect(page.getByTestId('login-error-hint')).toHaveText('Вы ввели неправильно логин или пароль');
  await page.screenshot({ path: "NotsuccessScreenshot.png" });
});
