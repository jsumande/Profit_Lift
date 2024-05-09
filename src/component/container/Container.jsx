import React from 'react'

import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="App w-full h-screen flex flex-col items-center justify-center px-4">
      <Outlet />
    </div>
  )
}

export default Container
