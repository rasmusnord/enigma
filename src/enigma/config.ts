import { MachineConfig } from "./types";

export const m3: MachineConfig = {
  name: "M3",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numberOfRotors: 3,
  reflectors: [
    {
      name: "UKW A",
      wiring: "EJMZALYXVBWFCRQUONTSPIKHGD",
    },
    {
      name: "UKW B",
      wiring: "YRUHQSLDPXNGOKMIEBFZCWVJAT",
    },
    {
      name: "UKW C",
      wiring: "FVPJIAOYEDRZXWGCTKUQSBNMHL",
    },
  ],
  rotors: [
    {
      name: "I",
      wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
      notch: "Q",
    },
    {
      name: "II",
      wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
      notch: "E",
    },
    {
      name: "III",
      wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
      notch: "V",
    },
    {
      name: "IV",
      wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
      notch: "J",
    },
    {
      name: "V",
      wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
      notch: "Z",
    },
  ],
};
