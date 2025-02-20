import React from 'react'
import { Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  return (
    <>
      {/* <ProtectedRoutes><Outlet/></ProtectedRoutes> */}
      <Outlet/>
    </>
  );
}

export default AdminRoutes