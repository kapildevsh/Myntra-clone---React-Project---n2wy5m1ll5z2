import React, { useState } from "react";
import "../../helper.css";
import style from "./Filter.css";
import Pdata from "../Product/Pdata";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/features/data";

const Filter = () => {
//   const filterData = useSelector((state) => state.appData.filters);
//   const categoryData = useSelector((state) => state.appData.categories);
//   const brandData = useSelector((state) => state.appData.brands);
const [brands, setBrands] = useState([]);
const [categories, setCategories] = useState([]);

const selectBrand = (brand) => {
	if(brands.includes(brand)){
		let newBrand = brands.filter(brandItem => brand!== brandItem);
		setBrands(newBrand);
		dispatch(filter({type: 'brand', value: newBrand}))
	}else{
		// setBrands(brands.push(brand))
		setBrands([...brands, brand])
		dispatch(filter({type: 'brand', value: [...brands, brand]}))
	}
}
const selectCategory = (category) => {
	if(categories.includes(category)){
		let newBrand = categories.filter(brandItem => category!== brandItem);
		setCategories(newBrand);
		dispatch(filter({type: 'category', value: newBrand}))
	}else{
		// setBrands(brands.push(brand))
		setCategories([...categories, category])
		dispatch(filter({type: 'category', value: [...categories, category]}))
	}
}

  const dispatch = useDispatch();
  return (
    <div className="filter-left-content">
      <div className="position-fixed left-content-border-new">
        <div className="filter-wrapper">
          <div className="container">
            <div className="label-space">
              <input
                type="radio"
                name="gender"
                onClick={() => dispatch(filter({type: 'filter', value:'men'}))}
              />
              <label>Men</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'women'}))}

              />
              <label>Women</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'boys'}))}

              />
              <label>Boys</label>
              <br />
              <input
                type="radio"
                name="gender"
				onClick={() => dispatch(filter({type: 'filter', value:'girls'}))}

              />
              <label>Girls</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Categories</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
				   selectCategory('shirt')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  }
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
				   selectCategory('sleepShirt')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  }
              />
              <label>Sleep Shirts</label>
              <br />
              <input
                type="checkbox"
				onClick={() => {
				   selectCategory('dogShirt')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  }
              />
              <label>Dog shirts</label>
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Brands</h3>
            <div className="label-space">
              <input type="checkbox" onClick={() => {
				//   debugger
				  selectBrand('zara')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  } />
              <label>Zara</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('parx')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  } />
              <label>Parx</label>
              <br />
			  <input type="checkbox" onClick={() => {
				   selectBrand('roadster')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  } />
              <label>Roadster</label>
              <br />
              <input type="checkbox" onClick={() => {
				   selectBrand('harvard')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  } />
              <label>Harvard</label>
              <br />
			  <input type="checkbox" onClick={() => {
				   selectBrand('wrong')
				//   dispatch(filter({type: 'brand', value: brands}))
				  }
				  } />
              <label>Wrogn</label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
