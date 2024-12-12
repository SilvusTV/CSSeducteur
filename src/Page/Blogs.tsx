import Navbar from "../Components/Navbar.tsx";
import BlogList from "../Components/BlogList.tsx";
import {getActiveBlogs} from "../Tools/Interaction.ts";

export default function Blogs() {
  const blogs = getActiveBlogs();
  return (
    <div className={"flex flex-col items-center h-screen"}>
      <Navbar type={"blank"}/>
      <h1 className={"text-5xl text-white font-bold"}>Les Mémoires du CSSéducteur</h1>
      <BlogList blogs={blogs}/>
    </div>
  )
}