import React from "react";

const NotUSEIndex = () => {
  const fruitsDummy = [
    {
      id: 1,
      name: "Apple",
      price: 100,
    },
    {
      id: 2,
      name: "Orange",
      price: 200,
    },
    {
      id: 3,
      name: "Banana",
      price: 300,
    },
  ];
  const [fruits, setFruits] = React.useState(fruitsDummy);
  const addNewFruits = () => {
    const newFruits = {
      id: 4,
      name: "Mango",
      price: 400,
    };
    setFruits([newFruits, ...fruits]);
  };
  return (
    <div>
      <h2>
        <u>Not USE Index</u>
      </h2>
      <h2>Hello</h2>
      {fruits.map((item, index) => {
        return (
          <div key={index}>
            {index}__{item.name}__{item.price}
          </div>
        );
      })}
      <button onClick={addNewFruits}>Add</button>
    </div>
  );
};

export default NotUSEIndex;
