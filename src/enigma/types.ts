export interface ReflectorConfig {
  name: string;
  wiring: string;
}

export interface RotorConfig {
  name: string;
  wiring: string;
  notch: string;
}

export interface MachineConfig {
  name: string;
  alphabet: string;
  numberOfRotors: number;
  reflectors: ReflectorConfig[];
  rotors: RotorConfig[];
}

export interface RotorSettings {
  rotor: string;
  position: string;
  ring: string;
}
