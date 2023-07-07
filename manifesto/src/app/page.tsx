"use client";
import Image from "next/image";
import ManifestoBanner from "../../public/Vector.svg";
import { useState } from "react";
import { Montserrat, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-montserrat",
});

export default function Home() {
  return (
    <html lang="en" className="sm:scroll-smooth">
      <body className="min-h-screen bg-HOMEPAGE_BGCOLOR">
        <div className="">
          <Image
            className="w-full mt-9"
            src={ManifestoBanner}
            alt="ManifestoBanner"
          />
        </div>
        <div className="mt-36">
          <h1 className="text-white text-center text-2xl">
            <a className={montserrat.className}>
              No one is currently signed in.
            </a>
          </h1>
          <h1 className="text-white text-center text-2xl">
            <a className={montserrat.className}>Be the first to sign in.</a>
          </h1>
        </div>
        <div className="flex justify-center mt-44">
          <button className="bg-MANIFESTO_COLOR w-44 h-12">
            <h1 className="text-NAVBAR_COLOR">
              <a className={inter.className}>Sign In</a>
            </h1>
          </button>
        </div>
      </body>
    </html>
  );
}
