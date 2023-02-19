import { expect, describe, it } from "vitest";
import { Keyboard } from "./Keyboard";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe("#forward()", () => {
  it("should transform letter to signal", () => {
    const keyboard = new Keyboard(ALPHABET);

    const signal = keyboard.forward("A");

    expect(signal).toBe(0);
  });
});

describe("#backward()", () => {
  it("should transform signal to letter", () => {
    const keyboard = new Keyboard(ALPHABET);

    const letter = keyboard.backward(0);

    expect(letter).toBe("A");
  });
});
