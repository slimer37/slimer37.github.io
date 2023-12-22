import { Link } from "react-router-dom";

import './blog.css'
import { useState } from "react";
import Markdown from "react-markdown";

type PostProps = {
  route: string;
}

function Post({ route }: PostProps) {
  const [markdown, setMarkdown] = useState("Loading...")

  const [title, setTitle] = useState("Loading...")

  fetch('/posts/' + route.replace(/\//g, '-') + '.markdown').then(response => response.text()).then(text => {
    if (text.startsWith("<!")) {
      setTitle("Failed to load")
      setMarkdown("")
      return
    }
    text = text.replace(/--/g, '—')
    const eol = text.indexOf('\n')
    const title = text.substring(0, eol)
    setTitle(title)
    setMarkdown(text.substring(eol + 1, text.indexOf('.', eol + 1) + 1).trimStart())
  })

  const dateString = new Date(route.substring(0, route.lastIndexOf('/'))).toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Link to={'/post/' + route} className="post-link">
      <p className="date">{dateString}</p>
      <h2>{title}</h2>
      <Markdown className="summary">{markdown}</Markdown>
      <p className="source-route">{route}</p>
    </Link>
  )
}

function Blog() {
  document.title = "Blog"

  return (
    <>
      <div className="list">
        <h2 style={{ fontSize: '2em', margin: 0 }}>Frontlog</h2>
        <p>The opposite of a backlog. I don't make posts often (ironically).</p>
        <Post route="2023/1/17/enter-return" />
        <Post route="2022/1/17/what-is-the-deal" />
        <Post route="2021/2/27/the-supermarket-scramble-timeline" />
        <Post route="2021/2/27/on-the-log" />
        <Post route="2021/2/27/brain-food" />
      </div>
    </>
  )
}

export default Blog;