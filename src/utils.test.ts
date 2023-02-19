import { expect, describe, it } from "vitest";
import { m3 } from "./enigma/config";
import {
  chunk,
  generateDefaultPlugboard,
  generateDefaultRotors,
  parsePlugboard,
  sanitizeInput,
  stringifyPlugboard,
  validPlugboard,
} from "./utils";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe("#chunk()", () => {
  it("should by default chunk by 5", () => {
    const result = chunk(alphabet);

    expect(result).toBe("ABCDE FGHIJ KLMNO PQRST UVWXY Z");
  });

  it("should chunk by variable", () => {
    const result = chunk(alphabet, 2);

    expect(result).toBe("AB CD EF GH IJ KL MN OP QR ST UV WX YZ");
  });

  it("should return empty string if empty", () => {
    const result = chunk("", 2);

    expect(result).toBe("");
  });
});

describe("#parsePlugboard()", () => {
  it("should parse plugboard", () => {
    const result = parsePlugboard("AB CD EF");

    expect(result).toStrictEqual(["AB", "CD", "EF"]);
  });
});

describe("#stringifyPlugboard()", () => {
  it("should stringify plugboard", () => {
    const result = stringifyPlugboard(["AB", "CD", "EF"]);

    expect(result).toBe("AB CD EF");
  });
});

describe("#generateDefaultRotors()", () => {
  it("should generate default rotors", () => {
    const result = generateDefaultRotors(m3);

    expect(result).toStrictEqual([
      { rotor: "I", ring: 1, position: "A" },
      { rotor: "I", ring: 1, position: "A" },
      { rotor: "I", ring: 1, position: "A" },
    ]);
  });
});

describe("#generateDefaultPlugboard()", () => {
  it("should generate default plugboard", () => {
    const result = generateDefaultPlugboard(m3);

    expect(result).toBe("AB CD EF");
  });
});

describe("#validPlugboard()", () => {
  it("should return 'true' if one valid pairs", () => {
    const result = validPlugboard(alphabet, "AB");

    expect(result).toBe(true);
  });

  it("should return 'true' if multiple valid pairs", () => {
    const result = validPlugboard(alphabet, "AB CD EF");

    expect(result).toBe(true);
  });

  it("should return 'false' then there is bad formatting", () => {
    const result = validPlugboard(alphabet, "ABCD");

    expect(result).toBe(false);
  });

  it("should return 'false' then there are incomplete pairs", () => {
    const result = validPlugboard(alphabet, "AB C");

    expect(result).toBe(false);
  });

  it("should return 'false' then there invalid pairs", () => {
    const result = validPlugboard("ABCDEF", "KL MN");

    expect(result).toBe(false);
  });
});

describe("#sanitizeInput()", () => {
  it("should sanitize input", () => {
    const result = sanitizeInput(alphabet, "Hello, World!");

    expect(result).toBe("HELLOWORLD");
  });

  it("should sanitize input, but allow spaces", () => {
    const result = sanitizeInput(alphabet, "Hello, World!", true);

    expect(result).toBe("HELLO WORLD");
  });
});
