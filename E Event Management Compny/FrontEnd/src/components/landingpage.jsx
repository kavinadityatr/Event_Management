// import React from 'react';
// class LandingPage extends React.Component {
    //   handleRoleSelection = (role) => {
        //     // Handle role selection here, e.g., redirect to different pages based on the role selected
        //     if (role === 'user') {
            //       // Redirect to user page
            //       console.log('User role selected');
            //     } else if (role === 'admin') {
                //       console.log('Admin role selected');
                //     }
                //   };
                
//   render() {
    //     return (
        //       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        //         <div>
        //           <button className="button" onClick={() => this.handleRoleSelection('user')}>User</button>
        //           <button className="button" onClick={() => this.handleRoleSelection('admin')}>Admin</button>
        //         </div>
        //       </div>
        //     );
        //   }
        // }
        
        // export default LandingPage;
        
        
        import { Link } from 'react-router-dom';
        import '../assets/landingpage.css';
        // import UserLoginPage from './UserLoginPage';
// import AdminLoginPage from './AdminLoginPage';

function LandingPage() {
  return (
    <div className='container-land'>
        <div className="image_signin">
        <img className='event_img'src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708336332/Quote_s1pvrh.jpg" alt="Sign In" />
      </div>
      <div className="landing-page">
      <h2>Select Role</h2>
      <div className="button-container">
        <Link to="/Signin-user" className="button">User</Link>
        <Link to="/Signin-admin" className="button">Admin</Link>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;