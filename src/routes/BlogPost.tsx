import { useNavigate, useParams } from "react-router-dom";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Header from "../components/Header";
import Footer from "../components/Footer";

import LoadPost, { PostData } from "../PostLoad";

import './post.css'
import { useEffect, useRef, useState } from "react";

function BlogPost() {
  const { year, month, day, name } = useParams();

  const path = `${year}-${month}-${day}-${name}`;

  const [data, setData] = useState<PostData>()

  const navigate = useNavigate();

  function fail() {
    // navigate somewhere that doesn't exist
    navigate(`/invalid/${path}`)
  }

  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return

    LoadPost(path, new Date(`${year}/${month}/${day}`), fail, true).then(
      (data) => {
        setData(data)

        initialized.current = true
      }
    )

  })

  return (
    <>
      <Header shrinks={false} />
      <div className="content">
        <div className="center">
          {data ? (
            <>
              <div className="post-container">
                <h1 className="title">{data.title}</h1>
                <p className="post-date">{data.dateString}</p>
                <div className="post">
                  <Markdown remarkPlugins={[remarkGfm]}>{data.markdown}</Markdown>
                </div>
              </div>
              <br />
              <a id="source-link" href={data.sourceHref}>Generated from Markdown</a>
            </>
          ) : (
            <>
              <div className="post-container">
                <p className="post">
                  Loading
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPost
