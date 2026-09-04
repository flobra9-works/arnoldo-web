import { afterEach, describe, expect, it } from "vitest";
import { withBase } from "@/lib/paths";

describe("withBase", () => {
  const original = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    } else {
      process.env.NEXT_PUBLIC_BASE_PATH = original;
    }
  });

  it("returns path unchanged when base path is empty", () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(withBase("/images/hero.jpg")).toBe("/images/hero.jpg");
  });

  it("prefixes absolute paths with the base path", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/arnoldo-web";
    expect(withBase("/images/hero.jpg")).toBe("/arnoldo-web/images/hero.jpg");
  });

  it("leaves protocol-relative and non-absolute paths alone", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/arnoldo-web";
    expect(withBase("//cdn.example/img.jpg")).toBe("//cdn.example/img.jpg");
    expect(withBase("images/hero.jpg")).toBe("images/hero.jpg");
  });
});
