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
    <div className="w-100 flex justify-between items-center m-auto mb-25">
      <PaginationButton onClick={() => goTo(page - 1)} disabled={page === 1}>
        previous
      </PaginationButton>

      {range.map((item, idx) =>
        item === "dots" ? (
          <span key={idx}>…</span>
        ) : (
          <button
            key={idx}
            onClick={() => goTo(item)}
            className={clsx(
              "border border-blue-500 w-6 text-center rounded-sm cursor-pointer",
              item === page && "bg-blue-500"
            )}
          >
            {item}
          </button>
        )
      )}

      <PaginationButton
        onClick={() => goTo(page + 1)}
        disabled={page === count}
      >
        next
      </PaginationButton>
    </div>
  );
};
