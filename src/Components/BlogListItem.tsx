interface BlogListItemProps {
  imageName: string;
  title: string;
  metaDescription: string;
  uploadDate: string;
}

export default function BlogListItem(props: BlogListItemProps) {
  const uploadDate = new Date(props.uploadDate + "T00:00:00Z");
  return (
    <article className={"flex bg-white rounded-3xl h-80 w-full p-5"}>
      <img width={512} height={512} className={"w-auto h-full mr-5 aspect-square object-cover rounded-xl"}
           src={"/blog/Pictures/" + props.imageName + "/preview.webp"} alt={props.title} loading={"lazy"} />
      <div className={"h-full flex justify-between flex-col"}>
        <div>
          <h2 className={"text-2xl font-extrabold mb-5"}>{props.title}</h2>
          <desc className={"text-lg"}>{props.metaDescription}</desc>

        </div>
        <p className={"text-end"}>Article publié le : <time
          dateTime={props.uploadDate}>{uploadDate.toLocaleString().split(",")[0]}</time></p>
      </div>
    </article>
  );

}