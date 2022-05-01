import {useState} from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import toast from "react-hot-toast";

const Login = () => {
  const { authDispatch } = useAuth();
const navigate = useNavigate();

  const [user,setUser] = useState({
    email: "",
    password: ""
  });


  const onChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]: value})
  }

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const clickHandler = (e) =>{
    e.preventDefault();
    setUser(guestUser);
  }

  const loginHandler = async(e) =>{
    e.preventDefault();
    console.log("clicked")
       try{

        const response = await axios.post("/api/auth/login", {
          email: user.email,
          password: user.password,
        });

        const { status } = response;
        const { encodedToken: token, foundUser } = response.data;
       
        if(status === 200){
           
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("user", JSON.stringify(foundUser));
           authDispatch({
             type: "LOGIN",
             payload: { user: foundUser, token: token },
           });
          toast("You are Succesfully logged in", { icon: "✔️" });
          navigate("/home");

        }else{
          throw new Error("Can't process the request, Please try again later")
        }

        console.log("IN Login Handler", response)

       }catch(err){
          console.error(err)
       }
  }


  return (
    <main className="form-wrapper">
      <div className="form-login">
        <h3 className="form-title text-center x-lg-text">Login</h3>
        <form className="form-content md-text" onSubmit={(e)=>loginHandler(e)}>
          <label htmlFor="email">Email Address</label>
          <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="tanay@neog.camp" 
          value={user.email}
          onChange = {(e)=> onChangeHandler(e)}
         
          />
          <label htmlFor="pass">Password</label>
          <input 
          type="password" 
          id="pass" 
          placeholder="*********" 
          name = "password"
          value={user.password}
          onChange = {(e)=> onChangeHandler(e)}
          
          />

           <div className="user-control">
            <input type="checkbox" className="input-check" />
            <label>Remember Me ?</label>
            <a href="/login" className="forgot-pass">
              Forgot your Password{" "}
            </a>
          </div>
          <button className="btn-guest md-text" onClick={(e)=>clickHandler(e)}>Add Guest Credentials</button>
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
