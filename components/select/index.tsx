import { SelectHTMLAttributes } from "react";

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="block w-30 h-15 px-3 py-2.5 bg-gray-100 border border-gray-500 text-black placeholder:text-gray-500 placeholder:opacity-100 text-sm rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-xs dark:bg-gray-800 dark:text-white"
      {...props}
    />
  );
}

export default Select;
