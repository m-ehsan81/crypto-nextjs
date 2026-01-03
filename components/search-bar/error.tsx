import { Warning2 } from "iconsax-reactjs";

function Error() {
  return (
    <div className="relative h-50 text-gray-500 flex items-center justify-center gap-2">
      <Warning2 />
      <span>Something went wrong</span>
    </div>
  );
}

export default Error;
