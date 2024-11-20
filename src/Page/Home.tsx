import Navbar from "../Components/Navbar.tsx";

export default function Home() {
  return (
    <div className={"flex flex-col items-center h-screen"}>
      <Navbar type={"blank"}/>
      <p className={"text-5xl mt-96 text-white font-bold"}>Les portes de CSSeduteurs seront bientôt ouvertes</p>
      <p className={"text-white text-2xl mt-12"}>Pas de panique, le framework css de votre vie vous attendra !</p>

    </div>
  )
}