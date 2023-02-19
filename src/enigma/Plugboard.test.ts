import { expect, describe, it, beforeEach } from "vitest";
import { Plugboard } from "./Plugboard";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe("#constructor()", () => {
  it("should create a Reflector if the wiring is incomplete", () => {
    const plugboard = new Plugboard(ALPHABET, ["GE", "RM", "AN"]);

    expect(plugboard.left).toBe("NBCDGFEHIJKLRAOPQMSTUVWXYZ");
    expect(plugboard.right).toBe(ALPHABET);
  });
});

describe("#forward()", () => {
  let plugboard: Plugboard;

  beforeEach(() => {
    plugboard = new Plugboard(ALPHABET, ["GE", "RM", "AN"]);
  });

  it("should swap plugged letters", () => {
    const signal = plugboard.forward(0);

    expect(signal).toBe(13);
  });

  it("should not swap unplugged letters", () => {
    const signal = plugboard.forward(1);

    expect(signal).toBe(1);
  });
});

describe("#backward()", () => {
  let plugboard: Plugboard;

  beforeEach(() => {
    plugboard = new Plugboard(ALPHABET, ["GE", "RM", "AN"]);
  });

  it("should swap plugged letters", () => {
    const signal = plugboard.backward(0);

    expect(signal).toBe(13);
  });

  it("should not swap unplugged letters", () => {
    const signal = plugboard.backward(1);

    expect(signal).toBe(1);
  });
});
