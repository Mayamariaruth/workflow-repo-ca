import { expect, describe, it, beforeEach } from "vitest";
import { getUsername, saveUser } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  // Test 1: Save a user object in storage and retrieve its name
  it("Returns the name from the user object in storage", () => {
    const user = { name: "Maya" };
    saveUser(user);
    expect(getUsername()).toBe("Maya");
  });

  // Test 2: Handle missing user in storage
  it("Returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
