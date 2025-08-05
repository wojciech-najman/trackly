export interface CheckboxProps {
  name: string;
  label: string;
  value: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}
