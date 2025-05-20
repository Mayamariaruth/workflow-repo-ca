import { describe, it } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  // Test 1: Verify exact path match
  it("Returns true when current path matches href exactly", () => {});

  // Test 2: Verify root path variations
  it("Returns true for root path ('/') when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  // Test 3: Verify partial matches
  it("Returns true when current path includes the href", () => {});

  // Test 4: Verify no matches in path
  it("Returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
    expect(isActivePath("/venue", "/login")).toBe(false);
  });
});
