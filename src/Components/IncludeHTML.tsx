import React, { useEffect, useState } from "react";

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

    fetchHTML();
  }, [fileName]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: content || "" }} />;
};

export default IncludeHTML;