import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-10 lg:px-24">
      <nav className="border-gray-200 bg-black dark:border-gray-700">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="#"
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
          <a href="#" className="block  px-3 py-2 text-gray-300">
            Merch
          </a>

          <a href="#" className="block  px-3 py-2 text-gray-300">
            Newsletter
          </a>
          <a href="#" className="block  px-3 py-2 text-gray-300">
            About
          </a>
        </div>
      </nav>

      <div className="iframe-wrapper-1  ">
        <div className="iframe-wrapper-2">
          <iframe
            scrolling="no"
            className="w-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfWzZDUvTjvVNJyBJopRyVrnFViPliWziG_zFz-YHNU-FooYw/viewform?embedded=true"
            width="100%"
            height="1900"
          >
            Loading…
          </iframe>
        </div>
      </div>

      <section className="flex h-screen flex-col items-center justify-center">
        <iframe
          scrolling="no"
          className=""
          title="SLIST_CDMX checkout widget"
          src="https://nas.io/checkout-widget?communityCode=SLIST_CDMX&communitySlug=%2Fslist&buttonText=get%20early%20access%20to%20guest%20lists&buttonTextColorHex=%23fff&buttonBgColorHex=%23ff0000&widgetTheme=dark&backgroundColorHex=%23000"
          width="100%"
          height="300"
        ></iframe>
        <p className="text-center text-red-600">
          CDMX ravers only. <br></br>NYC chat coming very soon.
        </p>
      </section>
    </main>
  );
}