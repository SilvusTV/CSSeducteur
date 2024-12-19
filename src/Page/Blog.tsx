import { useLocation, useNavigate } from "react-router-dom";
import { getBlog } from "../Tools/InteractionBlog.ts";
import "../blog.css";
import IncludeHTML from "../Components/IncludeHTML.tsx";
import MetaHead from "../Components/MetaHead.tsx";
import { useEffect, useState } from "react";

export default function Blog() {
  const location = useLocation();
  const navigate = useNavigate();
  const slug = location.pathname.split("/")[2];
  const blog = getBlog(slug);
  if (blog === undefined) {
    navigate("/blogs");
  }
  const uploadDate = new Date(blog!.uploadDate + "T00:00:00Z");
  const [referrer, setReferrer] = useState<string>("");

  useEffect(() => {
    setReferrer(document.referrer);
  }, [referrer]);
  return (
    <div
      id={"blog-page"}
      className={
        "relative m-auto my-5 flex min-h-full w-9/12 flex-col self-center rounded-3xl bg-white max-md:w-10/12 max-sm:w-11/12"
      }
    >
      <MetaHead
        title={blog!.title}
        url={blog!.slug}
        metaDescription={blog!.metaDescription}
        metaKeywords={blog!.metaKeywords}
        metaImage={blog!.imageName}
        blog={true}
      />
      <button
        onClick={() => {
          if (referrer.includes("/blog")) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
        className={"absolute z-10 m-8 rounded-3xl bg-white px-4 py-2 text-base"}
      >
        ← retour
      </button>
      <img
        className={"h-96 w-full rounded-t-3xl object-cover object-top"}
        src={"/blog/Pictures/" + blog!.imageName + "/banner.webp"}
        alt={blog!.title}
      />
      <article>
        <header>
          <h1 className={"-translate-y-12 text-center text-2xl font-extrabold"}>
            {blog!.title}
          </h1>
          <p>
            Publié le{" "}
            <time dateTime={blog!.uploadDate}>
              {uploadDate.toLocaleString().split(",")[0]}
            </time>{" "}
            par <a href="/about">CSSéducteur</a>
          </p>
        </header>
        <IncludeHTML className={"p-5 text-lg"} fileName={blog!.slug} />
        <footer>
          <p className={"mx-auto my-2 w-11/12 text-end"}>
            Article proposer par <a href="/">CSSeducteur</a>
          </p>
        </footer>
      </article>
    </div>
  );
}
