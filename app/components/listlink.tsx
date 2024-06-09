import Link from "next/link";
// import * as React from "react"

const ListLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <div className="not-prose group relative">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-neutral-400 to-neutral-700 text-xs opacity-75 blur dark:from-neutral-700 dark:to-neutral-300 "></div>
      <Link
        href={href}
        className="dark:group-hover:text-primary relative mx-0 flex content-between gap-0  rounded-lg bg-neutral-100 py-4 pl-5 text-2xl leading-none text-black group-hover:text-blue-900 dark:bg-neutral-900 dark:text-white"
      >
        {label}
      </Link>
    </div>
  );
};

ListLink.defaultProps = {
  d: null,
};
export default ListLink;
