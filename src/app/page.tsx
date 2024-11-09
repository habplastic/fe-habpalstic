import { Hero } from "@/layouts/hero";
import { Products } from "@/layouts/products";
import { Contact } from "@/layouts/contact";

export default function Home() {
  return (
    <main className="content-grid">
      <Hero />
      <Products />
      <Contact />
    </main>
  );
}
