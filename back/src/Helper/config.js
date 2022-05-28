const firebase = require('@firebase/app').default;
require('@firebase/firestore');

// const firebaseConfig = {
//   apiKey: "AIzaSyBUgFALfLjQmROtsSSzLxLPDPAciz1LmnI",
//   authDomain: "dlance-d212d.firebaseapp.com",
//   // databaseURL: "https://dlance-d212d.firebaseio.com",
//   projectId: "dlance-d212d",
//   storageBucket: "dlance-d212d.appspot.com",
//   messagingSenderId: "811238203388",
//   appId: "1:811238203388:web:d283b3a61cc331c3519c79"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBiZodKRZPotf65zS3enr653WFN5KJ42YI",
  authDomain: "dlancemarket.firebaseapp.com",
  projectId: "dlancemarket",
  storageBucket: "dlancemarket.appspot.com",
  messagingSenderId: "50334683466",
  appId: "1:50334683466:web:3e67e501cd0e72ea2531b3",
  measurementId: "G-8PXE4BKKGQ"
};
firebase.initializeApp(firebaseConfig);


exports.firebase = firebase;
exports.database = firebase.firestore();

