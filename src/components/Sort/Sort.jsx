import React from "react";
import "../../helper.css";
import style from "./Sort.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import Breadcrums from "../DetailsPage/Breadcrums";

const Sort = () => {
  return (
    <div className="container">
      <Breadcrums title="Home / Shirts" />
      <div className="flexed">
        <div className="">
          <strong>FILTERS</strong>
        </div>
        <div className="container">
          {/* <FontAwesomeIcon icon={faSearch} className="font-color"/> */}
          {/* <input className="padding" type="text" placeholder="Sort by..." /> */}

          <select name="Sort" id="sorting">
              <option value="sortby">Sort by : Recommendation</option>
              <option value="sortprice">Price: Low to high</option>
              
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
