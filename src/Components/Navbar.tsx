import clsx from "clsx";

type NavbarProps = {
  className?: string;
  type?: "primary" | "blank";
}
export default function Navbar(props: NavbarProps){
  return (
    <header className={clsx("flex justify-between w-screen",props.type === "blank" ? "bg-transparent" : "default_gradiant")}>
      <span className={"inline-flex items-center"}>
        <img className={"w-32"} src="/blank.png" alt="CSSeducteur logo"/>
        <h1 className={"text-4xl text-white font-extrabold"}>CSSeducteur</h1>
      </span>
      <nav className={clsx("flex justify-between items-center h-16 text-white text-xl mr-10",props.className)}>
        <ul>
          <li>Les Mémoires du CSSéducteur</li>
        </ul>
      </nav>
    </header>
  )
}