"use client";
import Image from "next/image";
// pages/contact.jsx
import Script from "next/script";
import { useState, useEffect } from "react";

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
        data-tally-src="https://tally.so/embed/waBD7E?alignLeft=1&hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="100"
        title="NO-COVER LISTS"
      ></iframe>
    </main>
  );
}
