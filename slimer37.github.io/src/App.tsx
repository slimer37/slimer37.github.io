import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import NotFound from './NotFound.tsx'

import './App.css'

function Content() {
  return (
    <>
      <Header />
        <div className="content" style={{ textAlign: 'center' }}>
          <h1>this is Alfred's website</h1>

          <p>under construction</p>

          <p><code>seeking efficiency</code></p>
        </div>
      <Footer />
    </>
  )
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Content />} />
              <Route path='*' element={<NotFound />}/>
          </Routes>
      </Router>
  );
}

export default App;