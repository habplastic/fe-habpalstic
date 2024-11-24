import type { Metadata } from "next";

import { Navbar } from "@/layouts/navbar";
import { Footer } from "@/layouts/footer";

import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Habplastic",
  description: "Transporte descomplicado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased">
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
