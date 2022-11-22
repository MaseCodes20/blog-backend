import React, { useRef, useState } from "react";
import SignIn from "../user/SignIn";
import SignUp from "../user/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../features/connectModal/connectModalSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SignInForm from "../user/SignInForm";
import SignUpForm from "../user/SignUpForm";
import { resetFormSelector } from "../../features/user/formSelectorSlice";

function ConnectModal() {
  const { isOpen } = useSelector((state) => state.connectModal);
  const { hasAccount } = useSelector((state) => state.hasAccount);
  const { isSignUp, isSignIn } = useSelector((state) => state.formSelector);

  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      dispatch(close());
      dispatch(resetFormSelector());
    }
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
              onClick={() => {
                dispatch(close());
                dispatch(resetFormSelector());
              }}
            >
              <XMarkIcon className="h-[29px] text-gray-400" />
            </button>

            {isSignIn || isSignUp ? (
              <>
                {isSignIn && <SignInForm />}
                {isSignUp && <SignUpForm />}
              </>
            ) : (
              <>{hasAccount ? <SignIn /> : <SignUp />}</>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ConnectModal;
