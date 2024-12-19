import clsx from "clsx";

interface BlogListItemProps {
  imageName: string;
  title: string;
  metaDescription: string;
  uploadDate: string;
}

export default function BlogListItem(props: BlogListItemProps) {
  const uploadDate = new Date(props.uploadDate + "T00:00:00Z");
  const screenSize = window.innerWidth;
  const blogPic = screenSize < 768 ? "/banner.webp" : "/preview.webp";
  return (
    <article
      className={clsx(
        "max-lg: flex h-80 w-full rounded-3xl bg-white p-5 py-8 " +
          "max-lg:h-64 max-md:h-fit max-md:flex-col max-md:p-4",
      )}
    >
      <img
        width={512}
        height={512}
        className={
          "mr-5 aspect-square h-full w-auto rounded-xl object-cover max-md:mr-0 max-md:aspect-auto max-md:h-auto max-md:rounded-3xl"
        }
        src={"/blog/Pictures/" + props.imageName + blogPic}
        alt={props.title}
        loading={"lazy"}
      />
      <div className={"flex h-full flex-col justify-between"}>
        <div>
          <h2 className={"mb-5 text-2xl font-extrabold max-lg:text-xl"}>
            {props.title}
          </h2>
          <desc className={"text-lg max-lg:text-base"}>
            {props.metaDescription}
          </desc>
        </div>
        <p className={"text-end"}>
          Article publié le :{" "}
          <time dateTime={props.uploadDate}>
            {uploadDate.toLocaleString().split(",")[0]}
          </time>
        </p>
      </div>
    </article>
  );
}
