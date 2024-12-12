import {useLocation, useNavigate} from "react-router-dom";
import {getBlog} from "../Tools/Interaction.ts";
import '../blog.css'
import IncludeHTML from "../Components/IncludeHTML.tsx";
import MetaHead from "../Components/MetaHead.tsx";

export function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];
  const blog = getBlog(slug);
  if (blog === undefined) {
    navigate("/blogs");

  }
  const uploadDate = new Date(blog!.uploadDate + 'T00:00:00Z');
  return (
    <div id={"blog-page"}
         className={"bg-white rounded-3xl w-10/12 min-h-full self-center m-auto my-5 flex flex-col relative"}>
      <MetaHead
        title={blog!.title}
        slug={blog!.slug}
        metaDescription={blog!.metaDescription}
        metaKeywords={blog!.metaKeywords}
        metaImage={blog!.imageName}
      />
      <a href="/blogs" className={"absolute z-10 m-8 text-xl"}>← retour</a>
      <img
        className={"w-full h-96 rounded-t-3xl object-cover object-top"}
        src={'/blog/Pictures/' + blog!.imageName + '/banner.webp'} alt={blog!.title}
      />
      <article>
        <header>
          <p>Publié le <time dateTime={blog!.uploadDate}>{uploadDate.toLocaleString().split(',')[0]}</time> par <a
            href="/about">CSSéducteur</a></p>
        </header>
        <h1 className={"text-2xl font-extrabold text-center -translate-y-12"}>{blog!.title}</h1>
        <IncludeHTML className={"text-lg p-5"} fileName={blog!.slug}/>
        <footer>
          <p className={"w-11/12 mx-auto text-end my-2"}>Article proposer par <a href="/">CSSeducteur</a></p>
        </footer>
      </article>
    </div>
  );
}