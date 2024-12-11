interface BlogListItemProps {
  imageName: string;
  title: string;
  metaDescription: string;
}

export default function BlogListItem(props: BlogListItemProps) {
  return (
    <article className={"flex bg-white rounded-3xl h-80 w-9/12 p-5"}>
      <img className={"w-auto h-full mr-5 aspect-square object-cover rounded-xl"} src={'/blog/Pictures/' + props.imageName} alt={props.title}/>
      <div className={"h-full"}>
        <h2 className={"text-2xl font-extrabold mb-5"}>{props.title}</h2>
        <p className={"text-lg"}>{props.metaDescription}</p>
      </div>
    </article>
  )

}