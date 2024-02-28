import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator(".Burger-style__Container-sc-f18c80e0-0").click();
  await page.getByText("About").click();
  await page.getByTestId("toogle-contextview-button-garage").click();
  await page.getByRole("button", { name: "Hunker Ocean" }).click();
  await page.getByText("NEXT").click({
    clickCount: 5,
  });
  await page.getByText("PREVNEXT").click({
    clickCount: 5,
  });
  await page.getByTestId("link_main_logo").click();
});
