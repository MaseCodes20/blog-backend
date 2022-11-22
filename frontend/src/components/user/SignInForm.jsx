import React, { useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function SignInForm({ setIsSignIn }) {
  const [formData, setFromData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const handleInputs = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button
        className="signInOrSignUpFormBackButton"
        onClick={() => setIsSignIn(false)}
      >
        <ArrowUturnLeftIcon className="signInOrSignUpFormBackIcon" />
      </button>

      <h1 className="signInOrSignUpTitle">Sign in with email</h1>
      <p className="signInOrSignUpPTag">
        Enter the email address associated with your account.
      </p>
      <form onSubmit={submitForm} className="signInOrSignUpFormContainer">
        <div className="signInOrSignUpInputContainer">
          <label htmlFor="email" className="signInOrSignUpFormLabel">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleInputs}
            className="signInOrSignUpFormInput"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="signInOrSignUpFormLabel">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputs}
            className="signInOrSignUpFormInput"
          />
        </div>

        <div className="h-[20px] flex items-center justify-center">
          {false && <p className="text-red-600 text-[13px]">Error Message</p>}
        </div>

        <button className="signInOrSignUpFormButton">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
