import React from "react";

function Profile() {
  return (
    <div>
      <div className="photo-cont">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      </div>

      <div className="details">
        <div className="data-cont">
          <div className="key">First Name:</div>
          <div className="value">Terver</div>
        </div>

        <div className="data-cont">
          <div className="key">Last Name:</div>
          <div className="value">Torvenda</div>
        </div>

        <div className="data-cont">
          <div className="key">Email:</div>
          <div className="value">Tervenda18@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
