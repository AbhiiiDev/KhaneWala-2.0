import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const ItemSection = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const fetchItem = async () => {
    const response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    setFoodCat(resData[1]);
    setFoodItem(resData[0]);

  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      {foodCat.length !== 0
        ? foodCat.map((data, index) => {
            return (
              <div>
                <div className="mx-3 m-3 font-bold text-3xl">{data.CategoryName}</div>
                <hr />
                <div className="m-2 grid lg:grid-cols-4 gap-1 md:grid-cols-3 sm:grid-cols-1 text-center sm:align-middle ">

               
                {foodItem.length !== 0
                  ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="flex ">
                            <Card foodItems={filterItems} />
                          </div>
                        );
                      })
                  : "no food items"
                  
                }
                 </div>
              </div>
            );
          })
        : "No data available"}
    </div>
  );
};

export default ItemSection;
