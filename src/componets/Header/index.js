import React, { useState } from 'react';
import Navigation from '../Navigation';
import Project from '../Project';
import Contact from '../Contact';
import About from '../About';
import Resume from '../Resume';

function Portfolio () {
    // this will use the state of the current page
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        // a switch statement that returns the componet of currentPage
        switch(currentPage.toLowerCase()) {
          case 'about':
            return <About />;
          case 'contact':
            return <Contact />;
          case 'portfolio':
            return <Project />;
          case 'resume':
            return <Resume />;
          default:
            return <About />;
        }
      };
      

return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    <div>
    {
        renderPage()
    }
    </div>
    </div>
);

}

export default Portfolio;