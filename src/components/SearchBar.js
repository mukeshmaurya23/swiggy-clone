import React, { useState } from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  restaurantList,
  setFilteredRestaurntList,
}) => {
  // const [demo, setDemo] = useState("false");

  const filteredData = (searchTerm, restaurantList) => {
    const data = restaurantList.filter((item) => {
      return item.data.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return data;
  };

  return (
    <>
      <div className="text-center m-2 p-3">
        <input
          type="text"
          placeholder="Search"
          className=" p-2 m-3"
          style={{
            width: "50%",
            height: "50px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            border: "1px solid #ccc",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="btn btn-primary"
          style={{
            outline: "none",
            height: "50px",
          }}
          onClick={() =>
            setFilteredRestaurntList(filteredData(searchTerm, restaurantList))
          }
          //onClick={() => setDemo("true")}
        >
          Search
        </button>
        {/* <h2>{demo}</h2> */}
      </div>
    </>
  );
};

export default SearchBar;
