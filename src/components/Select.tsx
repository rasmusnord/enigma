export interface SelectProps {
  testId: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  const { testId, value, options, onChange } = props;

  return (
    <select
      data-testid={testId}
      defaultValue={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};
