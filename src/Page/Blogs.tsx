import Navbar from "../Components/Navbar.tsx";
import BlogList from "../Components/BlogList.tsx";
import { getActiveBlogs } from "../Tools/InteractionBlog.ts";
import MetaHead from "../Components/MetaHead.tsx";
import Footer from "../Components/Footer.tsx";

export default function Blogs() {
  const blogs = getActiveBlogs();
  return (
    <div className={"flex min-h-screen flex-col justify-between"}>
      <div className={"flex flex-col items-center"}>
        <MetaHead
          title={"CSSéducteur : Les Mémoires du CSSéducteur"}
          url={"https://csseducteur.love/blog"}
          metaDescription={
            "Explorez notre blog CSSéducteur : une immersion séduisante dans l'univers des frameworks CSS. Conseils, astuces et comparatifs pour sublimer vos projets web avec style et élégance."
          }
          metaKeywords={
            "CSS, blog CSS, frameworks CSS, développement web, design responsive, comparatif CSS, astuces CSS, conseils web, sublimer projets web, tendances CSS, outils front-end, veille technologique, CSSéducteur, création web élégante, styles CSS, francais"
          }
          metaImage={"og-home.webp"}
        />
        <Navbar type={"blank"} />
        <h1
          className={
            "text-center text-4xl font-bold text-white max-md:my-5 max-md:text-3xl max-sm:text-2xl"
          }
        >
          Les Mémoires du CSSéducteur
        </h1>
        <BlogList blogs={blogs} />
      </div>
      <Footer />
    </div>
  );
}
