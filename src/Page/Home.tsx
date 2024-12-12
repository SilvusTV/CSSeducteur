import Navbar from "../Components/Navbar.tsx";
import MetaHead from "../Components/MetaHead.tsx";

export default function Home() {
  return (
    <div className={"flex flex-col items-center h-screen"}>
      <MetaHead
        title={"CSSéducteur : trouvez le framework CSS fait pour vous"}
        url={"https://csseducteur.love"}
        metaDescription={"Laissez CSSéducteur vous charmer : trouvez le framework CSS fait pour vous, celui qui saura sublimer vos projets et vous garder à la pointe des tendances envoûtantes du développement web."}
        metaKeywords={"CSS, framework CSS, CSSéducteur, choisir framework CSS, développement web, design responsive, tendances CSS, séduction web, projets web élégants, veille technologique CSS, outils front-end, sublimer projets web, charme du développement"}
        metaImage={"og-home.webp"}
      />
      <Navbar type={"blank"}/>
      <p className={"text-5xl mt-96 text-white font-bold"}>Les portes de CSSeduteurs seront bientôt ouvertes</p>
      <p className={"text-white text-2xl mt-12"}>Pas de panique, le framework css de votre vie vous attend !</p>

    </div>
  )
}