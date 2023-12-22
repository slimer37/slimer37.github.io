import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

import Home from './routes/Home.tsx'

function Root() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default Root;