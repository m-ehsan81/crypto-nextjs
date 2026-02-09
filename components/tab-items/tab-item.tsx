import clsx from "clsx";
import { TabItemProps } from "./types";

function TabItem({ label, isSelected, onClick }: TabItemProps) {
  return (
    <li
      className={clsx(
        "h-full flex items-center text-sm font-medium rounded-lg cursor-pointer px-4 transition-all duration-300 ease-out relative",
        isSelected
          ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md scale-105"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
      )}
      onClick={onClick}
    >
      {label}
      {isSelected && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-blue-500 rounded-full" />
      )}
    </li>
  );
}

export default TabItem;
