import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTrue } from "../../features/user/hasAccountSlice";
import { selectSignUp } from "../../features/user/formSelectorSlice";

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
          <EnvelopeIcon className="connectModalOptionsButtonIcon" />{" "}
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
          Click "Sign in" to agress to Blog's{" "}
          <span>
            <Link className="termsAndPolicyLink">Terms of Service</Link>
          </span>{" "}
          and acknowledge that Blog's{" "}
          <span>
            <Link className="termsAndPolicyLink">Privacy Policy</Link>
          </span>{" "}
          applies to you
        </p>
      </div>
    </div>
  );
}

export default SignUp;
