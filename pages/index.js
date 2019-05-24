import Link from "next/link";
import Header from "../components/header";
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react'
import 'firebase/auth';


export default class Index extends React.Component {
  constructor(props){
    super(props)
    var firebaseConfig = {
      apiKey: "AIzaSyAue0Vxzk4yVKMMNnPJkGBgBQ_aWd9GZ5w",
      authDomain: "portfolio-ad3c8.firebaseapp.com",
      databaseURL: "https://portfolio-ad3c8.firebaseio.com",
      projectId: "portfolio-ad3c8",
      storageBucket: "portfolio-ad3c8.appspot.com",
      messagingSenderId: "630392712127",
      appId: "1:630392712127:web:65ae3805d24160ee"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var docRef = firebase.firestore().collection("Testing").doc("Raja");
  docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
  }

  render(){
  
    return (
      <main>
        <Header />
        <section>
          <Link href="/about">
            <a>Go to About Me</a>
          </Link>
        </section>
      </main>
    )
  }

}

