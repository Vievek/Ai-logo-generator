import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function PricingModel() {
  return (
    <div className="">
      <HeadingDescription
        title={Lookup?.LogoPricingModelTitle}
        description={Lookup?.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            className="flex flex-col items-center p-5 border rounded-xl"
            key={index}
          >
            <Image
              src={pricing.icon}
              width={60}
              height={60}
              alt={pricing.title}
            />
            <h2 className="text-2xl font-medium ">{pricing.title}</h2>
            <div>
              {pricing.features.map((feature, index) => (
                <h2 className="text-lg mt-3 " key={index}>
                  {feature}
                </h2>
              ))}
            </div>
            <Button className="mt-5">{pricing.button}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;
