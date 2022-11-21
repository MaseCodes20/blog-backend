import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTrue } from "../../features/user/hasAccountSlice";

function SignUp() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="my-14 text-[28px]">Join Blog.</h1>

      {/* Sign In options */}
      <div className="my-[50px]">
        <button className="pt-[7px] px-[16px] pb-[9px] border hover:border-black rounded-full text-[14px] flex items-center mx-auto">
          <EnvelopeIcon className="h-[25px] mr-2" /> <p>Sign up with email</p>
        </button>

        <div className="my-7">
          <p>
            Alrady have an account?{" "}
            <span className="text-green-700 font-bold">
              <button onClick={() => dispatch(toggleTrue())}>Sign in</button>
            </span>
          </p>
        </div>
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
  );
}

export default SignUp;
