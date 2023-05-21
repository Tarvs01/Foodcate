import React, { BaseSyntheticEvent } from "react";
import { useState } from "react";
import FoodCard from "./FoodCard";
import RestaurantCard from "./RestaurantCard";
import { foodData } from "../data/food";

function FoodAndRestaurant() {
  let moreFoodData = [
    {
      id: 16,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["local food", "snacks"],
    },
    {
      id: 17,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["healthy"],
    },
    {
      id: 18,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["jollof"],
    },
    {
      id: 19,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["pizza"],
    },
    {
      id: 20,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["burgers"],
    },
    {
      id: 21,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["traditional"],
    },
    {
      id: 22,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["pastries"],
    },
    {
      id: 23,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["seafood"],
    },
    {
      id: 24,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["burgers, pizza"],
    },
    {
      id: 25,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["healthy", "snacks"],
    },
    {
      id: 26,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["seafood", "pastries"],
    },
    {
      id: 27,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["local food", "jollof"],
    },
    {
      id: 28,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["pizza", "snacks"],
    },
    {
      id: 29,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["traditional", "seafood"],
    },
    {
      id: 30,
      name: "Rice",
      price: "100",
      img: "../images/pubg.jpg",
      tags: ["pizza", "burgers", "pastries"],
    },
  ];

  const [listElement, setListElement] = useState(null);
  const [data, setData] = useState(foodData);
  const [isMore, setIsMore] = useState(true);

  function listColorChange(ele : BaseSyntheticEvent) {
    let element = ele.target;
    setListElement((prevElement : null | HTMLLIElement) => {
      if (element.textContent.trim().toLowerCase() === "all") {
        setData(foodData);
      } else {
        let newFoods = foodData.filter((food) =>
          food.tags.includes(element.textContent.trim().toLowerCase())
        );
        setData(newFoods);
      }

      if (prevElement === null) {
        let first = document.querySelector("#first") as HTMLLIElement;
        first.style.color = "black";
        first.style.backgroundColor = "#eeeeee";
      } else {
        prevElement.style.color = "black";
        prevElement.style.backgroundColor = "#eeeeee";
      }
      element.style.color = "white";
      element.style.backgroundColor = "var(--primary-color)";
      return element;
    });
  }

  function displayMoreFoods() {
    let moreFoods = [...foodData, ...moreFoodData];
    setData(moreFoods);
    setIsMore(false);
  }

  function displayLessFoods() {
    setData(foodData);
    setIsMore(true);
    window.scrollTo(0, 600);
  }

  let restaurants = [
    {
      id: 1,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 2,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 3,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 4,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 5,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 6,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 7,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 8,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 9,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 10,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
    {
      id: 11,
      name: "avalon",
      location: "Akure, Ondo",
      img: "../images/redpanda3.jpg",
    },
  ];

  return (
    <div>
      <div className="foods-category-cont">
        <h2 className="orange">Explore most popular foods</h2>
        <ul className="foods-category">
          <li id="first" onClick={listColorChange}>
            All
          </li>
          <li onClick={listColorChange}>Local food</li>
          <li onClick={listColorChange}>Snacks</li>
          <li onClick={listColorChange}>Healthy</li>
          <li onClick={listColorChange}>Jollof</li>
          <li onClick={listColorChange}>Pizza</li>
          <li onClick={listColorChange}>Burgers</li>
          <li onClick={listColorChange}>Traditional</li>
          <li onClick={listColorChange}>Pastries</li>
          <li onClick={listColorChange}>Seafood</li>
        </ul>
      </div>

      <div className="foodcards-cont">
        {data.map((food) => {
          return <FoodCard key={food.id} { ...food } />;
        })}
      </div>

      {isMore && (
        <h3 className="orange view-more" onClick={displayMoreFoods}>
          View More
        </h3>
      )}

      {!isMore && (
        <h3 className="orange view-more" onClick={displayLessFoods}>
          View Less
        </h3>
      )}

      <div className="restaurant-container">
        <h3>Popular Restaurants</h3>
        <div className="restaurants-carousel">
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} { ...restaurant } />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FoodAndRestaurant;
