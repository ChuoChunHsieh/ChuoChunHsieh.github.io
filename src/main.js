import Vue from 'vue';
import App from './App.vue';
import * as firebase from 'firebase';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { firestorePlugin } from 'vuefire'

// import "@/assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

const configOptions = { 
  
  apiKey: "AIzaSyDnVquQGd724SE39PdkZ1vs49Tki2Joums",
  authDomain: "a8ask-4c2de.firebaseapp.com",
  databaseURL: "https://a8ask-4c2de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "a8ask-4c2de",
  storageBucket: "a8ask-4c2de.appspot.com",
  messagingSenderId: "424321311432",
  appId: "1:424321311432:web:e1137966ad5bb04f853bfd",
  measurementId: "G-25W3XV40CH"
};

firebase.initializeApp(configOptions);
export default firebase.database();


let app;
 
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

import Swal from 'sweetalert2';
window.Swal = Swal;




import dayjs from 'dayjs';
Vue.prototype.dayjs = dayjs;

import VueMarkdown from 'markdown-it-vue'
Vue.use(VueMarkdown);

// https://markdown-it.github.io/markdown-it/

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/fetchUser', user);
  if(!app) {
    new Vue({
      store,
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app');
  }
});
