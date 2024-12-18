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
      )}
    >
      <a href="/" className={"inline-flex items-center"}>
        <img
          className={"mx-4 my-3 w-20"}
          src="/pictures/css-blank.svg"
          alt="CSSeducteur logo"
        />
        <h1 className={"text-4xl font-extrabold text-white"}>CSSeducteur</h1>
      </a>
      <nav
        className={clsx(
          "mr-10 flex h-16 items-center justify-between text-xl text-white",
          props.className,
        )}
      >
        <ul className={"flex flex-row gap-3"}>
          <li>
            <a href={"/contact"}>Un Breakpoint dans votre Journée ?</a>
          </li>
          <li>|</li>
          <li>
            <a href={"/about"}>Le Charme Révélé</a>
          </li>
          <li>|</li>
          <li>
            <a href={"/blog"}>Les Mémoires du CSSéducteur</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
