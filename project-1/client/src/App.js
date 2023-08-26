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
import Profile from './components/profile/Profile';
import ChangePassword from './components/profile/ChangePassword';
import UpdateProfile from './components/profile/UpdateProfile';
import Dashboard from './components/admin/dashboard/Dashboard';
import CreateCourses from './components/admin/createCourses/CreateCourse';
import AdminCourses from './components/admin/courses/AdminCourses'
import Users from './components/admin/users/Users'

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

        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<Success />} />
        <Route path='/paymentfailed' element={<Failed />} />

        {/* admin routes */}
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/createcourse' element={<CreateCourses />} />
        <Route path='/admin/courses' element={<AdminCourses />} />
        <Route path='/admin/users' element={<Users />} />


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