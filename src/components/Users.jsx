import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../utils/UserContext";

function Users() {
  const [currentItem, setCurrentItem] = useState(1);

  const { userdata, setuserdata } = useContext(userContext);

  //useeffect to get the initial page data
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=20&seed=student")
      .then((response) => response.json())
      .then((data) => setuserdata(data.results));
  }, []);

  //useeffect to get next page when currentItem changes
  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?page=${currentItem}&results=20&seed=student`
    )
      .then((response) => response.json())
      .then((data) => setuserdata(data.results));
  }, [currentItem]);

  //function to handle next button
  const handleNext = () => {
    if (currentItem < 6) {
      setCurrentItem((prev) => prev + 1);
    }
  };
  //function to handle previous button
  const handlePrev = () => {
    if (currentItem > 1) {
      setCurrentItem((prev) => prev - 1);
    }
  };
  return (
    <div className="users">
      <div className="users_container">
        {userdata?.map((user, index) => {
          return (
            <Link key={index} to={`/users/${user.id.value}`}>
              <div className="user-card">
                <div className="user-card_image">
                  <img src={user.picture.medium} alt="user pic" />
                </div>
                <div className="user-name">
                  <h3>{`${user.name.title} ${user.name.last}`}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="btn-group">
        <button onClick={handlePrev}>previous</button>
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
}

export default Users;
