"use client";

import { Warning2 } from "iconsax-reactjs";

export default function Error() {
  return (
    <div className="fixed top-[50%] left-0 right-0 flex flex-col items-center gap-4 h-50 -mt-25">
      <Warning2 size={64} className="text-gray-400" />
      <h2 className="text-gray-400 text-2xl">Something went wrong</h2>
    </div>
  );
}
