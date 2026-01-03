import clsx from "clsx";
import { TabItemProps } from "./types";

function TabItem({ label, isSelected, onClick }: TabItemProps) {
  return (
    <li
      className={clsx(
        "h-[80%] flex items-center text-base rounded-md cursor-pointer px-2 text-gray-500 hover:text-white transition-all duration-300",
        isSelected && "bg-gray-950 text-white shadow-md"
      )}
      onClick={onClick}
    >
      {label}
    </li>
  );
}

export default TabItem;
