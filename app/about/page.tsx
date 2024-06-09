import Image from "next/image";
import Form from "../components/guest-list-form";

export default function NYC() {
  return (
    <main className="container-fluid mb-24 mt-10 flex flex-col justify-between bg-black px-4 lg:px-80">
      <article className="prose lg:prose-xl prose-headings:text-red text-white">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </main>
  );
}
