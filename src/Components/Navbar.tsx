import clsx from "clsx";

type NavbarProps = {
  className?: string;
  type?: "primary" | "blank";
}
export default function Navbar(props: NavbarProps) {
  return (
    <header
      className={clsx("flex justify-between w-screen", props.type === "blank" ? "bg-transparent" : "default_gradiant")}>
      <a href="/" className={"inline-flex items-center"}>
        <img className={"w-20 my-3 mx-4"} src="/pictures/css-blank.svg" alt="CSSeducteur logo"/>
        <h1 className={"text-4xl text-white font-extrabold"}>CSSeducteur</h1>
      </a>
      <nav className={clsx("flex justify-between items-center h-16 text-white text-xl mr-10", props.className)}>
        <ul>
          <li><a href={"/blog"}>Les Mémoires du CSSéducteur</a></li>
        </ul>
      </nav>
    </header>
  )
}