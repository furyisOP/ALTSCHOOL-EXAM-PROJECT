import React, { useContext } from "react";
import { userContext } from "../utils/UserContext";
import { useParams, Link } from "react-router-dom";

function UserDetails() {
  const { userdata } = useContext(userContext);
  const userID = useParams().userID;
  const user = userdata.find((item) => item.id.value === userID);
  return (
    <>
      {userID === null ? (
        <div className="null">
          <h1>THI USER ID IS NULL</h1>
          <p>
            {" "}
            <Link to="/users" className="back">
              Go Back
            </Link>
          </p>
        </div>
      ) : (
        <div className="user-details__container">
          <div className="details-img">
            <img src={user?.picture.large} alt="profile" />
          </div>
          <div className="details-text">
            <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>

            <p>{user.gender}</p>
            <p>{user.email}</p>
            <p>{user.dob.date}</p>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </div>

          <Link to="/users" className="back">
            Go Back
          </Link>
        </div>
      )}
    </>
  );
}

export default UserDetails;
