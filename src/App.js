import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Logo from './assets/southlandlogo.png';
import Home from './pages/home/home';
import Course from './pages/aboutUs/course';
import Contact from './pages/contactUs/contact';
import Footer from './footer/footer';

// Components for each page
function Homee() {
  return <Home />;
}

function Courses() {
  return <Course />;
}

function Contacts() {
  return <Contact />;
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation Bar */}
        <AppBar position="static" color="primary">
          <Toolbar style={{ background: '#CD680F' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              {/* Logo on the left */}
              <img src={Logo} alt="logo" style={{ height: '40px' }} />
              
              {/* Navigation Buttons on the right */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                  ADMINISTRATION
                </Button>
                <Button color="inherit" component={Link} to="/course">
                  About Us
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                  Contact
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                  Contact
                </Button>

              
             
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
