import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FontPicker } from "@/components/dev/FontPicker";
import { fontVariables } from "@/lib/fonts";
import { SHOW_FONT_PICKER } from "@/constants";

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
    <html lang="sk" className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <CartDrawer />
          {SHOW_FONT_PICKER && <FontPicker />}
        </CartProvider>
        <Script src={`https://zvoncek.thegrandpoints.com/p.js`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
