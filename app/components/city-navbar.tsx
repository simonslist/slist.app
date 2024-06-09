"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function CityNavbar() {
  const pathname = usePathname();

  return (
    <nav className="border-gray-200 bg-black pb-10 dark:border-gray-700">
      <div className="mx-auto flex max-w-prose flex-wrap items-center justify-around pt-5 text-2xl text-white">
        <Link
          href="/cdmx"
          className={`link  block px-3 py-2 ${pathname === "/cdmx" ? "active" : ""}`}
        >
          CDMX
        </Link>

        <Link
          href="/nyc"
          className={`link  block px-3 py-2 ${pathname === "/nyc" ? "active" : ""}`}
        >
          NYC
        </Link>
      </div>
    </nav>
  );
}
