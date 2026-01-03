export interface ChartProps {
  currency: string;
  selectedCoin: string;
  onClose: () => void;
}

export interface TypeButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}
