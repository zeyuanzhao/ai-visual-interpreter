"use client";

import { useRef } from "react";

// Defines the `FilePicker` component. Make sure that the component can keep track of a file and set a file.
const FilePicker = ({ className }: { className?: string }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        className={
          "w-64 h-32 flex flex-row justify-center items-center border-3 rounded-lg border-slate-500 border-dashed hover:cursor-pointer " +
          className
        }
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        {/* Update the input to save the file once it is submitted */}
        <input type="file" hidden ref={inputRef} multiple={false} />
        <p className="text-xl font-bold text-center">Click to Upload Image</p>
      </div>
    </div>
  );
};

export default FilePicker;
