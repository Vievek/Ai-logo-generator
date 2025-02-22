import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colours from "@/app/_data/Colours";

function LogoColour({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.palette);
  return (
    <div>
      <HeadingDescription
        title={Lookup?.LogoColorPaletteTitle}
        description={Lookup?.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-5">
        {Colours.map((palette, index) => (
          <div
            key={index}
            className={`flex p-1 cursor-pointer ${
              selectedOption == palette?.name &&
              "border-2 rounded-lg border-primary"
            }`}
          >
            {palette?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setSelectedOption(palette?.name);
                  onHandleInputChange(palette?.name);
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColour;
