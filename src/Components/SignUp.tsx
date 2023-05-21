import React from "react";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { AppContext } from "./AppProvider";

function SignUp() {
  const context = useContext(AppContext);

  useEffect(() => {
    context?.setIsSignIn(true);
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "fname") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lname") {
      setLastName(e.target.value);
    } else if (e.target.name === "password") {
      let pword = e.target.value;
      setPassword(pword);
      if (pword.length === 0) {
        setPasswordErrorMessage("");
      } else if (pword.length <= 8) {
        setPasswordErrorMessage("Password must be at least 8 characters");
      } else {
        setPasswordErrorMessage("");
      }
    } else if (e.target.name === "email") {
      let mail = e.target.value;
      setEmail(mail);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        setEmailErrorMessage("");
      } else if (mail === "") {
        setEmailErrorMessage("");
      } else {
        setEmailErrorMessage("Please enter a valid email");
      }
      console.log(email);
    }
  };

  return (
    <div>
      <div className="form-container">
        <p className="orange">FOODCATE</p>
        <form className="sign-in-container">
          {!isLogin && (
            <>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                onChange={handleChange}
              />

              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                onChange={handleChange}
              />
            </>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            style={{
              border: `2px solid ${emailErrorMessage ? "red" : "transparent"}`,
            }}
          />
          {emailErrorMessage && (
            <p className="email-error red">{emailErrorMessage}</p>
          )}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            style={{
              border: `2px solid ${
                passwordErrorMessage ? "red" : "transparent"
              }`,
            }}
          />
          {passwordErrorMessage && (
            <p className="pword-error red">{passwordErrorMessage}</p>
          )}

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>

          {isLogin && (
            <div className="sign-mini">
              <div onClick={() => setIsLogin(!isLogin)}>Sign Up</div>
              <div>Forgot Password</div>
            </div>
          )}

          {!isLogin && (
            <div className="login-mini">
              Have an account?{" "}
              <span onClick={() => setIsLogin(!isLogin)}>Login</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
