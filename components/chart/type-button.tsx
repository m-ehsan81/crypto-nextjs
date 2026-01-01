import clsx from "clsx";
import { TypeButtonProps } from "./types";

function TypeButton({ label, isSelected, onClick }: TypeButtonProps) {
  return (
    <button
      className={clsx(
        "m-5 bg-gray-950 border border-blue-500 text-blue-500 text-base px-2.5 py-1.25 rounded-[.3125rem] cursor-pointer",
        isSelected && "bg-blue-500 text-white"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default TypeButton;
