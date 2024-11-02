export type TProduct = {
  name: string;
  images: {
    color: "black" | "white";
    url: string;
  }[];
  size: string;
  weight: string;
};
