import axios from "axios";
import "./login.css";
import {useRef,useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress'
export default function Login() {
  // useRef is a React Hook that allows you to create a reference to a DOM element or a mutable value that persists across renders without causing re-renders when it changes.
  const username=useRef()

  const password=useRef()
  const {user,isFetching,error,dispatch}=useContext(AuthContext)
  const loginUser=async(userCredentials,dispatch)=>{
    dispatch({type:"LOGIN_START"})
    try{
const res=await axios.post('/auth/login',userCredentials)
console.log(res)
dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE",payload:err})
    }
  }

  const handleClick=(event)=>{

    event.preventDefault()
    loginUser({username:username.current.value,password:password.current.value},dispatch)

  }
  console.log('USERRRRR')
console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">echoSpace</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">

            <form className="loginBox" onSubmit={handleClick} method="POST">
              <input
                required
                placeholder="enter username"
               
                className="loginInput"
                ref={username}
              />
              <input
              required
                placeholder="Enter password"
                type="password"
                className="loginInput"
                ref={password}
              />
              <button type="submit" className="loginButton">
                {isFetching?<CircularProgress />:'Log in'}
              </button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account

            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}