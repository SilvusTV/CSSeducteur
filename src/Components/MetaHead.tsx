import { Helmet } from "react-helmet";

interface MetaHeadProps {
  title: string;
  url: string;
  metaDescription: string;
  metaKeywords: string;
  metaImage: string;
  blog?: boolean;
  notFollow?: boolean;
}

export default function MetaHead(props: MetaHeadProps) {
  return (
    <Helmet>
      <title>{props.blog ? `CSSéducteur | ${props.title}` : props.title}</title>
      <meta name="description" content={props.metaDescription} />
      <meta name="keywords" content={props.metaKeywords} />
      <meta property="og:title" content={"CSSéducteur | " + props.title} />
      <meta property="og:description" content={props.metaDescription} />
      <meta
        property="og:image"
        content={
          props.blog
            ? `/pictures/${props.metaImage}/preview.webp`
            : `/pictures/${props.metaImage}`
        }
      />
      <meta
        property="og:url"
        content={
          props.blog ? `https://csseducteur.love/blog/${props.url}` : props.url
        }
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={"CSSéducteur | " + props.title} />
      <meta name="twitter:description" content={props.metaDescription} />
      <meta
        name="twitter:image"
        content={
          props.blog
            ? `/pictures/${props.metaImage}/preview.webp`
            : `/pictures/${props.metaImage}`
        }
      />
      <link
        rel="canonical"
        href={
          props.blog ? `https://csseducteur.love/blog/${props.url}` : props.url
        }
      />
      {props.notFollow || <meta name="robots" content="index, follow" />}
    </Helmet>
  );
}
