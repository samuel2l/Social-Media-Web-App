import "./signup.css";

export default function Signup() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">echoSpace</h3>
          <span className="loginDesc">
            Connect with friends and the world around you 
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="username" className="loginInput" />
            <input placeholder="email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <input placeholder="confirm password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}