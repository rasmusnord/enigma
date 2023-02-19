import { expect, describe, it } from "vitest";
import { Enigma } from "./Enigma";

describe("#constructor()", () => {
  it("should throw if invalid arguments", () => {
    const when = () =>
      new Enigma({
        reflector: "BLA BLA",
        rotors: ["IV", "II", "I"],
        plugboard: ["AB", "CD", "EF"],
      });

    expect(when).toThrow(Error);
  });
});

describe("#setRingPositions()", () => {
  it("should throw if invalid arguments", () => {
    const enigma = new Enigma({
      reflector: "UKW B",
      rotors: ["IV", "II", "I"],
      plugboard: ["AB", "CD", "EF"],
    });

    const when = () => enigma.setRingPositions([5, 26]);

    expect(when).toThrow(Error);
  });
});

describe("#setInitialPositions()", () => {
  it("should throw if invalid arguments", () => {
    const enigma = new Enigma({
      reflector: "UKW B",
      rotors: ["IV", "II", "I"],
      plugboard: ["AB", "CD", "EF"],
    });

    const when = () => enigma.setInitialPositions(["A"]);

    expect(when).toThrow(Error);
  });
});

describe("#convert()", () => {
  it("should convert to cipher text", () => {
    const enigma = new Enigma({
      reflector: "UKW B",
      rotors: ["II", "I", "IV"],
      plugboard: ["GE", "RM", "AN"],
    });

    enigma.setRingPositions([7, 5, 2]);
    enigma.setInitialPositions(["W", "A", "R"]);

    const chiper = enigma.convert(
      "LOREMIPSUMDOLORSITAMETCONSECTETURADIPISCINGELIT"
    );

    expect(chiper).toBe("ZEMCEOSGQVCRJEIXBBVXCBKMMDJSIMVTYZKFHYZJJJCXXNB");
  });
});
