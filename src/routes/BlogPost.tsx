import { useParams } from "react-router-dom";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Header from "../components/Header";
import Footer from "../components/Footer";

import LoadPost from "../PostLoad";

import './post.css'

function BlogPost() {
  const { year, month, day, name } = useParams();
  
  const path = `${year}-${month}-${day}-${name}`;

  const data = LoadPost(path, new Date(`${year}/${month}/${day}`), true)

  return (
    <>
      <Header shrinks={false} />
      <div className="content">
        <div className="center">
          <div className="post-container">
            <h1 className="title">{data.title}</h1>
            <p className="post-date">{data.dateString}</p>
            <div className="post">
              <Markdown remarkPlugins={[remarkGfm]}>{data.markdown}</Markdown>
            </div>
          </div>
          <br />
          <a id="source-link" href={data.sourceHref}>Generated from Markdown</a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogPost
