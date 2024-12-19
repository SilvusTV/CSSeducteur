import { BlogType } from "../Types/BlogType.ts";
import BlogListItem from "./BlogListItem.tsx";

interface BlogListProps {
  blogs: BlogType[];
}

export default function BlogList(props: BlogListProps) {
  return (
    <div className={"flex w-screen flex-col items-center gap-5 p-5"}>
      {props.blogs.map((blog: BlogType) => {
        return (
          <a
            className={
              "flex w-9/12 justify-center max-lg:w-10/12 max-md:w-11/12"
            }
            href={"/blog/" + blog.slug}
          >
            <BlogListItem
              imageName={blog.imageName}
              title={blog.title}
              metaDescription={blog.metaDescription}
              uploadDate={blog.uploadDate}
            />
          </a>
        );
      })}
    </div>
  );
}
