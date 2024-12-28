import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateCredetials } from "../utils/validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignin = () => {
    const message = validateCredetials(
      email.current.value,
      password.current.value
    );
    console.log(email.current.value);
    console.log(password.current.value);
    setError(message);

    if (message) {
      return;
    }
    console.log("isSignInForm", isSignInForm);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log("auth.currentUser".auth);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        {" "}
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"></img>
      </div>{" "}
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="name"
            ref={name}
            placeholder="Email or name"
            className="bg-black p-3 my-3 w-full rounded-lg bg-opacity-50 border-1 border border-white"
          ></input>
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email or mobile number"
          className="bg-black p-3 my-3 w-full rounded-lg bg-opacity-50 border border-white"
        ></input>
        <input
          type="password"
          ref={password}
          placeholder="Enter password"
          className="bg-black my-3 p-3 w-full rounded-lg bg-opacity-50  border border-white"
        ></input>
        <p className="text-red-500 font-light my-2">{error}</p>
        <button
          className="bg-red-600 p-3 my-4 w-full rounded-lg"
          onClick={() => handleSignin()}
        >
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
