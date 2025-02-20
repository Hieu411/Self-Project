import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import PrivateRoutes from './PrivateRoutes';
const Root = () => {
  return (
    <div>
      {/* <Header /> */}
      
          <main>
            <Outlet />
          </main>
      {/* <Footer /> */}
    </div>

  );
}

export default Root