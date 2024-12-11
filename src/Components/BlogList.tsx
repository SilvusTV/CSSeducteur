import {BlogType} from "../Types/BlogType.ts";
import BlogListItem from "./BlogListItem.tsx";

interface BlogListProps {
  blogs: BlogType[];
}

export default function BlogList(props: BlogListProps) {
  return (
    <div className={"flex flex-col w-screen p-5 gap-5 items-center"}>
      {props.blogs.map((blog: BlogType) => {
        return (
          <a className={"w-full justify-center flex"} href={"/blog/"+blog.slug}>
            <BlogListItem imageName={blog.imageName} title={blog.title} metaDescription={blog.metaDescription}/>
          </a>
        )
      })}
    </div>
  )

}