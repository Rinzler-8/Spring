import { combineReducers } from "redux";
import formDeactivateStatus from "./FormDeactivateReducer";
import ListAccount from "./ListAccountReducer";
import pageFilter from "./PaginationReducer";
import ListCategory from "./ListCategoryReducer";
import ListManufacturer from "./ListManufacturerReducer";

const RootReducers = combineReducers({
  ListAccountReducer: ListAccount,
  pageFilterReducer: pageFilter,
  ListCategoryReducer: ListCategory,
  ListManufacturerReducer: ListManufacturer,
  formDeactivateReducer: formDeactivateStatus,
});

export default RootReducers;
