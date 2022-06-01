<template>

 <!-- <v-app style="background: linear-gradient(to left, '#C4C4C4', '#F0F0F0');">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12"
              sm="8"
              md="4">
            <v-card class="mx-auto" shaped elevation="20">

            <v-toolbar color="#BDB873" dark flat>
              <v-toolbar-title class="headline">密碼重設</v-toolbar-title>
            </v-toolbar>

            <v-card-text> 

               <p class="red--text">{{ error }} </p>

                <form @submit.prevent="forgetPassword">
                     

                    <div class="form-group">
                      

                        <v-text-field 
                            outlined 
                            prepend-icon="mdi-at"  
                            type="email" 
                            label=" 系統將發信 請查看您的信箱以重設密碼 "
                            placeholder="請填入 帳號信箱"
                            class="m-3 form-control form-control-lg" 
                            v-model="user.email" >
                        </v-text-field>
                    </div>  
                </form> 

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


              <v-col>
                 <v-btn type="submit" dark  color="#7F7D63" class="btn btn-dark btn-lg btn-block"> 發送 </v-btn>
              </v-col>  
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>  -->

    <div class=""> 
        <form @submit.prevent="forgetPassword">
            <h3>Forgot Password</h3> 
            <div class="form-group">
                <label>Email</label>
                <v-text-field outlined type="email" class="form-control form-control-lg" v-model="user.email" ></v-text-field>
            </div>

            <v-btn type="submit" class="btn btn-dark btn-lg btn-block">Reset password</v-btn>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: {   
        email: ''
      }
    };
  },
  methods: {
    forgetPassword() {
        firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
            alert('請查看'+ this.user.email+'的信箱 以重設密碼')
            this.user = {   
              email: ''
            }
        }).catch((error) => {
          alert(error)
        })
    }
  }
};
</script>