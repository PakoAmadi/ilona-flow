// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

Vue.use(VueRouter);

firebase.initializeApp({
  apiKey: "AIzaSyBrNV4qaZF3deMGNK09bFLsS88B7bjiVLM",
  authDomain: "ilona-flower.firebaseapp.com",
  databaseURL: "https://ilona-flower.firebaseio.com",
  projectId: "ilona-flower",
  storageBucket: "ilona-flower.appspot.com",
  messagingSenderId: "1049054573263",
  appId: "1:1049054573263:web:76c7ef156b7dffed9a7dba"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  app = new Vue({
    el: '#app',
    render: h => h(App),
    router
  });
})

// Configure router
const router = new VueRouter({
    routes,
    mode: 'history'
});

