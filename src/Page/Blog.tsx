import {useLocation, useNavigate} from "react-router-dom";
import {getBlog} from "../Tools/Interaction.ts";
import '../blog.css'
import IncludeHTML from "../Components/IncludeHTML.tsx";
import { Helmet } from 'react-helmet';
export function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];
  const blog = getBlog(slug);
  if (blog === undefined) {
    navigate("/blogs");
  }
  return (
    <div id={"blog-page"}
         className={"bg-white rounded-3xl w-10/12 min-h-full self-center m-auto my-5 flex flex-col relative"}>
      <Helmet>
        <title>CSSéducteur | {blog!.title}</title>
        <meta name="description" content={blog!.metaDescription}/>
        <meta name="keywords" content={blog!.metaKeywords}/>
        <meta name="author" content={"CSSeducteur"}/>
        <link rel="canonical" href={"https://csseducteur.love/blog/" + blog!.slug}/>
      </Helmet>
      <a href="/blogs" className={"absolute z-10 m-8 text-xl"}>← retour</a>
      <img
        className={"w-full h-96 rounded-t-3xl object-cover object-top"}
        src={'/blog/Pictures/' + blog!.imageName} alt={blog!.title}/>
      <h1 className={"text-2xl font-extrabold self-center -translate-y-12"}>{blog!.title}</h1>
      <IncludeHTML className={"text-lg p-5"} fileName={blog!.slug}/>
    </div>
  );
}