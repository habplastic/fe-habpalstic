import { Hero } from "@/layouts/hero";
import { Products } from "@/layouts/products";
import { Contact } from "@/layouts/contact";
import { Info } from "@/layouts/info";

export default function Home() {
  return (
    <main className="content-grid">
      <Hero />
      <Info />
      <Products />
      <Contact />
    </main>
  );
}
