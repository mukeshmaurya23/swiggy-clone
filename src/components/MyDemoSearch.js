import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
const MyDemoSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurntList, setFilteredRestaurntList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&page_type=DESKTOP_WEB_LISTING"
    );
    const dataJson = await data.json();
    setRestaurantList(dataJson?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurntList(dataJson?.data?.cards[2]?.data?.data?.cards);
  };

  const filterData = (searchTerm, restaurantList) => {
    return restaurantList.filter((item) =>
      item.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return restaurantList.length === 0 ? (
    <div>Loading....</div>
  ) : (
    <div>
      <input
        type="text"
        placeholder="Search"
        className=" p-2 m-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() =>
          setFilteredRestaurntList(filterData(searchTerm, restaurantList))
        }
      >
        Search
      </button>
      {filteredRestaurntList.map((item) => (
        <Link to={`/restaurant/${item.data.id}`} key={item.data.id}>
          <RestaurantCard {...item.data} />
          {/* <p> ID:{item.data.id}</p> */}
        </Link>
      ))}
    </div>
  );
};

export default MyDemoSearch;
