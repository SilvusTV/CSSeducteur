interface BlogListItemProps {
  imageName: string;
  title: string;
  metaDescription: string;
  uploadDate: string;
}

export default function BlogListItem(props: BlogListItemProps) {
  const uploadDate = new Date(props.uploadDate + "T00:00:00Z");
  return (
    <article className={"flex h-80 w-full rounded-3xl bg-white p-5"}>
      <img
        className={"mr-5 aspect-square h-full w-auto rounded-xl object-cover"}
        src={"/blog/Pictures/" + props.imageName + "/preview.webp"}
        alt={props.title}
      />
      <div className={"flex h-full flex-col justify-between"}>
        <div>
          <h2 className={"mb-5 text-2xl font-extrabold"}>{props.title}</h2>
          <desc className={"text-lg"}>{props.metaDescription}</desc>
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
