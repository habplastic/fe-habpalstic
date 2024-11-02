"use client";
import { useState } from "react";

import Image from "next/image";

import { FaWeightHanging, FaRulerCombined } from "react-icons/fa";

import { TProduct } from "@/types";

export const Product = (props: TProduct) => {
  const [imageDisplay, setImageDisplay] = useState(
    props?.images?.[0]?.url || ""
  );

  return (
    <div>
      <div className="w-full h-full">
        <div className="block w-full h-[300px]">
          <Image
            className="w-full h-full object-cover border-l  border-t  border-r rounded-tl rounded-tr"
            src={imageDisplay}
            alt={props.name}
            width={300}
            height={100}
          />
        </div>

        <div className="block p-4 px-2 bg-white border rounded-bl rounded-br">
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
