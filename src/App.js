import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Adjusted path
import Footer from './Components/Footer'; // Adjusted path
import Home from './Pages/Home'; // Adjusted path
import ContactUs from './Pages/ContactUs'; // Adjusted path
import Welcome from './Pages/Welcome';

const App = () => (
    <Router>
     <div>
        <Navbar />
        <div className='main-content'>
         <Routes>
          <Route path="/Welcome" element={<Welcome/>} /> 
           <Route path="/" element={<Home/>} />
           <Route path="/ContactUs" element={<ContactUs/>} />
         </Routes>
        </div>
       <Footer />
     </div>
    </Router>
);

export default App;