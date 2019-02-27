import { firebase } from "./initial";
export const signupp = async (email, password) => {
  console.log("pressed button null");
  var a = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      return "succeed";
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      return errorCode + errorMessage;
    });
  // the only way is return at last as a variable
  return a;
};
