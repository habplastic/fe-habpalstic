import { Product } from "@/components/product";

export const Products = () => (
  <section className="p-10">
    <h2 className="text-5xl font-extralight">Produtos</h2>

    <div className="grid grid-cols-3 gap-8 mt-10">
      <Product
        name="Cadeira thai"
        images={[{ color: "black", url: "/images/products/thai-preta.png" }]}
        size="585x900x465mm"
        weight="182kg"
      />

      <Product
        name="Cadeira viviane"
        images={[
          { color: "black", url: "/images/products/viviane-preta.jpeg" },
          { color: "white", url: "/images/products/viviane-branca.jpeg" },
        ]}
        size=" 520x780x450mm"
        weight="156kg"
      />

      <Product
        name="Cadeira santorini"
        images={[
          { color: "black", url: "/images/products/santorini-preta.jpeg" },
          { color: "white", url: "/images/products/santorini-branca.jpeg" },
        ]}
        size="550x760x450mm"
        weight="152kg"
      />

      <Product
        name="Cadeira bistro"
        images={[
          { color: "black", url: "/images/products/bistro-preta.jpeg" },
          { color: "white", url: "/images/products/bistro-branca.jpeg" },
        ]}
        size="440x880x440mm"
        weight="182kg"
      />

      <Product
        name="Banqueta"
        images={[
          { color: "black", url: "/images/products/banqueta-preta.jpeg" },
        ]}
        size="330x490x450mm"
        weight="90kg"
      />

      <Product
        name="Mesa"
        images={[{ color: "white", url: "/images/products/mesa-branca.jpeg" }]}
        size="700x710x700 mm"
        weight="350kg"
      />
    </div>
  </section>
);
