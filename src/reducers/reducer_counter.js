const init = 12;

// export default function(state = init, action) {
//   console.log("this is from counter reducer",state)
//   switch (action.type) {
//     case "INCREMENT":
//       if (action.payload === undefined) return state;
//       return action.payload;
//     default:
//       return state;
//   }
// }


export default function(state = null, action) {
  switch (action.type) {
    case "FOODS":
      console.log(action.payload)
      return action.payload;
    default:
      return state;
  }
};