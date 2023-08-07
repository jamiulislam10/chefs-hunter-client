import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import AuthProviders from './Providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders> 
<div className='max-w-screen-lg mx-auto'>
<RouterProvider router={router}></RouterProvider>

</div>
   </AuthProviders>
  </React.StrictMode>,
)
