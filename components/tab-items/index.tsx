import TabItem from "./tab-item";
import { TabItemsProps } from "./types";

function TabItems<T extends string | number = string>(props: TabItemsProps<T>) {
  const { items, selectedItem, onClick } = props;

  return (
    <ul className="h-10 flex items-center gap-2 bg-gray-800 px-1 rounded-md">
      {items.map((item) => (
        <TabItem
          key={item.value}
          label={item.label}
          isSelected={selectedItem === item.value}
          onClick={() => onClick(item.value)}
        />
      ))}
    </ul>
  );
}

export default TabItems;
