"use client";
import { useState, useEffect } from "react";

export default function Form() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://tally.so/widgets/embed.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/wQV9dG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="100"
      title="NO-COVER LISTS"
    ></iframe>
  );
}
