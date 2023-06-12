import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import Home from '../Pages/Home'
import About from '../Pages/About'
import Vans from '../Pages/Vans'
import VanDetails from '../Pages/VanDetails'
import Layout from '../Components/Layout'
import Dashboard from '../Pages/Host/Dashboard'
import Income from '../Pages/Host/Income'
import Reviews from '../Pages/Host/Reviews'

import HostLayout from '../Components/HostLayout'
import HostVans from '../Pages/Host/HostVans'
import HostVanDetail from '../Pages/Host/HostVanDetail'
import Info from '../pages/Host/Info'
import Pricing from '../pages/Host/Pricing'
import Photos from '../pages/Host/Photos'
import PageNotFound from '../Pages/PageNotFound'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                    <Route index element={<Info />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="photos" element={<Photos />} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </ Route>
    )
);