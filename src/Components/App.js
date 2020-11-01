import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Footer from './Footer';
import Navbar from './Navigation/Navbar';





const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" exact component={Header} />
          <Route path="/projects" exact component={Projects}/>
          <Route path="/contact" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;