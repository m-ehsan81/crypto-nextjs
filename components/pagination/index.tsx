import React from "react";
import PaginationButton from "./pagination-button";
import clsx from "clsx";

export const Pagination: React.FC<PaginationProps> = ({
  page,
  count,
  onChange,
}) => {
  if (count <= 1) return null;

  const createRange = () => {
    if (count < 5) {
      return Array.from({ length: count }, (_, i) => i + 1);
    }

    const showLeftDots = page > 3;
    const showRightDots = page < count - 2;

    const range: (number | "dots")[] = [];

    range.push(1);

    if (showLeftDots) {
      range.push("dots");
    } else {
      for (let i = 2; i <= 3; i++) range.push(i);
    }

    if (showLeftDots && showRightDots) {
      range.push(page);
    }

    if (showRightDots) {
      range.push("dots");
    } else {
      for (let i = count - 2; i < count; i++) range.push(i);
    }

    if (count !== 1) range.push(count);

    return range;
  };

  const range = createRange();

  const goTo = (p: number) => {
    if (p < 1 || p > count || p === page) return;
    onChange(p);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 my-8">
      <PaginationButton onClick={() => goTo(page - 1)} disabled={page === 1}>
        <span className="hidden sm:inline">Previous</span>
        <span className="sm:hidden">‹</span>
      </PaginationButton>

      <div className="flex gap-2 items-center">
        {range.map((item, idx) =>
          item === "dots" ? (
            <span 
              key={idx}
              className="px-2 text-gray-400 dark:text-gray-500"
            >
              …
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => goTo(item)}
              className={clsx(
                "min-w-10 h-10 px-3 rounded-lg font-medium text-sm transition-all duration-300 ease-out border-2",
                item === page
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105"
                  : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105 active:scale-95"
              )}
            >
              {item}
            </button>
          )
        )}
      </div>

      <PaginationButton
        onClick={() => goTo(page + 1)}
        disabled={page === count}
      >
        <span className="hidden sm:inline">Next</span>
        <span className="sm:hidden">›</span>
      </PaginationButton>
    </div>
  );
};
