import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAAXn_ooTy-DuZnDzUgRKrqRPOc5J0c3RI',
  authDomain: 'vue-firebase-sites-dd387.firebaseapp.com',
  projectId: 'vue-firebase-sites-dd387',
  storageBucket: 'vue-firebase-sites-dd387.appspot.com',
  messagingSenderId: '986438429278',
  appId: '1:986438429278:web:e77b153ba03e5faabc62cf',
}

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
