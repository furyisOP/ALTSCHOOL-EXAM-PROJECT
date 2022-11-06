import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { userContext } from "./utils/UserContext";
import UserDetails from "./components/UserDetails";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [userdata, setuserdata] = useState();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <userContext.Provider
      value={{ isLoggedIn, setisLoggedIn, userdata, setuserdata }}
    >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userID" element={<UserDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
