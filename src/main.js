import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB-tuSDXS-E2Vzjsh-7uKGpHWosQhEneQI",
  authDomain: "vue-auth-example-d4dc9.firebaseapp.com",
  projectId: "vue-auth-example-d4dc9",
  storageBucket: "vue-auth-example-d4dc9.appspot.com",
  messagingSenderId: "255968236479",
  appId: "1:255968236479:web:ad5f68616493593c98c70a"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
