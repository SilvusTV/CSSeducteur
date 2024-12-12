import {Helmet} from "react-helmet";

interface MetaHeadProps {
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
}
export default function MetaHead(props: MetaHeadProps) {
  return(
    <Helmet>
      <title>CSSéducteur | {props.title}</title>
      <meta name="description" content={props.metaDescription}/>
      <meta name="keywords" content={props.metaKeywords}/>
      <meta property="og:title" content={"CSSéducteur | "+props.title}/>
      <meta property="og:description" content={props.metaDescription}/>
      <meta property="og:image" content={"/pictures/"+props.metaImage+"/preview.webp"}/>
      <meta property="og:url" content={"https://csseducteur.love/blog/"+props.slug}/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={"CSSéducteur | "+props.title}/>
      <meta name="twitter:description" content={props.metaDescription}/>
      <meta name="twitter:image" content={"/pictures/"+props.metaImage+"/preview.webp"}/>
      <link rel="canonical" href={"https://csseducteur.love/blog/" + props.slug}/>
    </Helmet>
  )
}