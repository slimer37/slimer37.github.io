import { useNavigate, useParams } from "react-router-dom";

import Markdown from 'react-markdown'
import { useState } from "react";
import remarkGfm from 'remark-gfm'

import Header from "../components/Header";
import Footer from "../components/Footer";

import './post.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function BlogPost() {
  const [markdown, setMarkdown] = useState("Loading")

  const { year, month, day, name } = useParams();

  const [title, setTitle] = useState("")

  const path = `/posts/${year}-${month}-${day}-${name}.markdown`;
  const navigate = useNavigate();

  fetch(path).then(response => response.text()).then(text => {
    if (text.startsWith("<!")) {
      // navigate somewhere that doesn't exist
      navigate("/invalid-post")
      return
    }
    text = text.replace('--', '—')
    const eol = text.indexOf('\n')
    const title = text.substring(0, eol)
    setTitle(title)
    document.title = title
    setMarkdown(text.substring(eol + 1).trimStart())
  })

  return (
    <>
      <Header shrinks={false} />
      <div className="content">
        <div className="center">
          <div className="post-container">
            <h1 className="title">{title?.replace('-', ' ')}</h1>
            <p className="post-date">{`${months[parseInt(month!) - 1]} ${day}, ${year}`}</p>
            <div className="post">
              <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
          </div>
          <br />
          <a id="source-link" href={path}>Generated from Markdown</a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPost
