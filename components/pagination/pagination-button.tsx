import { ButtonHTMLAttributes } from "react";

function PaginationButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-22 bg-blue-500 text-white border-none p-[.3125rem_.625rem] rounded-sm text-lg cursor-pointer disabled:opacity-30"
      {...props}
    />
  );
}

export default PaginationButton;
