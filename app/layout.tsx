import Script from "next/script";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: "SLIST.APP",
    description: "Guest lists for ravers who share flyers.",
    url: "https://slist.app",
    siteName: "SLIST.APP",
    images: [
      {
        url: "https://www.slist.app/logo-icon-circle.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-gray-200 bg-black dark:border-gray-700">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                className="h-8"
                src="/logo-icon.svg"
                alt="SLIST Logo"
                width={45}
                height={37}
                priority
              />

              <span className="text-bold self-center whitespace-nowrap font-semibold dark:text-white">
                SLIST
              </span>
            </a>
            <a href="/merch" className="block  px-3 py-2 text-gray-300">
              Merch
            </a>

            <a href="/newsletter" className="block  px-3 py-2 text-gray-300">
              Newsletter
            </a>
            <a href="/about" className="block  px-3 py-2 text-gray-300">
              About
            </a>
          </div>
        </nav>
        {children}
      </body>

      <Script id="show-banner">
        {`
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '387538');
    `}
      </Script>

      <Script id="show-banner">
        {`
    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `}
      </Script>
    </html>
  );
}
