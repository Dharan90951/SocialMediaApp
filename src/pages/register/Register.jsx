import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { isFetching, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    dispatch({ type: "LOGIN_START" });
    try {
      // Simulating API call - replace with actual API integration
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ email, username, id: 1 }), 1000)
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
      setError(err.message);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Social Media</h3>
          <span className="registerDesc">
            Connect with friends and the world around you.
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleRegister}>
            <input
              placeholder="Username"
              required
              className="registerInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              required
              className="registerInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="registerInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Confirm Password"
              type="password"
              required
              minLength="6"
              className="registerInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <div className="registerError">{error}</div>}
            <button className="registerButton" type="submit" disabled={isFetching}>
              {isFetching ? "Loading..." : "Sign Up"}
            </button>
            <Link to="/login" className="loginButton">
              Log into Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}