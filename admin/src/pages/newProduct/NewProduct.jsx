import { useState } from "react";
import { createProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import "./newProduct.css";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  // categories is being split out as it is in array
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // console.log(inputs);

  const handleCategories = (e) => {
    setCategories(e.target.value.split(","));
  };
  // console.log(categories);

  const handleClick = (e) => {
    e.preventDefault();
    const product = { ...inputs, categories: categories };
    createProduct(product, dispatch);
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Product Categories</label>
          <input
            name="categories"
            type="text"
            placeholder="sports bra, women"
            onChange={handleCategories}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Harper sports bra"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="description"
            type="text"
            placeholder="description.."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="http://"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="56"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Inventory</label>
          <select name="inventory" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
