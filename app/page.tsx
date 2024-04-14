"use client";
import Image from "next/image";
// pages/contact.jsx
import Script from "next/script";
import { useState, useEffect } from "react";
import { Metadata } from "next"; // if using TypeScript

export const metadata: Metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://tally.so/widgets/embed.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <main className="container-fluid mb-24 mt-10 flex flex-col justify-between px-4 lg:px-80">
      <iframe
        data-tally-src="https://tally.so/embed/wQV9dG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="100"
        title="NO-COVER LISTS"
      ></iframe>
    </main>
  );
}
