"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function MainNavbar() {
  const pathname = usePathname();

  return (
    <nav className=" border-gray-200 bg-black dark:border-gray-700">
      <div className="border-red mx-auto flex max-w-prose flex-wrap items-center justify-around border-b-2 py-5 text-2xl text-white">
        <Link
          href="/"
          className="text-red flex items-center rtl:space-x-reverse"
        >
          <Image
            className="h-12"
            src="/logo-icon.svg"
            alt="SLIST Logo"
            width={90}
            height={90}
            priority
          />
          <span
            className={`link  block px-3 py-2 ${pathname === "/about" ? "active" : ""}`}
          >
            SLIST
          </span>
        </Link>

        <Link href="https://shop.slist.net" className="block  px-3 py-2">
          Merch
        </Link>

        <Link
          href="https://soundcloud.com/slistmusic"
          className={`link  block px-3 py-2 ${pathname === "/podcast" ? "active" : ""}`}
        >
          Podcast
        </Link>

        <Link
          href="/about"
          className={`link  block px-3 py-2 ${pathname === "/about" ? "active" : ""}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
