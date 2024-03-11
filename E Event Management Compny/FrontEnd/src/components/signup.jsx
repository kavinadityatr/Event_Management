import { useState } from 'react';
import '../assets/signup.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [companyName, setCompanyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this line to the top to prevent default form submission behavior

    // Check for empty fields
    if (!companyName || !fullName || !email || !password) {
      console.error('Please fill in all fields.');
      return;
    }

    try {
      const response = await Axios.post('http://localhost:8080/auth/new', {
        name: fullName,
        email: email,
        password: password,
        companyname: companyName,
        roles: 'USER',
      });
      
      console.log(response.data);
    } catch (error) {
      // Check for specific error types
      if (error.response) {
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error registering user:', error.message);
      }
    }

    console.log('Company Name:', companyName);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div> 
      <div className='content_signup'>
        <div className="container_signup">
          <div className="image_signup">
            <img className='event_img'src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708336332/Quote_s1pvrh.jpg" alt="Sign In" />
          </div>
          <div className="signup-form">
            <h1>SIGN-UP</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='signup'
                  type="text"
                  id="companyName"
                  placeholder='Company Name'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className='signup'
                  type="text"
                  id="fullName"
                  placeholder='Name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className='signup'
                  type="email"
                  value={email}
                  id='emailsignup'
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  className='signup'
                  type="password"
                  value={password}
                  id='passwordsignup'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="button-container">
                <button type="submit" className='button_signup'><Link to='/Signin-user'>Sign In</Link></button>
              </div>
              {/* <h3>Existing User??   <Link to='/'>Login</Link></h3> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
