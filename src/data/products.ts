import { TProduct } from "@/types";

export const products: TProduct[] = [
  {
    name: "Cadeira thai",
    images: [{ color: "black", url: "/images/products/thai-preta.png" }],
    size: "585x900x465mm",
    weight: "182kg",
  },
  {
    name: "Cadeira viviane",
    images: [
      { color: "black", url: "/images/products/viviane-preta.jpeg" },
      { color: "white", url: "/images/products/viviane-branca.jpeg" },
    ],
    size: " 520x780x450mm",
    weight: "156kg",
  },
  {
    name: "Cadeira santorini",
    images: [
      { color: "black", url: "/images/products/santorini-preta.jpeg" },
      { color: "white", url: "/images/products/santorini-branca.jpeg" },
    ],
    size: "550x760x450mm",
    weight: "152kg",
  },
  {
    name: "Cadeira bistro",
    images: [
      { color: "black", url: "/images/products/bistro-preta.jpeg" },
      { color: "white", url: "/images/products/bistro-branca.jpeg" },
    ],
    size: "440x880x440mm",
    weight: "182kg",
  },
  {
    name: "Banqueta",
    images: [{ color: "black", url: "/images/products/banqueta-preta.jpeg" }],
    size: "330x490x450mm",
    weight: "90kg",
  },
  {
    name: "Mesa",
    images: [{ color: "white", url: "/images/products/mesa-branca.jpeg" }],
    size: "700x710x700 mm",
    weight: "350kg",
  },
];
