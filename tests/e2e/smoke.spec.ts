import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/eissorten",
  "/geschichte",
  "/salon",
  "/kontakt",
  "/impressum",
  "/datenschutz",
];

test("all marketing routes render in German", async ({ page }) => {
  for (const route of routes) {
    const res = await page.goto(route);
    expect(res?.ok()).toBeTruthy();
    await expect(page.locator("html")).toHaveAttribute("lang", "de");
  }
});

test("home hero and visit CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Italienische Eiskunst in Hernals",
  );
  await expect(page.getByRole("link", { name: "Jetzt besuchen" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Eissorten entdecken" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Anfahrt" }).first()).toBeVisible();
  await expect(page.getByText("online bestellen", { exact: false })).toHaveCount(0);
});

test("eissorten filters", async ({ page }) => {
  await page.goto("/eissorten");
  await expect(page.getByRole("button", { name: "Klassiker" })).toBeVisible();
  await page.getByRole("button", { name: "Frucht" }).click();
  await expect(page.getByText("Zitrone")).toBeVisible();
  await expect(page.getByText("Amarena")).toHaveCount(0);
});

test("geschichte has four beats", async ({ page }) => {
  await page.goto("/geschichte");
  await expect(page.getByText("Vincenzo").first()).toBeVisible();
  await expect(page.getByText("1907").first()).toBeVisible();
  await expect(page.getByText("1988").first()).toBeVisible();
  await expect(page.getByText("Fausto").first()).toBeVisible();
  await expect(page.getByText("Sonja").first()).toBeVisible();
});

test("impressum entities", async ({ page }) => {
  await page.goto("/impressum");
  await expect(page.getByText("Gelateria Arnoldo OG").first()).toBeVisible();
  await expect(page.getByText("FN 289666f")).toBeVisible();
});

test("kontakt exposes phone email hours", async ({ page }) => {
  await page.goto("/kontakt");
  await expect(page.getByText("+43 1 486 68 94").first()).toBeVisible();
  await expect(page.getByText("gelateria@arnoldo.at").first()).toBeVisible();
  await expect(page.getByText("12:00–22:00").first()).toBeVisible();
});

test("localbusiness json-ld on home", async ({ page }) => {
  await page.goto("/");
  const json = await page.locator('script[type="application/ld+json"]').textContent();
  expect(json).toContain("IceCreamShop");
  expect(json).toContain("Hernalser Hauptstraße 145");
});
