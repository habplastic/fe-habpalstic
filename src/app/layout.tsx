import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
