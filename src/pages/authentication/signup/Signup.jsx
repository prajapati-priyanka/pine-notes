import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "../login/Login.css";
import "./Signup.css";
import { useAuth } from "../../../context/auth-context";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const checkPassword = (confirmPass) => {
    if (userData.password === confirmPass) {
      setError("");
    } else {
      setError("Password and Confirm Password Doesn't Match");
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", userData);
      const { encodedToken: token, createdUser } = response.data;
      if (response.status === 201) {
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify("createdUser"));
        authDispatch({
          type: "SIGN_UP",
          payload: { user: createdUser, token: token },
        });
        toast("Your data has been saved!", { icon: "✔️" });
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <main className="form-wrapper">
        <div className="form-login">
          <h2 className="form-title text-center x-lg-text">Signup</h2>
          <form
            className="form-content form-signup md-text"
            onSubmit={signupHandler}
          >
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              required
              name="firstName"
              value={userData.firstName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              required
              name="lastName"
              value={userData.lastName}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="tanaypratap@neog.camp"
              required
              name="email"
              value={userData.email}
              onChange={(e) => onChangeHandler(e)}
            />
            <label htmlFor="pass">Password</label>
            <span className="input-pass">
              <input
                type={showPassword ? "type" : "password"}
                id="pass"
                placeholder="*******"
                required
                name="password"
                value={userData.password}
                onChange={(e) => onChangeHandler(e)}
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword((prevPass) => !prevPass)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            <label htmlFor="confirm-pass">Confirm Password:</label>
            <span className="input-pass">
              <input
                type={showConfirmPassword ? "type" : "password"}
                id="confirm-pass"
                placeholder="*******"
                required
                name="confirmPass"
                value={userData.confirmPass}
                onChange={(e) => {
                  onChangeHandler(e);
                  checkPassword(e.target.value);
                }}
              />
              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword((prevConfirmPass) => !prevConfirmPass)
                }
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </span>
            <div className="passMatch-error">{error}</div>
            <div className="user-control">
              <input type="checkbox" className="input-check" />
              <label>I accept all Terms & Conditions</label>
            </div>
            <button className="btn btn-primary md-text" type="submit">
              CREATE NEW ACCOUNT
            </button>
            <p className="new-account text-center">
              <Link to="/login">
                Already have an account
                <MdOutlineArrowForwardIos className="forward-icon" />
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export { Signup };
