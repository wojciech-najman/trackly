export interface ToggleGroupProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
