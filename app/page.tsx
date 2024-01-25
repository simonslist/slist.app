import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 lg:px-24">

<nav className="flex items-center w-screen">

    <div className="flex-1 flex justify-center mr-auto">
<a href="#">@slist.app
</a>          
       
    </div>

    <div className="mx-12"><Image
          className="relative"
          src="/logo-icon.svg"
          alt="Next.js Logo"
          width={45}
          height={37}
          priority
        /></div>

    <div className="flex-1 flex justify-center ml-auto">
   <a href="#">merch</a>

    </div>
</nav>

    

      <div className="iframe-wrapper-1 pt-36">
  <div className="iframe-wrapper-2">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWzZDUvTjvVNJyBJopRyVrnFViPliWziG_zFz-YHNU-FooYw/viewform?embedded=true" width="640" height="2100">Loading…</iframe>
  </div>
</div>

<div className="py-16">
<iframe
      title="SLIST_CDMX checkout widget"
      src="https://nas.io/checkout-widget?communityCode=SLIST_CDMX&communitySlug=%2Fslist&buttonText=Join%20for%20early%20access%20to%20lists&buttonTextColorHex=%23fff&buttonBgColorHex=%23ff0000&widgetTheme=dark&backgroundColorHex=%23000"
      width="100%"
      height="320"
    ></iframe>
</div>

    </main>
  );
}
