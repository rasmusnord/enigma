import { useEffect, useState } from "react";
import {
  generateDefaultPlugboard,
  generateDefaultRotors,
  parsePlugboard,
  sanitizeInput,
  validPlugboard,
} from "../utils";
import { Enigma } from "../enigma/Enigma";
import { RotorSettings, MachineConfig } from "../enigma/types";
import { LabeledSelect } from "./LabeledSelect";
import { LabeledInput } from "./LabeledInput";
import { LabeledTextarea } from "./LabeledTextarea";
import { FormRow } from "./FormRow";
import styles from "../styles/form.module.css";

export interface FormProps {
  machineConfig: MachineConfig;
}

export default function Form(props: FormProps) {
  const { machineConfig } = props;
  const { alphabet } = machineConfig;
  const reflectorOptions = machineConfig.reflectors.map(({ name }) => name);
  const rotorOptions = machineConfig.rotors.map(({ name }) => name);
  const positionOptions = alphabet.split("");
  const ringOptions = positionOptions.map((_, i) => `${i + 1}`);
  const [defaultReflector] = reflectorOptions;

  const [rotors, setRotors] = useState(generateDefaultRotors(machineConfig));
  const [reflector, setReflector] = useState(defaultReflector);
  const [plugboard, setPlugbord] = useState(
    generateDefaultPlugboard(machineConfig)
  );
  const [plugboardError, setPlugboardError] = useState(false);
  const [input, setInput] = useState("HELLO");
  const [output, setOutput] = useState("");

  useEffect(() => {
    setPlugboardError(!validPlugboard(alphabet, plugboard));
  }, [plugboard]);

  useEffect(() => {
    const settings = {
      reflector,
      rotors: rotors.map(({ rotor }) => rotor),
      plugboard: validPlugboard(alphabet, plugboard)
        ? parsePlugboard(plugboard)
        : [],
    };
    const ringPositions = rotors.map(({ ring }) => Number.parseInt(ring));
    const initialPositions = rotors.map(({ position }) => position);

    const enigma = new Enigma(settings);

    enigma.setRingPositions(ringPositions);
    enigma.setInitialPositions(initialPositions);

    const output = enigma.convert(input);

    setOutput(output);
  }, [input, plugboard, reflector, rotors]);

  return (
    <div>
      <FormRow>
        <LabeledSelect
          label="Reflector"
          testId="reflector"
          value={reflector}
          options={reflectorOptions}
          onChange={(value) => setReflector(value)}
        />
      </FormRow>
      {rotors.map((rotorSettings, i) => {
        const { rotor, ring, position } = rotorSettings;
        const index = i + 1;
        const onChange = (nextRotorSettings: RotorSettings) => {
          const a = [...rotors];
          a[i] = nextRotorSettings;
          setRotors(a);
        };

        return (
          <FormRow key={i}>
            <LabeledSelect
              label={`Rotor ${index}`}
              testId={`rotor-${index}`}
              value={rotor}
              options={rotorOptions}
              onChange={(rotor) => onChange({ ...rotorSettings, rotor })}
            />
            <LabeledSelect
              label={`Ring ${index}`}
              testId={`ring-${index}`}
              value={ring}
              options={ringOptions}
              onChange={(ring) => onChange({ ...rotorSettings, ring })}
            />
            <LabeledSelect
              label={`Position ${index}`}
              testId={`position-${index}`}
              value={position}
              options={positionOptions}
              onChange={(position) => onChange({ ...rotorSettings, position })}
            />
          </FormRow>
        );
      })}
      <FormRow>
        <LabeledInput
          label="Plugboard"
          className={plugboardError ? styles.error : ""}
          data-testid="plugboard"
          type="text"
          spellCheck="false"
          value={plugboard}
          onChange={(event) =>
            setPlugbord(sanitizeInput(alphabet, event.target.value, true))
          }
        />
      </FormRow>
      <FormRow>
        <LabeledTextarea
          label="Input"
          data-testid="input"
          spellCheck="false"
          value={input}
          onChange={(event) =>
            setInput(sanitizeInput(alphabet, event.target.value))
          }
        />
      </FormRow>
      <FormRow>
        <LabeledTextarea
          label="Output"
          data-testid="output"
          spellCheck="false"
          readOnly={true}
          value={output}
          onChange={(event) => setOutput(event.target.value)}
        />
      </FormRow>
    </div>
  );
}
