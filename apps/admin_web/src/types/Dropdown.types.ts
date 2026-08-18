export type DropdownOption = {
  value: number;
  label: string;
};

export type DropdownProps = {
  value: number;
  options: DropdownOption[];
  onChange: (value: number) => void;
};
