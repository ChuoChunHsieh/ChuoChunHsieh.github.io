<template>
<!-- https://pictogrammers.github.io/@mdi/font/1.0.62/  -->
  <!-- <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
      

      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn> 
      
      <v-btn
        class="ma-2"
        text
        icon
        color="#EF6C00"
      >
        <v-icon>mdi-trophy-variant </v-icon>
      </v-btn> 

      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-file-document</v-icon>
      </v-btn>  

      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-ticket-account</v-icon>
      </v-btn>  

      

      <v-divider></v-divider>
      
       <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-star</v-icon>
      </v-btn>   
      
      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-checkbox-multiple-marked</v-icon>
      </v-btn>

      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-book-multiple</v-icon>
      </v-btn> 

      

      <v-divider></v-divider>

      <v-btn
        class="ma-2"
        text
        icon
        color="black"
      >
        <v-icon>mdi-comment-processing-outline</v-icon>
      </v-btn> 


      <v-btn
        text icon class="ma-2" 
        color="black" 
        to="Login_ing"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> 

    </v-navigation-drawer>

    <v-main> 
     
    </v-main>
  </v-app> -->
  <div class="mx-5">

    <div class="w-auto bg-emerald-200">
      <img src="../assets/LandPage_02.jpg">
    </div>

    <!-- <v-btn class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</v-btn>
    <button class="py-2 px-3 m-1 rounded-xl text-white  bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button> -->

    <!-- <hr>
      <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <hr> -->

     <!-- <div class="w-full bg-blue-900">wwww</div>
     <div class="w-80 bg-red-200"> ddd </div> -->
        <!-- Landing Page  

        Sketch 1
        <p5 :draw="draw1" @key-pressed="keyPressed"></p5>
        
        Sketch 2
        <p5 :draw="draw2"></p5>
        Press R to reset both sketches to black color.

        Sketch 2
        <p5 :draw="draw5"></p5>
 
        <div id="defaultCanvas0">  </div> -->

        <div class="w-auto bg-emerald-200  "> 
          <div class="ball-box "> 
            <ul class="white-ball">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li> 
              <li></li>
              <li></li>
              <li></li>
              <li></li> 
              <li></li>
              <li></li>
              <li></li> 
              <li></li> 
              <li></li>
              <li></li>
              <li></li>  
            </ul>
            <ul class="red-ball">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li> 
              <li></li>
              <li></li>
              <li></li> 
              <li></li> 
              <li></li>
              <li></li>
              <li></li> 
            </ul> 
          </div> 
        </div> 
      
  </div>  
</template>
 

<script> 

 



export default {
  
  data() {
    return {
      dialog: false,
      dialog2: false,

// windowWidt:800,
// windowHeight:600,
//       amplitude : 45, // Height of wave
//       xspacing : 16, // Distance between each horizontal location
//       dx  : "", // Value for incrementing x
//       angle : 0, // Start angle
//       w  : "", // Width of entire wave
//       period  : 500, // How many pixels before the wave repeats
//       yvalues : "", 
//       yvalues1: "", // Array to store yvalues 

//       state1: {
//                 color: 64
//               },
//               state2: {
//                 color: 180
//               },
    }
  },
  components: {
    p5: VueP5
  },
  methods: {
    draw1(sketch) {
      this.state1.color += 3;
      this.state1.color %= 255;
      sketch.background(this.state1.color);
    },
    draw2(sketch) {
      this.state2.color += 2;
      this.state2.color %= 255;
      sketch.background(this.state2.color);
    },
    keyPressed(keyCode) {
      if (keyCode == 82) {
        // 'r' key
        this.reset();
      }
    },
    reset() {
      this.state1.color = 0;
      this.state2.color = 0;
    }, 

    

  },
  mounted() {
    // this.go();
     
  }
}
</script>

<style scoped>
/* https://codepen.io/AnzilkhaN/pen/aXVOpE */

/* https://codepen.io/Shruti-Ag/pen/ZEEQBqB */


.ball-box {
	width: 50%;
	min-width: 820px;
	height: 95px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

  -moz-transform:rotate(65deg);
  -webkit-transform:rotate(65deg);
  -o-transform:rotate(65deg);
  -ms-transform:rotate(65deg);
  transform:rotate(65deg);
  
}
ul {
	display: flex;
	align-items: space-between;
	justify-content: space-around;
	padding: 0;
	margin: 0;
}
li {
	position: relative;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #fed7aa;
	list-style-type: none;

	opacity: 0;
	
	animation: 2s ease-in-out infinite;
	animation-name: upwards;
}
.red-ball li {
	background-color: #65a30d;
	animation-name: downwards;
}
li:nth-child(2) {
	animation-delay: .1s;
}
li:nth-child(3) {
	animation-delay: .2s;
}
li:nth-child(4) {
	animation-delay: .3s;
}
li:nth-child(5) {
	animation-delay: .4s;
}
li:nth-child(6) {
	animation-delay: .5s;
}
li:nth-child(7) {
	animation-delay: .6s;
}
li:nth-child(8) {
	animation-delay: .7s;
}
li:nth-child(9) {
	animation-delay: .8s;
}
li:nth-child(10) {
	animation-delay: .9s;
}
li:nth-child(11) {
	animation-delay: 1s;
}
li:nth-child(12) {
	animation-delay: 1.1s;
}
li:nth-child(13) {
	animation-delay: 1.2s;
}
li:nth-child(14) {
	animation-delay: 1.3s;
}
li:nth-child(15) {
	animation-delay: 1.4s;
}

li:nth-child(16) {
	animation-delay: 1.5s;
}
li:nth-child(17) {
	animation-delay: 1.7s;
}
li:nth-child(18) {
	animation-delay: 1.8s;
}

li:nth-child(19) {
	animation-delay: 1.9s;
}
li:nth-child(20) {
	animation-delay: 2.0s;
}
li:nth-child(21) {
	animation-delay: 2.1s;
}

li:nth-child(22) {
	animation-delay: 2.2s;
}
li:nth-child(23) {
	animation-delay: 2.3s;
}
li:nth-child(24) {
	animation-delay: 2.4s;
}

@keyframes upwards {
	from {
		opacity: 1;
		transform: translateY(0);
		z-index: 50;
	}
	50% {
		transform: translateY(125px)  scale(1.2);
	}
	to {
		opacity: 1;
		transform: translateY(0);
		z-index: 1;
	}
}
@keyframes downwards {
	from {
		opacity: 1;
		transform: translateY(0) scale(1.2);
		z-index: 1;
	}
	50% {
		transform: translateY(-125px);
	}
	to {
		opacity: 1;
		transform: translateY(0) scale(1.2);
		z-index: 50;
	}
}	 

</style>
