import { useParams } from "react-router-dom";

import Markdown from 'react-markdown'
import { useState } from "react";
import remarkGfm from 'remark-gfm'

import './post.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function BlogPost() {
  const [markdown, setMarkdown] = useState("Loading")

  const { year, month, day, name } = useParams();

  const path = `/posts/${year}-${month}-${day}-${name}.markdown`;

  fetch(path).then(response => response.text()).then(text => {
    if (text.startsWith("<!")) {
      setMarkdown("Error while loading file: " + path)
      return
    }
    setMarkdown(text.replace('--','—'))
  })

  return (
    <>
      <div className="post-container">
        <h1 className="title">{name?.replace('-', ' ')}</h1>
        <p className="post-date">{`${months[parseInt(month!) - 1]} ${day}, ${year}`}</p>
        <div className="post">
          <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </div>
      </div>
    </>
  )
}

export default BlogPost
