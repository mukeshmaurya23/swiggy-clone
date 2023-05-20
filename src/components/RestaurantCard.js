import React from "react";
import { IMG_URL } from "../../config";

const RestaurantCard = ({
  name,
  address,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
}) => {
  return (
    <>
      {/* <div class="card ">
        <img
          className="imgcard"
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="Sample photo"
        />
        <div class="card-content">
          <h3>{name}</h3>
          <p>{address}</p>
          <p>{cuisines.join(", ")}</p>
          <button className="btn">Order Now</button>
        </div>
      </div> */}

      <section class="main-content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="food-card">
                <div class="food-card_img">
                  <img
                    style={{ height: "200px", width: "320px" }}
                    src={IMG_URL + cloudinaryImageId}
                    alt=""
                  />
                  <a href="#!">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.578c-1.97 0-3.733.684-5 1.795C2.733 2.262 1.97 1.578 0 1.578c1.333 1.333 2.598 2.42 3.801 3.197a.5.5 0 0 0 .598 0C5.402 4.998 6.667 3.91 8 2.578c1.333 1.333 2.598 2.42 3.801 3.197a.5.5 0 0 0 .598 0C13.402 4.998 14.667 3.91 16 2.578c-1.97 0-3.733.684-5 1.795-1.267-1.11-3.03-1.795-5-1.795z" />
                    </svg>
                  </a>
                </div>
                <div class="food-card_content">
                  <div class="food-card_title-section">
                    <a
                      href="#"
                      class="food-card_title"
                      style={{
                        fontSize: "16px",
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                    >
                      {name}
                    </a>
                    <a
                      href="#"
                      class="food-card_author"
                      style={{
                        fontSize: "12px",
                        color: "#686b78",
                        fontWeight: "500",
                        lineHeight: "1.5",
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                      }}
                    >
                      {cuisines.join(", ")}
                    </a>
                  </div>
                  <div class="food-card_bottom-section">
                    <div class="space-between">
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#686b78",
                          fontWeight: "500",
                          lineHeight: "1.5",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {address}
                      </div>
                    </div>
                    <hr />
                    <div class="space-between">
                      <div class="food-card_price">
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#686b78",
                            fontWeight: "500",
                            lineHeight: "1.5",
                          }}
                        >
                          {costForTwoString}{" "}
                        </span>
                      </div>
                      <div class="food-card_order-count">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <button
                              class="btn btn-outline-secondary minus-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-dash"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M2.5 7.5A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                              </svg>
                            </button>
                          </div>
                          <input
                            type="text"
                            class="form-control input-manulator"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            value="0"
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-secondary add-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-plus"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RestaurantCard;
