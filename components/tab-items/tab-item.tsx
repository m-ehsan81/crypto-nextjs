import clsx from "clsx";
import { TabItemProps } from "./types";

function TabItem({ label, isSelected, onClick }: TabItemProps) {
  return (
    <li
      className={clsx(
        "h-[80%] flex items-center text-base rounded-md cursor-pointer px-2 text-gray-500 hover:text-black transition-all duration-300 dark:hover:text-white",
        isSelected &&
          "bg-gray-100 text-black shadow-md dark:bg-gray-950 dark:text-white"
      )}
      onClick={onClick}
    >
      {label}
    </li>
  );
}

export default TabItem;
