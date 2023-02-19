import { expect, describe, it, beforeEach } from "vitest";
import { Reflector } from "./Reflector";
import { Rotor } from "./Rotor";

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

describe("#isAtNotch()", () => {
  it("should return 'false' when not at notch", () => {
    const left = "ABCDEF";
    const right = "FCEDAB";
    const notch = "C";

    const rotor = new Rotor(left, right, notch);

    expect(rotor.isAtNotch()).toBe(false);
  });

  it("should return 'true' when at notch", () => {
    const left = "ABCDEF";
    const right = "FCEDAB";
    const notch = "A";

    const rotor = new Rotor(left, right, notch);

    expect(rotor.isAtNotch()).toBe(true);
  });
});

describe("#setRingPosition()", () => {
  let rotor: Rotor;

  beforeEach(() => {
    const left = "ABCDEF";
    const right = "FCEDAB";
    const notch = "A";

    rotor = new Rotor(left, right, notch);
  });

  it("should be on initial setting before any call", () => {
    expect(rotor.left).toBe("ABCDEF");
    expect(rotor.right).toBe("FCEDAB");
    expect(rotor.notch).toBe("A");
  });

  it("should treat 1 as first", () => {
    rotor.setRingPosition(1);

    expect(rotor.left).toBe("ABCDEF");
    expect(rotor.right).toBe("FCEDAB");
    expect(rotor.notch).toBe("A");
  });

  it("should be on initial setting before any call", () => {
    rotor.setRingPosition(3);

    expect(rotor.left).toBe("EFABCD");
    expect(rotor.right).toBe("ABFCED");
    expect(rotor.notch).toBe("E");
  });
});

describe("#forward()", () => {
  it("should find a signal on the left side matching the right side input", () => {
    const left = "ABCDEF";
    const right = "FCEDAB";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    const signal = rotor.forward(1);

    expect(signal).toBe(2);
  });
});

describe("#backward()", () => {
  it("should find a signal on the right side matching the left side input", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    const signal = rotor.backward(3);

    expect(signal).toBe(5);
  });
});

describe("#rotate()", () => {
  it("should be able to rotate one step forward", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    expect(rotor.left).toBe("ABCDEF");
    expect(rotor.right).toBe("EFCBAD");

    rotor.rotate(1);

    expect(rotor.left).toBe("BCDEFA");
    expect(rotor.right).toBe("FCBADE");
  });

  it("should be able to rotate multiple steps forward", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    rotor.rotate(3);

    expect(rotor.left).toBe("DEFABC");
    expect(rotor.right).toBe("BADEFC");
  });

  it("should be able to rotate one step backward", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    rotor.rotate(1, false);

    expect(rotor.left).toBe("FABCDE");
    expect(rotor.right).toBe("DEFCBA");
  });

  it("should be able to rotate multiple steps backward", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    rotor.rotate(3, false);

    expect(rotor.left).toBe("DEFABC");
    expect(rotor.right).toBe("BADEFC");
  });
});

describe("#rotateToLetter()", () => {
  it("should rotate to letter", () => {
    const left = "ABCDEF";
    const right = "EFCBAD";
    const notch = "A";
    const rotor = new Rotor(left, right, notch);

    expect(rotor.left).toBe("ABCDEF");
    expect(rotor.right).toBe("EFCBAD");

    rotor.rotateToLetter("E");

    expect(rotor.left).toBe("EFABCD");
    expect(rotor.right).toBe("ADEFCB");
  });
});
