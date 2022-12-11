import React from "react";
import Breadcrums from "./Breadcrums";
import "./Details.css";
import Style from "../../helper.css"
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import { useParams } from "react-router-dom";
import Pdata from "../Product/Pdata";

const Details = () => {

  const { detailslug } = useParams();
  // console.log(detailslug);
  return (
    <>
      {
        Pdata.map((value, index) => {

          if (value.id == detailslug) {
            var BreadcrumsTitle = "Home / Shirt / " + value.product
            return (
              <>
                <Breadcrums title={BreadcrumsTitle} />
              </>
            )
          }
        })
      }
      <div className="container">
        <div className="details-outer-wrapper">
          {
            Pdata.map((value, index) => {

              if (value.id == detailslug) {
                console.log(value);
                return (
                  <>
                    <ProductImages key={index} imgMain={value.imgscr} img2={value.img2} img3={value.img3} img4={value.img4} />

                    <ProductDetails productDescription={value.description} productType={value.product} productName={value.pname} productPrice={value.price} size={value.size} value={value} />
                  </>
                )
              }
            })
          }
        </div>
      </div>
    </>
  );
};

export default Details;
