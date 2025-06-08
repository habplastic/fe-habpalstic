"use client";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Product } from "@/components/product";

import { products } from "@/data/products";
import { Separator } from "@/components/ui/separator";

export const Products = () => (
  <section className="content pb-10">
    <div className="my-0 mx-9">
      <Carousel
        className="pt-8"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselPrevious />
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.name} className="md:basis-1/3">
              <Product
                name={product.name}
                images={product?.images}
                size={product.size}
                weight={product.weight}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>

    <Separator className="w-3/12 my-10 mx-auto bg-primary" />

    <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
      <Image
        className="w-full"
        src={"/images/image-1.jpg"}
        alt={"imagem-1"}
        width={300}
        height={100}
      />

      <Image
        className="w-full"
        src={"/images/image-2.jpg"}
        alt={"imagem-1"}
        width={300}
        height={100}
      />

      <Image
        className="w-full"
        src={"/images/image-3.jpg"}
        alt={"imagem-1"}
        width={300}
        height={100}
      />
    </div>
  </section>
);
