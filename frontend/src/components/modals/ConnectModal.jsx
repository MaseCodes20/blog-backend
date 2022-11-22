import React, { useRef, useState } from "react";
import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../features/connectModal/connectModalSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SignInForm from "../user/SignInForm";
import SignUpForm from "../user/SignUpForm";

function ConnectModal() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { isOpen } = useSelector((state) => state.connectModal);
  const { hasAccount } = useSelector((state) => state.hasAccount);
  const dispatch = useDispatch();

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) dispatch(close());
  };

  return (
    <>
      {isOpen && (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20"
        >
          <div className="relative md:w-[560px] md:h-[600px] flex justify-center items-center text-center py-[44px] px-[56px] bg-white shadow-lg">
            <button
              className="absolute top-0 right-0 m-5"
              onClick={() => dispatch(close())}
            >
              <XMarkIcon className="h-[29px] text-gray-400" />
            </button>

            {isSignIn || isSignUp ? (
              <>
                {isSignIn && <SignInForm setIsSignIn={setIsSignIn} />}
                {isSignUp && <SignUpForm setIsSignUp={setIsSignUp} />}
              </>
            ) : (
              <>
                {hasAccount ? (
                  <SignIn setIsSignIn={setIsSignIn} />
                ) : (
                  <SignUp setIsSignUp={setIsSignUp} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ConnectModal;
