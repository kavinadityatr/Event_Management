import './App.css'
import Homepage from './components/home';
import SignIn from './components/signin'
import SignUp from './components/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/SignUp" exact element={<SignUp />} />
      <Route path="/Home" exact element={<Homepage />} />


      
      </Routes>
      
    </Router>
  )
}

export default App
