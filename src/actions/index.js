import { signupp } from "../Firebase/SignupFireAuth";
import { firebase } from "../Firebase/initial";

var root = firebase.firestore();


var init = null;



export function counter() {
  console.log("on action : ");
  return {
    type: "INCREMENT",
    payload: "number"
  };
}

// async componentDidMount() {
//   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
//   const json = await response.json();
//   this.setState({ data: json });
// }

var obj = {
  email: "email",
  password: "asfdds"
};
// firebase async
export const signinAction = async obj => {
  var errorMessage = "emnei";
  let response = await firebase
    .auth()
    .createUserWithEmailAndPassword(obj.email, obj.password)
    .then(function() {
      console.log("succeed");
    })
    .catch(function(error) {
      var errorCode = error.code;
      errorMessage = error.message;
      console.log("inside sighnup auth ", errorCode, errorMessage);
    });

  return {
    type: "SIGNIN",
    payload: errorMessage
  };
};

// another way of async call firebase
export function signinActiondemoAlter(signinObj) {
  init = signupp("this@gmail.com", "11111111")
  return {
    type: "SIGNIN",
    payload: init
  };
}


export const fetchAndReturnFoods = async () => {
	var data = [];
	try {
		await root.collection("foods").get().then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				data.push(doc.data());
			});
		});
		return {
			type: "FOODS",
			payload: data
		};
	} catch (error) {
		if (!error.response) {
			throw error;
		} else {
			throw error;
		}
	}
};


