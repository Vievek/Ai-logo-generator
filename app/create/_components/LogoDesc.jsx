import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup?.LogoDescTitle}
        description={Lookup?.LogoDescDesc}
      />
      <input
        type="text"
        placeholder={Lookup?.InputTitlePlaceholder}
        className="p-4 border rounded-lg w-full mt-5"
        onChange={(e) => onHandleInputChange(e.target.value)}
        value={formData?.desc}
      />
    </div>
  );
}

export default LogoDesc;
