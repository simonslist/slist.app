import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-5 px-24">

<nav className="flex fixed items-center w-screen">

    <div className="flex-1 flex justify-center mr-auto">
    <p className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          instagram.com/slist.app
        </p>
    </div>

    <div className="mx-12"><Image
          className="relative"
          src="/logo-icon.svg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        /></div>

    <div className="flex-1 flex justify-center ml-auto">
    <p className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          merch
        </p>

    </div>
</nav>

    

      <div className="iframe-wrapper-1 pt-60">
  <div className="iframe-wrapper-2">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWzZDUvTjvVNJyBJopRyVrnFViPliWziG_zFz-YHNU-FooYw/viewform?embedded=true" width="640" height="493">Loading...</iframe>
  </div>
</div>

    </main>
  );
}
