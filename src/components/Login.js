import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        {" "}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"></img>
      </div>{" "}
      <form className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="name"
            placeholder="Email or name"
            className="bg-black p-3 my-3 w-full rounded-lg bg-opacity-50 border-1 border border-white"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email or mobile number"
          className="bg-black p-3 my-3 w-full rounded-lg bg-opacity-50 border border-white"
        ></input>
        <input
          type="password"
          placeholder="Enter password"
          className="bg-black my-3 p-3 w-full rounded-lg bg-opacity-50  border border-white"
        ></input>
        <button className="bg-red-600 p-3 my-4 w-full rounded-lg">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="my-4 cursor-pointer" onClick={() => toggleSignInForm()}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered! Sign in now"}
        </p>
        <p className="text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
