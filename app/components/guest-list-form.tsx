"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Form({ formlink }: { formlink: string }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://tally.so/widgets/embed.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <iframe
      data-tally-src={formlink}
      loading="lazy"
      width="100%"
      height="3500"
      title="NO-COVER LISTS"
    ></iframe>
  );
}
