import Counter from "./reducer_counter";
import Signin from "./reducer_signin";
import { combineReducers } from "redux";
console.log("root red")
const rootReducer = combineReducers({
  number: Counter,
  user: Signin
});
export default rootReducer;