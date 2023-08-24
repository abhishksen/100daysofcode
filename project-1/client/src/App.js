import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/layout/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Request from './components/request/Request';
import Subscribe from './components/payments/Subscribe';
import Success from './components/payments/Success';
import Failed from './components/payments/Failed';
import NotFound from './components/layout/notFound/NotFound';
import CoursePage from './components/coursePage/CoursePage';

function App() {

  window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/course/:id' element={<CoursePage />} />
        <Route path='/request' element={<Request />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<Success />} />
        <Route path='/paymentfailed' element={<Failed />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// remaining
// profile 
// admin panel