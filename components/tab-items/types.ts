export interface TabItemsProps<T extends string | number> {
  items: { label: string; value: T }[];
  selectedItem: T;
  onClick: (value: T) => void;
}

export interface TabItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}
