import { LabeledElement, LabeledElementProps } from "./LabeledElement";

export type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type LabeledTextareaProps = LabeledElementProps & TextareaProps;

export const LabeledTextarea = (props: LabeledTextareaProps) => {
  const { label, ...textareaProps } = props;

  return (
    <LabeledElement label={label}>
      <textarea {...textareaProps} />
    </LabeledElement>
  );
};
