import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "EMIS — generátory koloidného striebra | Nižná",
  description:
    "Generátory koloidného striebra GKS s elektronickou reguláciou prúdu a elektródami z 99,99 % striebra. Vývoj a výroba elektroniky v Nižnej od roku 1990.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${archivo.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
