"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { useSearchParams } from "next/navigation";

function LogoTitle({ onHandleInputChange }) {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title") ?? "");

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup?.LogoTitle}
        description={Lookup?.LogoTitleDesc}
      />

      <input
        type="text"
        placeholder={Lookup?.InputTitlePlaceholder}
        className="p-4 border rounded-lg w-full mt-5"
        defaultValue={title}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoTitle;
