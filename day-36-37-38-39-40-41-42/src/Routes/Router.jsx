import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import OrderSuccess from '../pages/OrderSuccess';
const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/products' element={<Home />} exact />
                <Route path='/cart' element={<Cart />} />
                <Route path='/ordersuccess' element={<OrderSuccess />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
