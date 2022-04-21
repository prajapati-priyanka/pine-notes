import { MdOutlineArrowForwardIos } from "react-icons/md";

import "./Login.css";

const Login = () => {
  return (
    <main className="form-wrapper">
      <div className="form-login">
        <h3 className="form-title text-center x-lg-text">Login</h3>
        <form className="form-content md-text">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="tanay@neog.camp" />
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" placeholder="*********" />

           <div className="user-control">
            <input type="checkbox" className="input-check" />
            <label>Remember Me ?</label>
            <a href="/login" className="forgot-pass">
              Forgot your Password{" "}
            </a>
          </div>
          <button className="btn-guest md-text">Add Guest Credentials</button>
          <button className="btn btn-primary md-text">LOGIN</button>
          <p className="new-account text-center">
            <a to="/signup">
              Create New Account
              <MdOutlineArrowForwardIos className="forward-icon" />
            </a>
          </p> 
        </form>
      </div>
    </main>
  );
};

export { Login };
