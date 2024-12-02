import React from 'react';


const Footer = () => {
  const footerStyles = {
    backgroundColor: '#242424', // Same color as your AppBar
    color: 'white',
    textAlign: 'center',
    padding: '5px 0',
    position: 'relative',
    bottom: '0',
    width: '100%',
    marginTop: 'auto',
  };

  const footerContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  

  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
       
        <p>© 2024 Southland. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
