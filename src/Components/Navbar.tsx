import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppProvider";

function Navbar() {
  const context = useContext(AppContext);

  const [size, setSize] = useState(window.innerWidth);
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);

  let updateSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  useEffect(() => {
    let body: HTMLBodyElement | null = document.querySelector("body");

    body?.addEventListener("click", () => {
      setSmallMenuOpen(false);
    });

    let menu: HTMLDivElement | null = document.querySelector(".small-menu");

    menu?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

  function toggleMenu() {
    if (smallMenuOpen) {
      let menuCont: HTMLDivElement | null =
        document.querySelector(".small-menu");
      menuCont?.classList.remove("slide-in");
      menuCont?.classList.add("slide-out");
      setSmallMenuOpen(false);
    } else {
      setSmallMenuOpen(true);
      let menuCont: HTMLDivElement | null =
        document.querySelector(".small-menu");
      menuCont?.classList.remove("slide-out");
      menuCont?.classList.add("slide-in");
    }
  }

  return (
    <nav>
      {!context?.isSignIn && (
        <div className="header-container">
          <Link to="/">
            <div className="logo orange">FOODCATE</div>
          </Link>
          <div className="nav-menu">
            {size <= 730 && (
              <div className="menu-icon-cont">
                <div
                  className="menu-icon"
                  onClick={(e) => {
                    toggleMenu();
                    e.stopPropagation();
                  }}
                >
                  {!smallMenuOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  )}
                  {smallMenuOpen && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  )}
                </div>
                {smallMenuOpen && (
                  <div className="small-menu-container">
                    <div className="blur-container"></div>
                    <ul className="small-menu">
                      <li>
                        <Link to={"/food"}>Food</Link>
                      </li>
                      <li>Restaurant</li>
                      <li>
                        <Link to={"/offers"}>Offers</Link>
                      </li>
                      <li>
                        <Link to={"/staff"}>Staff</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            {size > 730 && (
              <ul className="large-menu">
                <li id="food">
                  <Link to={"/food"}>Food</Link>
                </li>
                <li id="rest">Restaurant</li>
                <li id="offers">
                  <Link to={"/offers"}>Offers</Link>
                </li>
                <li id="staff">
                  <Link to={"/staff"}>Staff</Link>
                </li>
              </ul>
            )}
          </div>
          {context?.isLoggedIn ? (
            <Link to="/profile">
              <div className="user-icon">
                {/* <img src="../images/skeleton_profile.png" alt="profile pic" /> */}
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
            </Link>
          ) : (
            <div className="sign-up-cart-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart2 cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <Link to={"/signup"} className="sign-up-btn">
                Signup
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
