import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { color } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om-Hagargi",
  description: "Protfolio site of Om Hagargi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:"black"}}>
      <div className=" bg-black bg-grid-white/[0.1] "> {/* 0.1 point for light lines bg-black  bg-grid-white--lines white*/}
        {children}
        </div>
      </body>
    </html>
  );
}
