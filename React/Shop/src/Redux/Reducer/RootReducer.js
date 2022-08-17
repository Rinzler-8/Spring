import { combineReducers } from "redux";
import formUpdateStatus from "./FormUpdateReducer";
import ListAccount from "./ListAccountReducer";
import pageFilter from "./PaginationReducer";
import ListProduct from "./ListProductReducer";
import ListCategory from "./ListCategoryReducer";
import ListManufacturer from "./ListManufacturerReducer";

const RootReducers = combineReducers({
  ListAccountReducer: ListAccount,
  ListProductReducer: ListProduct,
  pageFilterReducer: pageFilter,
  ListCategoryReducer: ListCategory,
  ListManufacturerReducer: ListManufacturer,
  formUpdateReducer: formUpdateStatus,
});

export default RootReducers;
