import { Hero } from "@/layouts/hero";
import { Products } from "@/layouts/products";

export default function Home() {
  return (
    <main className="content-grid">
      <Hero />
      <Products />
    </main>
  );
}
