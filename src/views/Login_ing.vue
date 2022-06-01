
<template>
  <v-app style="background: linear-gradient(to left, '#C4C4C4', '#F0F0F0');">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12"
              sm="8"
              md="4">
            <v-card class="mx-auto" shaped elevation="20">

            <v-toolbar color="#BDB873" dark flat>
              <v-toolbar-title class="headline">登入頁面</v-toolbar-title>
            </v-toolbar>

            <v-card-text> 
              <span class= "text-gray-100 text-right text-xs  "> {{ uuuser.email }} 已登入網站後台。請開始修改內容 </span>

                <v-form ref="form" v-bind:disabled="disabled" lazy-validation>
                  <v-text-field type="text" v-model="email"  label="帳號" :rules="emailRules" prepend-icon="mdi-at" /> 
                  <v-text-field :type="showPassword ? 'text' : '密碼'" v-model="password"  label="密碼" :rules="passwordRules" prepend-icon="mdi-lock" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="showPassword = !showPassword" /> 
                </v-form>

            <!-- <p class="red--text">{{ error }} </p> -->

            </v-card-text>

            <v-card-actions align="center" justify="center">
              <v-col>
                 <v-btn
                    outlined
                    color="#7F7D63"
                    text
                    to="/"
                  >
                    返回首頁
                  </v-btn> 
              </v-col> 


              <!-- <v-col>
                 <v-btn
                    outlined
                    color="#7F7D63"
                    text
                    to="/fgtpw"
                  >
                    忘記密碼
                  </v-btn> 
              </v-col>  -->
              

              <v-col>
                 <v-btn
                    outlined
                    color="#7F7D63"
                    text
                    @click="chk"
                  >
                    註冊帳號
                    
                  </v-btn> 
                  <v-btn
                    outlined
                    color="#7F7D63"
                    text
                    @click="sendEmail"
                  >
                   更改密碼
                    
                  </v-btn> 
                   <!-- <v-btn
                    outlined
                    color="#7F7D63"
                    text
                    @click="sendV"
                  >
                   發驗證信
                    
                  </v-btn>  -->
                  
                  
 
              </v-col> 


              <v-col>
                <v-btn dark v-bind:disabled="disabled"  block @click="validate" color="#7F7D63">
                  <span v-show="!disabled">登入</span>
                  <span v-show="disabled">
                    <v-progress-circular indeterminate color="#7F7D63"></v-progress-circular>
                  </span>
                </v-btn> 
              </v-col>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase';

// import { initializeApp } from 'firebase/app';
// import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default {
  data() {
    return {

      errorCode:'',
      errorMessage :'',


      disabled: false,
      uuuser:'',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      showPassword: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      error: ''
    }
  },  
  methods: {  
    validate() {
      if(this.$refs.form.validate()) {
        this.disabled = true;

        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.disabled = false;
              this.$router.replace({ path: "/Blog_v1" });
            })
            .catch(err => {
              this.disabled = false;
              this.error = err.message;
            });
      }
    },
    chk(){

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then(userData => {
        userData.user.sendEmailVerification();
            alert(this.email + " email verification sent to user");
            // console.log(userData);
    })
    .catch(err => {
        // console.log(err);
        alert(this.email + err);
    });

		// 	 firebase.auth()
    // .createUserWithEmailAndPassword(this.email, this.password)
    // .then(function(user){
    //   if (user != null){
    //     user.sendEmailVerification();
    //   }
 
      

      // if(user && user.emailVerified === false){
      //   user.sendEmailVerification().then(function(){
      //     alert( this.email + "email verification sent to user");
      //   });
      // }
    // }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;

      // alert(errorCode);
    //   alert(errorMessage);
      
    // }); 
  } ,
    sendEmail() {
       
        // const app = initializeApp(environment.firebaseConfig);
       
        firebase.auth().sendPasswordResetEmail(this.email)
          .then(() => {
            // Password reset email sent!
             alert((this.email + "連結已由 E-mail 已發送，若無再主要收件匣收到通知，請注意垃圾信件匣"))
          })
          .catch((error) => {
             alert((error.code + '||'  +error.message  ));
            // this.errorCode = error.code;
            // this.errorMessage = error.message;
          });
    },
    sendV() {
       
        // const app = initializeApp(environment.firebaseConfig);
       
        firebase.auth().sendEmailVerification(this.email)
          .then(() => {
            // Password reset email sent!
             alert((this.email + "驗證信已由 E-mail 已發送，若無再主要收件匣收到通知，請注意垃圾信件匣"))
          })
          .catch((error) => {
             alert((error.code + '||'  +error.message  ));
            // this.errorCode = error.code;
            // this.errorMessage = error.message;
          });
    }
    
  },
  mounted() {  
		 var user = firebase.auth().currentUser;

			if (user) {
			// User is signed in.
			this.uuuser = user;
			} else {
			// No user is signed in.
			} 

      // if(this.uuuser != null)
      // {  window.location.href='https://chuochunhsieh.github.io/Blog_v1';  }
 	}
}
</script>
