import TabItem from "./tab-item";
import { TabItemsProps } from "./types";

function TabItems<T extends string | number = string>(props: TabItemsProps<T>) {
  const { items, selectedItem, onClick } = props;

  return (
    <ul className="h-12 flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-1.5 py-1 rounded-xl border border-gray-200 dark:border-gray-700 shadow-inner">
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
