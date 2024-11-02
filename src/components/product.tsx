"use client";
import { useState } from "react";

import { FaWeightHanging, FaRulerCombined } from "react-icons/fa";

import Image from "next/image";

type TProduct = {
  name: string;
  images: {
    color: "black" | "white";
    url: string;
  }[];
  size: string;
  weight: string;
};

export const Product = (props: TProduct) => {
  const [imageDisplay, setImageDisplay] = useState(
    props?.images?.[0]?.url || ""
  );

  return (
    <div className="group">
      <Image
        className="group-hover:hidden w-full h-full object-cover"
        src={props.images[0].url}
        alt={props.name}
        width={300}
        height={400}
      />

      <div className="invisible group-hover:visible  group-hover:w-full group-hover:h-full group-hover:shadow-xl ">
        <div className="hidden group-hover:block w-full h-[400px]">
          <Image
            className="w-full h-full object-cover"
            src={imageDisplay}
            alt={props.name}
            width={300}
            height={100}
          />
        </div>

        <div className="hidden group-hover:block pt-4 px-2">
          <div className="flex items-center justify-between">
            <p className="font-bold">{props.name}</p>

            <div className="flex items-center gap-2">
              {props.images.length > 1 ? (
                <>
                  {props.images.map(({ color, url }) => {
                    return (
                      <div
                        key={color}
                        className={`${
                          url === imageDisplay
                            ? "border border-black border-opacity-20 rounded-full p-1"
                            : ""
                        }`}
                      >
                        <div
                          className={`${
                            color === "black" ? "bg-black" : "bg-white"
                          } border rounded-full size-6  cursor-pointer`}
                          onClick={() => setImageDisplay(url)}
                        />
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="border border-black border-opacity-20 rounded-full p-1">
                  <div className="bg-black border rounded-full size-6  cursor-pointer" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-2">
              <FaRulerCombined className="text-secondary" />

              <p className="font-light">{props.size}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWeightHanging className="text-secondary" />
              <p className="font-light">{props.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
