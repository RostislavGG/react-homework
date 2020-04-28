import { combineReducers } from "redux";
import userReducer from "./UserReducer/userReducer";
import recipeReducer from "./ReceipeReducer/recipeReducer";

const rootReducer = combineReducers({
  users: userReducer,
  recipes: recipeReducer
});

export default rootReducer;
