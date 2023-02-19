import { LabeledElement, LabeledElementProps } from "./LabeledElement";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type LabeledInputProps = LabeledElementProps & InputProps;

export const LabeledInput = (props: LabeledInputProps) => {
  const { label, ...inputProps } = props;

  return (
    <LabeledElement label={label}>
      <input {...inputProps} />
    </LabeledElement>
  );
};
