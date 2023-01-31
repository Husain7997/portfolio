
import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './layout/Routes/Router';
function App() {
  return (
    <div className='max-w-screen-xl mx-5' >
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
