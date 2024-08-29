import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// footer and navbar
import Footer from './components/footer(R)';

// cv pages
import CvExample from './pages/cv/cv-example';
import CvFormat from './pages/cv/cv-format';
import CvTemplates from './pages/cv/cv-template';
import WriteCV from './pages/cv/how-to-write-cv';


// support

import Contact from './pages/support/contact';


// login
import Login from './pages/login/login';
import Signup from './pages/login/signup';


function App() {
    return (
    <>
    <Router>
      {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Footer />} />

      {/* cv routes */}
  
      <Route path="/cv-templates" element={< CvTemplates/>} />
      <Route path="/cv-examples" element={< CvExample/>} />
      <Route path="/cv-format" element={< CvFormat/>} />
      <Route path="/how-to-write-a-cv" element={< WriteCV/>} />

      {/* support routes */}

      <Route path="/contact" element={< Contact/>} />
 

      {/* login */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
    {/* <Footer/> */}
  </Router>
    </>
  )
}

export default App;
