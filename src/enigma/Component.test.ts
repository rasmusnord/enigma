import { expect, describe, it, beforeEach } from "vitest";
import { Component } from "./Component";

describe("#constructor()", () => {
  let component: Component;

  beforeEach(() => {
    const left = "ABC";
    const right = "BAC";

    component = new Component(left, right);
  });

  it("should have left", () => {
    expect(component.left).toBe("ABC");
  });

  it("should have right", () => {
    expect(component.right).toBe("BAC");
  });
});
