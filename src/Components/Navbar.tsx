import clsx from "clsx";

type NavbarProps = {
  className?: string;
  type?: "primary" | "blank";
};
export default function Navbar(props: NavbarProps) {
  return (
    <header
      className={clsx(
        "flex w-screen justify-between",
        props.type === "blank" ? "bg-transparent" : "default_gradiant",
        props.type === "blank" && "items-center",
      )}
    >
      <a href="/" className={"inline-flex items-center"}>
        <img
          className={"mx-4 my-3 w-20"}
          src="/pictures/css-blank.svg"
          alt="CSSeducteur logo"
        />
        <p className={"text-4xl font-extrabold text-white max-lg:hidden"}>
          CSSeducteur
        </p>
      </a>
      <nav
        className={clsx(
          "mr-10 flex h-16 items-center justify-between text-xl text-white",
          props.className,
        )}
      >
        <ul
          className={
            "flex flex-row gap-3 max-md:flex-col max-md:gap-0 max-sm:text-base"
          }
        >
          <li>
            <a href={"/contact"} className={"hover:underline"}>
              Un Breakpoint dans votre Journée ?
            </a>
          </li>
          <li className={"max-md:hidden"}>|</li>
          <li>
            <a href={"/about"} className={"hover:underline"}>
              Le Charme Révélé
            </a>
          </li>
          <li className={"max-md:hidden"}>|</li>
          <li>
            <a href={"/blog"} className={"hover:underline"}>
              Les Mémoires du CSSéducteur
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
