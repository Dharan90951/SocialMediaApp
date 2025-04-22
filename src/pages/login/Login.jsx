import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, error, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // Static authentication logic
      if (email === "test@example.com" && password === "password123") {
        dispatch({ type: "LOGIN_SUCCESS", payload: { username: "Test User" } });
      } else if (!email || !password) {
        throw new Error("Please enter both email and password");
      } else {
        throw new Error("Invalid credentials");
      }
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleLogin}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="loginError">{error}</div>}
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? "Loading..." : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="loginRegisterButton">
              Create a New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}