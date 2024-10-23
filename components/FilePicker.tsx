"use client";

import { useRef } from "react";

const FilePicker = ({
  file,
  setFile,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div
        className="w-64 h-32 flex flex-row justify-center items-center border-4 border-slate-500 border-dashed hover:cursor-pointer"
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
          <p className="text-xl font-bold text-center">Upload Image</p>
        )}
      </div>
    </div>
  );
};

export default FilePicker;
