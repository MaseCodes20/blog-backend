import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { toggleFalse } from "../../features/user/hasAccountSlice";

function SignIn() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1 className="my-14 text-[28px]">Welcome back.</h1>

        {/* Sign In options */}
        <div className="my-[50px]">
          <button className="pt-[7px] px-[16px] pb-[9px] border hover:border-black rounded-full text-[14px] flex items-center mx-auto">
            <EnvelopeIcon className="h-[25px] mr-2" /> <p>Sign in with email</p>
          </button>

          <div className="my-7">
            <p>
              No account?{" "}
              <span className="text-green-700 font-bold">
                <button onClick={() => dispatch(toggleFalse())}>
                  Create one
                </button>
              </span>
            </p>
          </div>
        </div>

        <div className="my-7">
          <p className="font-light text-[13px]">
            Forgot email or trouble signing in?{" "}
            <span>
              <Link className="underline">Get help</Link>
            </span>
          </p>
        </div>

        <div className="md:w-[450px]">
          <p className="font-light text-[13px]">
            Click "Sign in" to agress to Blog's{" "}
            <span>
              <Link className="underline">Terms of Service</Link>
            </span>{" "}
            and acknowledge that Blog's{" "}
            <span>
              <Link className="underline">Privacy Policy</Link>
            </span>{" "}
            applies to you
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
