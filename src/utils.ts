import { MachineConfig, RotorSettings } from "./enigma/types";

export const chunk = (s: string, n = 5) => {
  const re = new RegExp(`.{1,${n}}`, "g");
  const chunks = s.match(re);

  return chunks ? chunks.join(" ") : "";
};

export const parsePlugboard = (plugboard: string) => plugboard.split(" ");

export const stringifyPlugboard = (plugboard: string[]) => plugboard.join(" ");

export const generateDefaultRotors = (
  machineConfig: MachineConfig
): RotorSettings[] => {
  const [firstRotorOption] = machineConfig.rotors;
  const { name: rotor } = firstRotorOption;
  const [position] = machineConfig.alphabet;

  return Array(machineConfig.numberOfRotors).fill({
    rotor,
    position,
    ring: 1,
  });
};

export const generateDefaultPlugboard = (
  machineConfig: MachineConfig,
  pairs = 3
): string => {
  return stringifyPlugboard(
    chunk(machineConfig.alphabet.slice(0, pairs * 2), 2).split(" ")
  );
};

export const validPlugboard = (alphabet: string, plugboard: string) => {
  const re = new RegExp(`^([${alphabet}]{2}\\ )*[${alphabet}]{2}$`);

  return re.test(plugboard);
};

export const sanitizeInput = (
  alphabet: string,
  input: string,
  allowSpace = false
) => {
  const allowed = allowSpace ? alphabet + " " : alphabet;

  return input
    .toUpperCase()
    .split("")
    .filter((x) => allowed.includes(x))
    .join("");
};
