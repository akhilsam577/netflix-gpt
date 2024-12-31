import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { USER_LOGO, LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptPage } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const logedInUser = useSelector((store) => store.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.toggleGptButton);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleAiClick = () => {
    dispatch(toggleGptPage());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleLangChnage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-48 mx-auto md:mx-0" src={LOGO} alt="logo"></img>
      {logedInUser && (
        <div className="relative flex items-center">
          <div className=" flex justify-evenly">
            {showGptSearch && (
              <select
                onChange={handleLangChnage}
                className="text-white bg-red-700 px-4 py-2 mr-4 outline-none border-2 rounded-lg h-10"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifer} value={lang.identifer}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={() => handleAiClick()}
              className="text-white bg-red-700 mr-4 mx-2 px-6 py-1 outline-none border-2 rounded-lg h-10"
            >
              {showGptSearch ? "Home" : "Ask Ai"}
            </button>
          </div>
          <img
            className="w-14 h-13 p-2 rounded-2xl cursor-pointer"
            alt="userIcon"
            src={USER_LOGO}
            onClick={toggleDropdown}
          />
          <p className="text-red-700 font-extrabold">↓</p>
          {isOpen && (
            <div className="absolute top-12 right-0 w-48 bg-gray-800 text-white shadow-lg rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSignOut()}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
