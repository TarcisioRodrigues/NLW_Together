//Configurando e integrando o FireBase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MENSAGING_SEND_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyBGMkFBvMDB9Pypg_Aw0gdcdyCyrZY9jac',
  authDomain: 'letmeask-febdd.firebaseapp.com',
  databaseURL: 'https://letmeask-febdd-default-rtdb.firebaseio.com',
  projectId: 'letmeask-febdd',
  storageBucket: 'letmeask-febdd.appspot.com',
  messagingSenderId: '372044142434',
  appId: '1:372044142434:web:32f3c0bb60183b0db3be3b',
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const database = firebase.database();

export { firebase, auth, database };
