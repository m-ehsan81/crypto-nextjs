import { ReactNode } from "react";

function InformationItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex text-lg">
      <p className="mr-2 text-blue-500">{`${label}:`}</p>
      <span>{children}</span>
    </div>
  );
}

export default InformationItem;
