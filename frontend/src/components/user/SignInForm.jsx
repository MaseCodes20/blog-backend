import React, { useEffect, useState } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import { close } from "../../features/connectModal/connectModalSlice";

function SignInForm({ setIsSignIn }) {
  const [formData, setFromData] = useState({ email: "", password: "" });

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleInputs = (e) => {
    setFromData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
      dispatch(close());
    }

    dispatch(reset());
  }, [isError, isSuccess, message, user, dispatch, navigate]);

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
            type="email"
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
          {false && <p className="signInOrSignUpFormError">Error Message</p>}
        </div>

        <button className="signInOrSignUpFormButton">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
