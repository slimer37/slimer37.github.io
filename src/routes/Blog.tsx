import { Link } from "react-router-dom";

import './blog.css'
import Markdown from "react-markdown";
import LoadPost, { PostData } from "../PostLoad";
import { useEffect, useRef, useState } from "react";

type PostProps = {
  route: string;
}

function Post({ route }: PostProps) {

  const [postData, setPostData] = useState<PostData>()

  const set = useRef(false)

  useEffect(() => {

    if (set.current) return

    LoadPost(route.replace(/\//g, '-'), new Date(route.substring(0, route.lastIndexOf('/'))), () => { }).then(
      (data) => {
        let preview: string = data.markdown.substring(0, data.markdown.indexOf('.') + 1).trimStart()
        data.markdown = preview

        setPostData(data)

        set.current = true
      })

  })

  if (postData) {
    return (
      <Link to={'/post/' + route} className="post-link">
        <p className="date">{postData.dateString}</p>
        <h2>{postData.title}</h2>
        <Markdown className="summary">{postData.markdown}</Markdown>
        <p className="source-route">{route}</p>
      </Link>
    )
  } else {
    return (
      <div className="post-link">
        <p className="source-route">{route}</p>
      </div>
    )
  }

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