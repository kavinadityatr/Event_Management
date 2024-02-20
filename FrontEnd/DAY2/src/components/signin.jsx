import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/signin.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div> 
    <div className='content_signin'>
    <div className="container_signin">
      <div className="image_signin">
        <img className='event_img'src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708336332/Quote_s1pvrh.jpg" alt="Sign In" />
      </div>
      <div className="signin-form">
        <h1>SIGN-IN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='signin'
              type="email"
              value={email}
              id='emailsignin'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className='signin'
              type="password"
              value={password}
              id='passwordsignin'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit" className='button_signin'><Link to='/Home'>Sign In</Link></button>
          </div>
          <h3>New here??   <Link to='/SignUp'>SignUp</Link></h3>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default SignIn;
