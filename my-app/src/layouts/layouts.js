import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flexGrow: 1 }}>
        {children}  
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
