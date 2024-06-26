import Image from "next/image";
import Form from "../components/guest-list-form";

export default function CDMX() {
  return (
    <main className="container-fluid mb-24 mt-10 flex flex-col justify-between bg-black px-4 lg:px-80">
      <div className="iframe-wrapper-1  ">
        <div className="iframe-wrapper-2">
          <Form formlink="https://tally.so/embed/3qBEyk?alignLeft=1&transparentBackground=1&dynamicHeight=1" />
        </div>
      </div>
    </main>
  );
}
