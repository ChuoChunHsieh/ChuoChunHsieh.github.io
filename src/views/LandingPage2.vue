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
  <div class="mx-5" color="#FFC400">

    <div class="w-auto bg-emerald-600">ddd</div>

    <v-btn class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ...">Subscribe</v-btn>
    <button class="py-2 px-3 m-1 rounded-xl text-white  bg-blue-500 shadow-lg shadow-blue-500/50 ...">Subscribe</button>

    <hr>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <hr>

     <div class="w-full bg-blue-900">wwww</div>
     <div class="w-80 bg-red-200"> 


       ssss
     </div>
        <!-- Landing Page  

        Sketch 1
        <p5 :draw="draw1" @key-pressed="keyPressed"></p5>
        
        Sketch 2
        <p5 :draw="draw2"></p5>
        Press R to reset both sketches to black color.

        Sketch 2
        <p5 :draw="draw5"></p5>
 
        <div id="defaultCanvas0">  </div> -->
 
      
  </div>  
</template>
 

<script> 

 



export default {
  
  data() {
    return {
      dialog: false,
      dialog2: false,

windowWidt:800,
windowHeight:600,
      amplitude : 45, // Height of wave
      xspacing : 16, // Distance between each horizontal location
      dx  : "", // Value for incrementing x
      angle : 0, // Start angle
      w  : "", // Width of entire wave
      period  : 500, // How many pixels before the wave repeats
      yvalues : "", 
      yvalues1: "", // Array to store yvalues 

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
    }
    setup(){
	createCanvas(windowWidth, windowHeight);
	w = windowHeight*0.8;
	dx = (TWO_PI / period) * xspacing;
	yvalues = new Array(floor(w / xspacing));
	yvalues1 = new Array(floor(w / xspacing));
},
    windowResized(){
  resizeCanvas(windowWidth, windowHeight);
},
    update(){
	translate(0, 120);
	for(let x = 0; x < yvalues.length; x++){
		fill('#f70');
		stroke('#f70');
    strokeWeight(0.1);

		// Interchange X and Y position
		ellipse(width/2 + yvalues[x], x * xspacing, 16, 16);
		line(width/2, x*xspacing, width/2 + yvalues[x], x * xspacing);
	}
	for(let x = 0; x < yvalues1.length; x++){
		fill('#17f');
		stroke('#17f');
    strokeWeight(0.1);

		// Interchange X and Y position
		ellipse(width/2 + yvalues1[x], x * xspacing, 16, 16);
		line(width/2, x*xspacing, width/2 + yvalues1[x], x * xspacing);
	}
},
    calculate(){
    angle += 0.02;
    let x = angle;
    for(let i = 0; i < yvalues.length; i += 1){
      yvalues[i] = sin(x*2) * amplitude;
      yvalues1[i] = sin(2*PI - x*2) * amplitude;
      x += dx;
    }
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


</style>
