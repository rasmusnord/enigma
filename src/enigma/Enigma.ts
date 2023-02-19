import { Keyboard } from "./Keyboard";
import { Plugboard } from "./Plugboard";
import { Reflector } from "./Reflector";
import { Rotor } from "./Rotor";
import { m3 } from "./config";
import { RotorConfig } from "./types";

const withName =
  (name: string) =>
  <T extends { name: string }>(obj: T) =>
    obj.name === name;

export interface EnigmaSettings {
  reflector: string;
  rotors: string[];
  plugboard: string[];
}

export class Enigma {
  private reflector: Reflector;
  private rotors: Rotor[];
  private plugboard: Plugboard;
  private keyboard: Keyboard;

  constructor(settings: EnigmaSettings) {
    const { reflector, plugboard } = settings;
    const { alphabet, reflectors, rotors } = m3;

    const reflectorConfig = reflectors.find(withName(reflector));
    const rotorConfigs = settings.rotors.map((name) =>
      rotors.find(withName(name))
    );

    const all = rotorConfigs.every((rotorConfigs) => !!rotorConfigs);

    if (!(reflectorConfig && all)) {
      throw new Error("Invalid settings");
    }

    this.reflector = new Reflector(alphabet, reflectorConfig.wiring);
    this.rotors = (rotorConfigs as RotorConfig[]).map(
      ({ wiring, notch }) => new Rotor(alphabet, wiring, notch)
    );
    this.keyboard = new Keyboard(alphabet);
    this.plugboard = new Plugboard(alphabet, plugboard);
  }

  setRingPositions(ringPositions: number[]) {
    if (this.rotors.length != ringPositions.length) {
      throw new Error("Invalid number of ring positions");
    }

    this.rotors.forEach((rotor, i) => rotor.setRingPosition(ringPositions[i]));
  }

  setInitialPositions(initialPositions: string[]) {
    if (this.rotors.length != initialPositions.length) {
      throw new Error("Invalid number of letters");
    }

    this.rotors.forEach((rotor, i) =>
      rotor.rotateToLetter(initialPositions[i])
    );
  }

  private rotate() {
    const { rotors } = this;
    const rotations = Array(this.rotors.length).fill(false);

    for (let i = 0; i < rotors.length; i++) {
      const isRightmost = i === rotors.length - 1;
      const isAtNotch = rotors[i].isAtNotch();
      const hasNeighbour = i + 1 < rotors.length;
      const neighbourAtNotch = hasNeighbour ? rotors[i + 1].isAtNotch() : false;
      const shouldRotate = isRightmost || isAtNotch || neighbourAtNotch;

      rotations[i] = shouldRotate;
    }

    rotations.forEach(
      (shouldRotate, i) => shouldRotate && this.rotors[i].rotate()
    );
  }

  convert(input: string) {
    return input
      .split("")
      .map((letter) => this.convertOne(letter))
      .join("");
  }

  private convertOne(input: string) {
    this.rotate();

    const { rotors, keyboard, plugboard, reflector } = this;

    let signal = keyboard.forward(input);

    signal = plugboard.forward(signal);

    for (let i = rotors.length - 1; i >= 0; i--) {
      signal = rotors[i].forward(signal);
    }

    signal = reflector.reflect(signal);

    for (let i = 0; i < rotors.length; i++) {
      signal = rotors[i].backward(signal);
    }

    signal = plugboard.backward(signal);

    const output = keyboard.backward(signal);

    return output;
  }
}
