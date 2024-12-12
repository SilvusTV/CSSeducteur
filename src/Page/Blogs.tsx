import Navbar from "../Components/Navbar.tsx";
import BlogList from "../Components/BlogList.tsx";
import {getActiveBlogs} from "../Tools/Interaction.ts";
import MetaHead from "../Components/MetaHead.tsx";

export default function Blogs() {
  const blogs = getActiveBlogs();
  return (
    <div className={"flex flex-col items-center h-screen"}>
      <MetaHead
        title={"CSSéducteur : Les Mémoires du CSSéducteur"}
        url={"https://csseducteur.love/blog"}
        metaDescription={"Explorez notre blog CSSéducteur : une immersion séduisante dans l'univers des frameworks CSS. Conseils, astuces et comparatifs pour sublimer vos projets web avec style et élégance."}
        metaKeywords={"CSS, blog CSS, frameworks CSS, développement web, design responsive, comparatif CSS, astuces CSS, conseils web, sublimer projets web, tendances CSS, outils front-end, veille technologique, CSSéducteur, création web élégante, styles CSS"}
        metaImage={"og-home.webp"}
      />
      <Navbar type={"blank"}/>
      <h1 className={"text-5xl text-white font-bold"}>Les Mémoires du CSSéducteur</h1>
      <BlogList blogs={blogs}/>
    </div>
  )
}