import * as Types from "../Contant/ManufacturerActionType";

var initialState = [];

const ListManufacturer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_MANUFACTURER_LIST:
      let listManufacturerAPI = action.payload;
      return listManufacturerAPI;
    default:
      return [...state];
  }
};

export default ListManufacturer;
