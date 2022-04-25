import React, { useState, useContext } from "react";

import Card from "./Card";
import { GeneralContext } from "../context//GeneralContext";

const Products = ({ handleClick }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { allProducts } = useContext(GeneralContext);

  let clothesCategories = [
    "all",
    ...new Set(allProducts.map((item) => item.category)),
  ];
  const filterResult = (catItem) => {
    const result = allProducts.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="home-page">
        <input
          className="search-btn"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="category">
          {clothesCategories.map((clothesCat) => {
            return (
              <button className="btn" onClick={() => filterResult(clothesCat)}>
                {clothesCat}
              </button>
            );
          })}
        </div>
      </div>
      <section className="products">
        {data.length === 0
          ? allProducts
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.category.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  console.log(val, "val");

                  return val;
                }
              })
              .map((item) => (
                <Card key={item.id} handleClick={handleClick} item={item} />
              ))
          : data
              // eslint-disable-next-line array-callback-return
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.category.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  console.log(val, "val");

                  return val;
                }
              })
              .map((item) => (
                <Card key={item.id} handleClick={handleClick} item={item} />
              ))}
      </section>
    </>
  );
};

export default Products;
