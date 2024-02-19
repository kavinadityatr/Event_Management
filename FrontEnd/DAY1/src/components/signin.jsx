import React from "react";
import '../assets/signin.css';                                                   ``


function SigninForm() {
    return (
        <div className="signin">
        <form >
      <label>
        <input type="text" placeholder="Email"/>
      </label><br />
      <label>
        <input type="password" placeholder="Password"/>
      </label><br />
      <button >SignIn</button>
    </form>
    </div>
    )
}

export default SigninForm;