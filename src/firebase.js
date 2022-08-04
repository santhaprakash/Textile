import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDOJlvgdXZrBas1dxoxyq8InXhwv6w5_vo",
    authDomain: "textile-948ef.firebaseapp.com",
    databaseURL: "https://textile-948ef-default-rtdb.firebaseio.com",
    projectId: "textile-948ef",
    storageBucket: "textile-948ef.appspot.com",
    messagingSenderId: "781817560075",
    appId: "1:781817560075:web:ce395baa4039f8681fdb0e",
    measurementId: "G-PN2PSF1ZJQ"
  };

  const app = initializeApp(firebaseConfig);

  export const db=getFirestore();
  export const user=collection(db,'manager');
  export const product=collection(db,'product')
  export const client=collection(db,'user');
  export const cart=collection(db,'cart');
  export const order=collection(db,'orders');

  