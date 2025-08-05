export interface InputProps {
  type?: string;
  name: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  autocomplete?: string;
  className?: string;
  errors?: boolean;
  disabled?: boolean;
}
