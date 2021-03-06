import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./Login.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import { toast } from "react-toastify";
import { loginService } from "../../../services/authServices/loginService";

const Login = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const guestUser = {
    email: "coolpriyanka@gmail.com",
    password: "coolpriyanka123",
  };

  const clickHandler = (e) => {
    e.preventDefault();
    setUser(guestUser);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);

        const { status } = response;
        const { encodedToken: token, foundUser } = response.data;

        if (status === 200) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(foundUser));
          authDispatch({
            type: "LOGIN",
            payload: { user: foundUser, token: token },
          });
          navigate(location?.state?.from?.pathname || "/home", {
            replace: true,
          });
          toast.success("You are succesfully logged in");
        } else {
          throw new Error("Can't process the request, Please try again later");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      toast.warning("Email and password field cannot be empty");
    }
  };

  return (
    <main className="form-wrapper">
      <div className="form-login">
        <h3 className="form-title text-center x-lg-text">Login</h3>
        <form
          className="form-content md-text"
          onSubmit={(e) => loginHandler(e)}
        >
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="priyanka@gmail.com"
            value={user.email}
            onChange={(e) => onChangeHandler(e)}
          />
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="*********"
            required
            name="password"
            value={user.password}
            onChange={(e) => onChangeHandler(e)}
          />

          <div className="user-control">
            <input type="checkbox" className="input-check" />
            <label>Remember Me ?</label>
            <a href="/login" className="forgot-pass">
              Forgot your Password{" "}
            </a>
          </div>
          <button
            className="btn-guest md-text"
            onClick={(e) => clickHandler(e)}
          >
            Add Guest Credentials
          </button>
          <button className="btn btn-primary md-text">LOGIN</button>
          <p className="new-account text-center">
            <Link to="/signup">
              Create New Account
              <MdOutlineArrowForwardIos className="forward-icon" />
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export { Login };
