import './App.css'
import Homepage from './components/home';
import ProfilePage from './components/profile';
import Services from './components/services';
import SignIn from './components/signin'
import SignUp from './components/signup'
import '../src/assets/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';
import LandingPage from './components/landingpage';
import AdminSignIn from './components/adminsignin';
import AdminHomepage from './components/admin-home';
import AdminServices from './components/admin-service';
import PaymentForm from './components/Enquiry';
// import GalleryPage from './components/contact';
// import ContactUsPage from './components/contact';
// import Contact from './components/contact';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/Signin-user" exact element={<SignIn />} />
      <Route path="/Signin-admin" exact element={<AdminSignIn />} />
      <Route path="/SignUp" exact element={<SignUp />} />
      <Route path="/AdminHome" exact element={<AdminHomepage />} />
      <Route path="/Home" exact element={<Homepage />} />
      <Route path="/Profile" exact element={<ProfilePage />} />
      <Route path="/Service" exact element={<Services />} />
      <Route path="/AdminService" exact element={<AdminServices />} />
      <Route path="/About" exact element={<AboutPage />} />
      <Route path="/Booking" exact element={<PaymentForm />} />
      
      </Routes>
      
    </Router>
  )
}

export default App
