import { expect, describe, it } from "vitest";
import { Reflector } from "./Reflector";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe("#reflect()", () => {
  it("should not create an instance if the wiring is incomplete", () => {
    const wiring = "";

    const when = () => new Reflector(ALPHABET, wiring);

    expect(when).toThrowError("Incomplete wiring");
  });

  it("should reflect", () => {
    const wiring = "ZOHSQKYMFIUEATCRDPBXWNLVGJ";
    const reflector = new Reflector(ALPHABET, wiring);

    const result = reflector.reflect(18);

    expect(result).toBe(1);
  });
});
