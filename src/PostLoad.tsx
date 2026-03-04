export type PostData = {
  title: string,
  markdown: string,
  dateString: string,
  sourceHref: string
}

export type PostRetrievedCallback = (postData: PostData) => void;

async function LoadPost(markdownFile: string, dateSource: Date, fail: () => void, setTitle: boolean = false): Promise<PostData> {
  const path = `/posts/${markdownFile}.markdown`;

  const dateString = dateSource.toLocaleString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });

  return await fetch(path).then(response => {
    if (response.status != 200) {
      fail()
      return ""
    }
    return response.text()
  }).then(text => {
    if (text.startsWith("<!") || text == "") {
      fail()
      return { title: '', markdown: '', dateString: '', sourceHref: '' }
    }
    text = text.replace(/--/g, '—')
    const eol = text.indexOf('\n')
    const title = text.substring(0, eol)

    if (setTitle) {
      document.title = title
    }

    console.log(`Loaded ${title}`)

    const markdown = text.substring(eol + 1).trimStart()

    const postData: PostData = { title: title, markdown: markdown, dateString: dateString, sourceHref: path }
    return postData
  })
}

export default LoadPost
