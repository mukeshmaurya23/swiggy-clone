import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../../config";
import Shimmer from "../Shimmer";
import cartContext from "../../../utils/CartContext";
import { addItemTocart } from "../../../utils/CartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurantMenuList, setRestaurantMenuList] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);
  const { addToCart } = useContext(cartContext);
  async function fetchMenuData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
    );
    const dataJson = await data.json();
    console.log(dataJson.data.cards);

    setRestaurantMenuList(dataJson.data.cards);
  }
  const dispatch = useDispatch();
  const additemTocartFood = (item) => {
    dispatch(addItemTocart(item));
  };
  //here null so if cant put this condition od himmer then i give error becuase
  //if restaurantMenuList is null then it will try to access restaurantMenuList[0] and it will give error
  //and until data is fetched  show shimmer
  return !restaurantMenuList ? (
    <>
      <Shimmer />
    </>
  ) : (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        Restaurant Menu
      </h1>
      <div className="restaurant-details">
        <div className="restaurant-info">
          <h2>{restaurantMenuList[0]?.card?.card?.info?.name}</h2>
          <h6>Restaurant ID:{restaurantMenuList[0]?.card?.card?.info?.id} </h6>

          <p>{restaurantMenuList[0]?.card?.card?.info?.city}</p>

          <h3>
            {restaurantMenuList[0]?.card?.card?.info?.cuisines?.join(", ")}
          </h3>
          <p>{restaurantMenuList[0]?.card?.card?.info?.areaName}</p>
          <p>{restaurantMenuList[0]?.card?.card?.info?.locality}</p>
          <h5>Rating</h5>
          <p>{restaurantMenuList[0]?.card?.card?.info?.avgRating}</p>
        </div>

        <div className="restaurant-image">
          <img
            src={
              IMG_URL +
              restaurantMenuList[0]?.card?.card?.info?.cloudinaryImageId
            }
            alt="restaurant"
          />
        </div>
      </div>

      <div className="menu-list">
        {restaurantMenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => (
            <div className="menu-item" key={item.id}>
              <img src={IMG_URL + item?.card?.info?.imageId} alt="" />
              <div className="menu-item-details">
                <h4>{item?.card?.info?.name} </h4>
                <p>{item?.card?.info?.description}</p>
                <p>₹{item?.card?.info?.price}</p>

                <p>
                  {item?.card?.info?.isVeg ? (
                    <span className="veg">Veg</span>
                  ) : (
                    <span className="non-veg">Non-Veg</span>
                  )}
                </p>
                <p>
                  <p>{item?.card?.info?.category}</p>
                </p>
                <button
                  className="add-to-cart"
                  onClick={() => additemTocartFood(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
