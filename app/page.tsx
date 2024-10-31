"use client";

import Chatbot from "@/components/Chatbot";
import FilePicker from "@/components/FilePicker";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // This effect helps display the image once it is uploaded

  // useEffect(() => {
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setImageUrl(url);

  //     return () => URL.revokeObjectURL(url);
  //   }
  // }, [file]);

  return (
    <div className="px-12 pt-8 h-screen flex flex-col">
      <div className="flex flex-row justify-between">
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
        {/* {imageUrl && (
          <div className="mt-4 rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt="Uploaded preview"
              width={360}
              height={360}
              className="object-contain"
            />
          </div>
        )} */}
      </div>

      <div className="flex flex-col flex-auto overflow-hidden">
        {file ? (
          // Update the Chatbot to take the image as a prop
          <Chatbot />
        ) : (
          // Update the FilePicker to keep track of the file
          <FilePicker className="mt-12" />
        )}
      </div>
    </div>
  );
};

export default Page;
