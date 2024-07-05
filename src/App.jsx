import { BrowserRouter } from "react-router-dom";
// import { useMediaQuery } from 'react-responsive';

import { About, Contact, Feedbacks, Hero, Navbar, Works } from "./components";

const App = () => {
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gray-200 dark:bg-black'>
        <div className='bg-gray-200 dark:bg-black bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
      {/* {isDesktop && <Tech />} */}
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
       
          <Contact />
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;