import './App.css'
import Homepage from './components/home';
import ProfilePage from './components/profile';
import Services from './components/services';
import SignIn from './components/signin'
import SignUp from './components/signup'
import '../src/assets/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/SignUp" exact element={<SignUp />} />
      <Route path="/Home" exact element={<Homepage />} />
      <Route path="/Profile" exact element={<ProfilePage />} />
      <Route path="/Service" exact element={<Services />} />
      <Route path="/About" exact element={<AboutPage />} />


      
      </Routes>
      
    </Router>
  )
}

export default App
