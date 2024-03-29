import React from 'react';

import { Footer, Navbar } from '../components';

export const Layout = ({ children }) => {
  return (
    //layout to be modified base on screen size
    <div className="flex flex-col">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
