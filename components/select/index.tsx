import { SelectHTMLAttributes } from "react";

function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="block w-full sm:w-32 h-14 px-4 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-base font-medium rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 shadow-sm dark:shadow-gray-900/50 transition-all duration-300 ease-out hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>')] bg-no-repeat bg-[length:1.2em] bg-[right_0.75rem_center] pr-10"
      {...props}
    />
  );
}

export default Select;
