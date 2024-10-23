"use client";

import Chatbot from "@/components/Chatbot";
import FilePicker from "@/components/FilePicker";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="px-6 pt-8 h-screen flex flex-col">
      <div>
        <h1 className="text-4xl font-bold">AI Image Interpreter</h1>
        <h2 className="text-2xl">
          <Link
            className="hover:underline"
            href="https://github.com/mbhsdev/ai-visual-interpreter"
          >
            MBHS Dev Club
          </Link>
        </h2>
      </div>

      <div className="flex-auto">
        {file ? <Chatbot /> : <FilePicker file={file} setFile={setFile} />}
      </div>
    </div>
  );
};

export default Page;
