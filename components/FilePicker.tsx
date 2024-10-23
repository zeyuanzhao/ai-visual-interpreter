"use client";

import { useRef } from "react";

const FilePicker = ({
  file,
  setFile,
  className,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  className?: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        className={
          "w-64 h-32 flex flex-row justify-center items-center border-4 border-slate-500 border-dashed hover:cursor-pointer " +
          className
        }
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <input
          type="file"
          hidden
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          ref={inputRef}
          multiple={false}
        />
        {file ? (
          <p className="text-md text-center">{file.name}</p>
        ) : (
          <p className="text-xl font-bold text-center">Click to Upload Image</p>
        )}
      </div>
    </div>
  );
};

export default FilePicker;
