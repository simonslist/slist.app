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
            height="2151"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  );
}
