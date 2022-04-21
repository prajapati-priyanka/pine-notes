import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

import "../login/Login.css";
import "./Signup.css";

const SignUp = () => {
  return (
    <div>
      <main className="form-wrapper">
        <div className="form-login">
          <h2 className="form-title text-center x-lg-text">Signup</h2>
          <form className="form-content form-signup md-text">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" placeholder="First Name" />
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              name="lastName"
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
            />
            <label htmlFor="pass">Password</label>
            <span className="input-pass">
              <input type="password" id="pass" placeholder="*******" />
              <span className="eye-icon">
                <FaEyeSlash />
              </span>
            </span>
            <label htmlFor="confirm-pass">Confirm Password:</label>
            <span className="input-pass">
              <input type="password" id="confirm-pass" placeholder="*******" />
              <span className="eye-icon">
                <FaEyeSlash />
              </span>
            </span>
            {/* <div className="passMatch-error">{error}</div> */}
            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>I accept all Terms & Conditions</label>
            </div>
            <button className="btn btn-primary md-text" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account text-center">
              <a href="/login">
                Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { SignUp };
