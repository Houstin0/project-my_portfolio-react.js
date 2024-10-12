import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
// import { useMediaQuery } from 'react-responsive';

import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  Certifications,
  Experience,
  Services,
  Footer,
} from "./components";

const App = () => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("color-theme") === "dark"
  );

  return (
    <BrowserRouter>
      <div className="min-w-full overflow-x-hidden bg-gray-200 dark:bg-black">
        <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        <Hero />

        <About />
        <Experience />
        <Services />
        {/* {isDesktop && <Tech />} */}
        <Works />
        <Certifications />
        {/* <Feedbacks /> */}
        <div>
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
