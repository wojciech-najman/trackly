export interface TextareaProps {
  name: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  autocomplete?: string;
  className?: string;
  rows?: number;
  errors?: boolean;
}
