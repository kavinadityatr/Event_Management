import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../assets/signin.css';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/auth', {
        username: email,
        password: password,
      });
      const token = response.data;
      localStorage.setItem('token',token);
      console.log('Token: ' + token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log('Login Success:', response.data);
      setLoginSuccess(true);
    }
     catch (error) {
      console.error('Login Error:', error);
    }
  };
  useEffect(() => {
    if (loginSuccess) {
      if (email === 'qwas') {
        window.location.href = '/AdminHome';
      } else {
        window.location.href = '/Home';
      }
    }
  }, [loginSuccess]);
  return (
    <div>
      <div className='content_signin'>
        <div className="container_signin">
          <div className="image_signin">
            <img className='event_img' src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708336332/Quote_s1pvrh.jpg" alt="Sign In" />
          </div>
          <div className="signin-form">
            <h1>USER SIGN-IN</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='signin'
                  type="text"
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
                <button type="submit" className='button_signin'>Sign In</button>
              </div>
              <h3>New here??<Link to='/SignUp'>SignUp</Link></h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;




