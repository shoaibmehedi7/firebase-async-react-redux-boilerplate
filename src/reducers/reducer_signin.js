// import { signupp } from "../Firebase/SignupFireAuth"
var init = null;
// init = signupp("this@gmail.com", "11111111")
export default function(state="", action) {
  switch (action.type) {
    case "SIGNIN":
      console.log("this is from signin reducer", action);
      if (action.payload === undefined) return state;
      return action.payload;
    default:
      return "default Value";
  }
}
