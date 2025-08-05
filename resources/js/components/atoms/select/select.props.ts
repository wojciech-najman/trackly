export interface SelectProps {
  options: { label: string; value: string }[];
  name?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  errors?: boolean;
  disabled?: boolean;
  emptyLabel?: string;
  emptyDisabled?: boolean;
}
