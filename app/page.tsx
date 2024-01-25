import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-10 pb-36 lg:px-24">



<nav className="border-gray-200 bg-black dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Image
          className="h-8"
          src="/logo-icon.svg"
          alt="SLIST Logo"
          width={45}
          height={37}
          priority
        />
        
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SLIST.APP</span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-[#ff0000] dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Newsletter</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Merch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



    

      <div className="iframe-wrapper-11 my-32">
  <div className="iframe-wrapper-21">
  <iframe scrolling="no" className="w-full aspect-video" src="https://docs.google.com/forms/d/e/1FAIpQLSfWzZDUvTjvVNJyBJopRyVrnFViPliWziG_zFz-YHNU-FooYw/viewform?embedded=true" width="100%" height="3500">Loading…</iframe>
  </div>
</div>

<iframe
scrolling="no"
className="py-20"
      title="SLIST_CDMX checkout widget"
      src="https://nas.io/checkout-widget?communityCode=SLIST_CDMX&communitySlug=%2Fslist&buttonText=Join%20for%20early%20access%20to%20lists&buttonTextColorHex=%23fff&buttonBgColorHex=%23ff0000&widgetTheme=dark&backgroundColorHex=%23000"
      width="100%"
      height="320"
    ></iframe>

    </main>
  );
}
