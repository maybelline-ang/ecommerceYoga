import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductSuccess,
  getProductFailure,
  getProductInitial,
  deleteProductInitial,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductInitial,
  updateProductSuccess,
  updateProductFailure,
  createProductInitial,
  createProductSuccess,
  createProductFailure,
} from "./productRedux";

//////////// LOGIN ////////////////////////////
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//////////////// GET /////////////////////////
export const getProducts = async (dispatch) => {
  dispatch(getProductInitial());
  try {
    const response = await publicRequest.get("/products");
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

/////////////////// DELETE /////////////////////////////
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductInitial());
  try {
    // ** commenting out during demo so that it wouldnt be deleted from dB ** //
    // const response = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

///////////////////// UPDATE //////////////////////////
export const updateProduct = async (id, product, dispatch) => {
  console.log("product", JSON.stringify(product));

  dispatch(updateProductInitial());
  try {
    const response = await userRequest.put(`/products/${id}`, product);
    console.log(response);
    dispatch(updateProductSuccess({ id: id, product: product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

/////////////////// CREATE /////////////////////////////
export const createProduct = async (product, dispatch) => {
  dispatch(createProductInitial());
  try {
    const response = await userRequest.post(`/products`, product);
    dispatch(createProductSuccess(response.data));
  } catch (error) {
    dispatch(createProductFailure());
  }
};
