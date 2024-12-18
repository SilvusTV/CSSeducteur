import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
interface IncludeHTMLProps {
  className?: string;
  fileName: string;
}

const IncludeHTML: React.FC<IncludeHTMLProps> = ({className, fileName }) => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchHTML = async () => {
      try {
        const response = await fetch('/blog/Contents/'+fileName+'.html');
        if (response.ok) {
          const text = await response.text();
          setContent(text);
        } else {
          setContent("Page not found.");
        }
      } catch (error) {
        setContent("Error loading content.");
      }
    };
    Prism.highlightAll();
    fetchHTML();
  }, [fileName, content]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: content || "" }} />;
};

export default IncludeHTML;