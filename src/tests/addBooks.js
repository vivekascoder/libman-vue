import firebase from 'firebase/app'
import 'firebase/firestore'
import {firebaseConfig} from '../firebaseConfig.js'

var firebaseApp = firebase.initializeApp(firebaseConfig)
var db = firebase.firestore(firebaseApp)