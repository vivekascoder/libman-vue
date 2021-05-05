import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import {firebaseConfig} from '@/.env'
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseApp = firebase.initializeApp(firebaseConfig)
var db = firebase.firestore(firebaseApp)

let app
firebase.auth().onAuthStateChanged( user => {
  if (!app) {
    app = createApp(App)
    app.use(router).mount('#app')
  }
})


export {db}
