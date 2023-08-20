import "./server"
import { requireAuth } from "./utils"

import './src/assets/app.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import About from './src/pages/About.jsx'
import Vans, {loader as vansLoader} from './src/pages/vans/Vans'
import HostVans, {loader as hostVansLoader} from "./src/pages/host/HostVans"
import HostVanDetails from "./src/pages/host/HostVanDetails"
import HomePage from './src/pages/HomePage'
import VanDetail, {loader as vansDetailLoader} from './src/pages/vans/VanDetail'
import Layout from './src/components/Layout'
import Dashboard from './src/pages/host/Dashboard'
import Income from "./src/pages/host/Income"
import Reviews from "./src/pages/host/Reviews"
import HostLayout from "./src/components/HostLayout"
import HostVansLayout, {loader as hostVansLayoutLoader} from "./src/components/HostVansLayout "
import HostVanPricing from "./src/pages/host/HostVanPricing"
import HostVanPhoto from "./src/pages/host/HostVanPhoto"
import NotFound from "./src/pages/NotFound"
import Error from "./src/components/Error"
import Login, { loader as loginLoader, action as loginAction } from "./src/pages/Login"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<HomePage />} />
    <Route path="about" element={<About />} />
    <Route path="login" 
      element={<Login />} 
      loader={loginLoader} 
      action={loginAction}
    />
    <Route path="vans" element={<Vans />} 
      errorElement={<Error />} 
      loader={vansLoader} 
    />
    <Route path="vans/:id" element={<VanDetail />} 
      errorElement={<Error />} 
      loader={vansDetailLoader} 
    />
    
    <Route path="host" element={<HostLayout />} 
      loader={async ({ request }) => await requireAuth(request) } 
    >
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<HostVans />} 
        errorElement={<Error />} 
        loader={hostVansLoader} 
      />
      <Route path="vans/:id" element={<HostVansLayout />} 
        errorElement={<Error />} 
        loader={hostVansLayoutLoader} 
      >
        <Route index element={<HostVanDetails />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photo" element={<HostVanPhoto />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
    </Route>         

    <Route path="*" element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex-container'>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
