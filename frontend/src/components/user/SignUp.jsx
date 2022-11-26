import React from "react";
import { MailIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTrue } from "../../features/user/hasAccountSlice";
import { selectSignUp } from "../../features/user/formSelectorSlice";
import { close } from "../../features/connectModal/connectModalSlice";

function SignUp() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="connectModalTitle">Join Blog.</h1>

      {/* Sign In options */}
      <div className="connectModalOptionsContainer">
        <button
          className="connectModalOptionsButton"
          onClick={() => dispatch(selectSignUp())}
        >
          <MailIcon className="connectModalOptionsButtonIcon" />{" "}
          <p>Sign up with email</p>
        </button>

        <div className="createOrSignInContainer">
          <p>
            Alrady have an account?{" "}
            <span className="createOrSignInSpan">
              <button onClick={() => dispatch(toggleTrue())}>Sign in</button>
            </span>
          </p>
        </div>
      </div>

      <div className="termsAndPolicyContainer">
        <p className="termsAndPolicyPTag">
          Click "Sign up" to agress to Blog's{" "}
          <span>
            <Link
              to="/blog-terms-of-service"
              onClick={() => dispatch(close())}
              className="termsAndPolicyLink"
            >
              Terms of Service
            </Link>
          </span>{" "}
          and acknowledge that Blog's{" "}
          <span>
            <Link
              to="/blog-privacy-policy"
              onClick={() => dispatch(close())}
              className="termsAndPolicyLink"
            >
              Privacy Policy
            </Link>
          </span>{" "}
          applies to you
        </p>
      </div>
    </div>
  );
}

export default SignUp;
