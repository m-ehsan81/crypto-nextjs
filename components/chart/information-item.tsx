import { ReactNode } from "react";

function InformationItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl
                    bg-gradient-to-br from-gray-50 to-gray-100
                    dark:from-gray-800 dark:to-gray-700
                    border border-gray-200 dark:border-gray-600
                    transition-all duration-300
                    hover:shadow-lg hover:scale-105
                    hover:border-blue-300 dark:hover:border-blue-600">
      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
        {label}
      </p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">
        {children}
      </p>
    </div>
  );
}

export default InformationItem;
