import { LabeledElement, LabeledElementProps } from "./LabeledElement";
import { Select, SelectProps } from "./Select";

export type LabeledSelectProps = LabeledElementProps & SelectProps;

export const LabeledSelect = (props: LabeledSelectProps) => {
  const { label, ...selectProps } = props;

  return (
    <LabeledElement label={label}>
      <Select {...selectProps} />
    </LabeledElement>
  );
};
