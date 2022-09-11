import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'
import firebaseConfig from '../../firebaseConfig';
import { getDatabase, ref, child, get, set } from "firebase/database";

//여기서 firebaseConfig 다른 곳에서 불러와야 되니까 위에서 import도 해줘야한다. 
firebase.initializeApp(firebaseConfig);

//$firebase 는 firebase.js 를 전역적으로 쓸 수 있게 프로토타입으로 만들어  줄 것이다.
Vue.prototype.$firebase = firebase;
Vue.prototype.$firebasedb = getDatabase();

const dbRef = ref(getDatabase());
// writeUserData('hello', 'user', 'imcheong001@gmail.com', '/we/wer')

// function writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
  

getData(); 

function getData() {
    get(child(dbRef, `/`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
  