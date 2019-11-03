// import Counter from "./reducer_counter";
import Signin from "./reducer_signin";
import foodData from './reducer_counter';
import { combineReducers } from "redux";
console.log("root red")
const rootReducer = combineReducers({
  // number: Counter,
  user: Signin,
  foodData: foodData
});
export default rootReducer;