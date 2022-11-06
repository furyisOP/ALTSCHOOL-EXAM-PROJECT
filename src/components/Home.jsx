import React, { useContext, useEffect } from "react";
import { signinwithGoogle, auth } from "../utils/firebase";
import { FaGoogle } from "react-icons/fa";
import { userContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function Home() {
  const nav = useNavigate();
  const { isLoggedIn, setisLoggedIn } = useContext(userContext);
  console.log(isLoggedIn);

  //function to handle login
  const handleLogin = async () => {
    await signinwithGoogle();
    setisLoggedIn(true);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisLoggedIn(true);
        console.log(user);
        nav("/users");
        // ...
      } else {
        setisLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="login">
          <h1>ALTSCHOOL PROJECT</h1>
          <button type="button" className="btn" onClick={handleLogin}>
            <FaGoogle />
            Login with google
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
