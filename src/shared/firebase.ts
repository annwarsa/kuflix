import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });

const firebaseConfig = {
  apiKey: "AIzaSyBkedJtDg6BjLpF06MD6_dWJQ9M1RWOoBE",
  authDomain: "fir-flix-4ac4c.firebaseapp.com",
  projectId: "fir-flix-4ac4c",
  storageBucket: "fir-flix-4ac4c.appspot.com",
  messagingSenderId: "48497898427",
  appId: "1:48497898427:web:7757b80a485e6288fcca9e",
  measurementId: "G-8VTFFL7BN6"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBkedJtDg6BjLpF06MD6_dWJQ9M1RWOoBE",
//   authDomain: "fir-flix-4ac4c.firebaseapp.com",
//   projectId: "fir-flix-4ac4c",
//   storageBucket: "fir-flix-4ac4c.appspot.com",
//   messagingSenderId: "48497898427",
//   appId: "1:48497898427:web:7757b80a485e6288fcca9e",
//   measurementId: "G-8VTFFL7BN6"
// };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
