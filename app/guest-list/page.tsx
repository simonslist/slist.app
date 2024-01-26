import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-10 lg:px-24">
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
