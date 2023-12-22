import { Outlet } from "react-router-dom";

import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

function Root() {
  return (
    <>
      <Header shrinks={true} />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;