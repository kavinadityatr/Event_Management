import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/signup.css';

const SignUp = () => {
  const [companyName, setCompanyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <button type="submit" className='button_signup'> <Link to='/Home'>Sign In</Link></button>
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
