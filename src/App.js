import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import BlogComp from './Components/Blogs/BlogComp';
import HomeNav from './Components/Home/HomeNav';
import BlogDetails from './Components/Blogs/BlogDetails';
import ContextProvider from './Components/Context/ContextProvider';
import CourseDetails from './Components/Courses/CourseDetails';
import NotFound from './Components/NotFound/NotFound';
import LoginPage from './Components/Signup-Login/LoginPage';
import SignupPage from './Components/Signup-Login/SignupPage';
import Profile from './Components/Profile/Profile';
import ProtectedRoute from './Components/Services/ProtectedRoute';
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <ContextProvider>
          <HomeNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:course_title' element={<CourseDetails />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<BlogComp />} />
            <Route path='/blog-details/:blog_title' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/' element={<ProtectedRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
          <Footer />
        </ContextProvider>
      </Router>
    </div>
  );
}

export default App;
