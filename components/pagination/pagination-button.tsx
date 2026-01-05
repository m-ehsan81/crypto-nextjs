import { ButtonHTMLAttributes } from "react";

function PaginationButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="min-w-20 h-10 px-4
                 bg-gradient-to-r from-blue-500 to-blue-600
                 hover:from-blue-600 hover:to-blue-700
                 dark:from-blue-600 dark:to-blue-700
                 dark:hover:from-blue-700 dark:hover:to-blue-800
                 text-white font-medium text-sm
                 rounded-lg
                 border-none
                 shadow-md hover:shadow-lg
                 transition-all duration-300 ease-out
                 hover:scale-105 active:scale-95
                 disabled:opacity-40 disabled:cursor-not-allowed
                 disabled:hover:scale-100 disabled:hover:shadow-md
                 flex items-center justify-center"
      {...props}
    />
  );
}

export default PaginationButton;
