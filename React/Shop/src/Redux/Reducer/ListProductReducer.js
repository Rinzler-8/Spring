import * as Types from "../Contant/ProductActionType";

var initialState = [];

const ListProduct = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCT_LIST:
      console.log("payload: ", action.payload);
      // let listProductAPI = action.payload;
      // return listProductAPI;
      state = action.payload;
      return [...state];
    case Types.DELETE_PRODUCT:
      let idDel = action.payload;
      let listProductState = state;

      let indexDel = listProductState.findIndex((product) => product.id === idDel);
      listProductState.splice(indexDel, 1);

      return listProductState;
    default:
      return [...state];
  }
};

export default ListProduct;
