import { useNavigate } from "react-router-dom";

import { useState } from "react";

type PostData = {
  success: boolean,
  title: string,
  markdown: string,
  dateString: string,
  sourceHref: string
}

function LoadPost(markdownFile: string, dateSource: Date, setTitle: boolean = false): PostData {
  const [data, setData] = useState({ success: false, title: "", markdown: "", dateString: "", sourceHref: "" })

  const path = `/posts/${markdownFile}.markdown`;

  const dateString = dateSource.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  
  const navigate = useNavigate();

  fetch(path).then(response => response.text()).then(text => {
    if (text.startsWith("<!")) {
      // navigate somewhere that doesn't exist
      navigate(`/invalid/${markdownFile}`)
      data.success = false
      return data
    }
    text = text.replace(/--/g, '—')
    const eol = text.indexOf('\n')
    const title = text.substring(0, eol)

    if (setTitle) {
      document.title = title
    }

    const markdown = text.substring(eol + 1).trimStart()

    setData({ success: true, title: title, markdown: markdown, dateString: dateString, sourceHref: path })
  })

  return data
}

export default LoadPost
