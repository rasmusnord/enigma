import { expect, describe, it } from "vitest";
import {
  rotateForward,
  rotateBackward,
  hasSameLetters,
  sortString,
  swap,
  repeat,
  signalFromLetter,
  letterFromSignal,
  forward,
  backward,
  mod,
} from "./utils";

describe("#repeat()", () => {
  it("should repeat", () => {
    const n = 5;
    const initialValue = 0;
    const plusOne = (x: number) => x + 1;

    const result = repeat(n, plusOne, initialValue);

    expect(result).toBe(n);
  });
});

describe("#rotateForward()", () => {
  it("should rotate forwards", () => {
    const s = "ABC";

    const result = rotateForward(s);

    expect(result).toBe("BCA");
  });
});

describe("#rotateBackward()", () => {
  it("should rotate backwards", () => {
    const s = "ABC";

    const result = rotateBackward(s);

    expect(result).toBe("CAB");
  });
});

describe("#sortString()", () => {
  it("should sort all the characters in the string", () => {
    const s = "CABEDF";

    const result = sortString(s);

    expect(result).toBe("ABCDEF");
  });
});

describe("#hasSameLetters()", () => {
  it("should return 'true' if has all", () => {
    const a = "ABCDEF";
    const b = "ABFDCE";

    const result = hasSameLetters(a, b);

    expect(result).toBe(true);
  });

  it("should return 'false' if not has all", () => {
    const a = "ABCDEF";
    const b = "DEF";

    const result = hasSameLetters(a, b);

    expect(result).toBe(false);
  });
});

describe("#signalFromLetter()", () => {
  it("should get signal from letter", () => {
    const wiring = "ABCDEF";

    const signal = signalFromLetter(wiring, "A");

    expect(signal).toBe(0);
  });
});

describe("#letterFromSignal()", () => {
  it("should get letter from signal", () => {
    const wiring = "ABCDEF";
    const signal = 0;

    const letter = letterFromSignal(wiring, signal);

    expect(letter).toBe("A");
  });
});

describe("#swap()", () => {
  it("should swap a and b", () => {
    const wiring = "ABCDEF";
    const a = "D";
    const b = "C";

    const result = swap(wiring, a, b);

    expect(result).toBe("ABDCEF");
  });
});

describe("#forward()", () => {
  it("should find a signal on the left side matching the right side input", () => {
    const left = "ABCDEF";
    const right = "DAFCEB";
    const signal = 3;

    const nextSignal = forward(left, right, signal);

    expect(nextSignal).toBe(2);
  });
});

describe("#backward()", () => {
  it("should find a signal on the right side matching the left side input", () => {
    const left = "ABCDEF";
    const right = "DAFCEB";
    const signal = 3;

    const nextSignal = backward(left, right, signal);

    expect(nextSignal).toBe(0);
  });
});

describe("#mod()", () => {
  it("should return the correct modulo for positive numbers", () => {
    expect(mod(7, 3)).toEqual(1);
    expect(mod(10, 5)).toEqual(0);
  });

  it("should return the correct modulo for negative numbers", () => {
    expect(mod(-7, 3)).toEqual(2);
    expect(mod(-10, 5)).toEqual(0);
  });

  it("should return the correct modulo for a negative dividend and positive divisor", () => {
    expect(mod(-7, -3)).toEqual(-1);
    expect(mod(-10, -5)).toEqual(0);
  });

  it("should return the correct modulo for a positive dividend and negative divisor", () => {
    expect(mod(7, -3)).toEqual(-2);
    expect(mod(10, -5)).toEqual(0);
  });
});
