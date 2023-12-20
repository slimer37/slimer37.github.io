import Header from './Header.tsx'
import Footer from './Footer.tsx'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="content" style={{ textAlign: 'center' }}>
        <h1>this is Alfred's website</h1>

        <p>under construction</p>

        <p><code>seeking efficiency</code></p>

        <p>You entered {window.location.pathname}</p>
      </div>
      <Footer />
    </>
  )
}

export default App
