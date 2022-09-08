import * as Types from "../Contant/CategoryActionType";

var initialState = [];

const ListCategory = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CATEGORY_LIST:
      let listCategoryAPI = action.payload;
      return listCategoryAPI;
    default:
      return [...state];
  }
};

export default ListCategory;
