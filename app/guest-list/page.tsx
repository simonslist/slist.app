import Image from "next/image";
import Form from "../components/guest-list-form";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-10 lg:px-24">
      <div className="iframe-wrapper-1  ">
        <div className="iframe-wrapper-2">
          <Form />
        </div>
      </div>
    </main>
  );
}
