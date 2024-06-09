import Image from "next/image";
import Form from "../components/guest-list-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLIST NYC PRIVATE CHAT",
  description: "Our private chat for verified supporters.",
};

export default function NYC() {
  return (
    <main className="container-fluid mb-24 mt-10 flex flex-col justify-between bg-black px-4 lg:px-80">
      <div className="iframe-wrapper-1  ">
        <div className="iframe-wrapper-2">
          <Form formlink="https://tally.so/embed/w4kxMB?alignLeft=1&transparentBackground=1&dynamicHeight=1" />
        </div>
      </div>
    </main>
  );
}
