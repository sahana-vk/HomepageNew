import React from "react";
import CategoryInfo from "../../molecules/categoryInfo/CategoryInfo";
import "./style.css";
import { categoryData } from "../../Data";

function Category() {
  return (
    <div className="category-container">
      {categoryData.map((item, index) => {
        return (
          <CategoryInfo source={item.image} content={item.text} key={index} />
        );
      })}
    </div>
  );
}

export default Category;
