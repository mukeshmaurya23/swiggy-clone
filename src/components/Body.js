import React, { useState, useEffect, useContext } from "react";
import { RestaurantList } from "../../config";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredRestaurntList, setFilteredRestaurntList] = useState([]);

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&page_type=DESKTOP_WEB_LISTING"
    );
    console.log(data);
    const dataJson = await data.json();
    setRestaurantList(dataJson?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurntList(dataJson?.data?.cards[2]?.data?.data?.cards);
  }
  //optional chaining to check if restaurantList is null or not and if it is null then return Shimmer
  // let menuItems = [];
  // for (var i = 0; i < 10; i++) {
  //   menuItems.push(<li>Item {i}</li>);
  // }

  console.log(filteredRestaurntList);

  return !restaurantList ? (
    <Shimmer />
  ) : (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        restaurantList={restaurantList}
        filteredRestaurntList={filteredRestaurntList}
        setFilteredRestaurntList={setFilteredRestaurntList}
        setRestaurantList={setRestaurantList}
      />

      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <div className="restaurant-list">
        {filteredRestaurntList?.length === 0 ? (
          <h2>No Restaurant Found</h2>
        ) : (
          filteredRestaurntList.map((item) => (
            <Link to={`/restaurant/${item.data.id}`} key={item.data.id}>
              <RestaurantCard {...item.data} />
              {/* <p> ID:{item.data.id}</p> */}
            </Link>
          ))
        )}

        {/* {filteredRestaurntList.length === 0 && (
          <h1 className="text-center">No Restaurant Found</h1>
        )} */}
      </div>
    </>
  );
};

export default Body;
