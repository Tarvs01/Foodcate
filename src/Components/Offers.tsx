import React from "react";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";

function Offers() {
  let context = useContext(AppContext);

  useEffect(() => {
    context?.setIsSignIn(false);
  }, []);

  useEffect(() => {
    let prevPage: HTMLLIElement | null = document.querySelector(
      `#${context?.currentPage}`
    );
    prevPage?.classList.remove("orange");
    let currentPage = document.querySelector("#offers");
    currentPage?.classList.add("orange");
    context?.setCurrentPage("offers");
  });

  return (
    <div className="offers-container">
      <h1>There are currently no offers at the moment</h1>
    </div>
  );
}

export default Offers;
