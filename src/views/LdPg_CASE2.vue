<template>
   
  <div class=" bg_Img mdf_font" > 
	  
<!-- https://github.com/Orlandster/vue-typed-js --> 


		<div class="grid sm:grid-cols-5 md:grid-cols-8 gap-0.5 "> 
			<div class="col-span-6 ml-10"> 
				<!-- class="text-xs" -->
				<div class="qta_mdf_font content-center mt-10 p-4">
					<blockquote  >The man who comes back through the door in the wall will never be quite the same as the man who went out.</blockquote>
						<cite  >Aldous Huxley</cite>
				</div>

				<div class="col-span-3">
					<!-- <div>
						<div class=".d-none .d-sm-flex">
							仅在 xs 大小时隐藏
						</div>

						<div class=".d-none .d-md-flex .d-lg-none">
							仅在 md 大小时可见
						</div>

						
						<div class="d-none d-lg-block">
							hide on screens smaller than lg
						</div>
					</div> -->

					

					<v-card-title>個人簡介</v-card-title> 
					<v-card-text>
						<v-row
							align="center"
							class="mx-0"
						> 
						{{  uDat[0].intro}}   
						</v-row>
					</v-card-text>
				</div>
				<div class="col-span-3"></div>
				<div class="col-span-3">  
					<v-card-title>最新訊息</v-card-title> 
					<v-card-text>
						<v-row
							align="center"
							class="mx-0"
						>
						{{  uDat[0].news }}  
						</v-row>
					</v-card-text> 
				</div>
				<div class="col-span-5"></div>
				<div class="col-span-5"> 
					<v-card-title>
						熱衷議題
	
						<div class="flex justify-start">
							<v-card-actions>
								<v-btn
									outlined
									color="#6D8B74"
									text
									to="introList_CASE1"
									class=" animate-bounce "
								>
									了解,研究內容
								</v-btn>  
							</v-card-actions>

							<v-card-actions>
								<v-btn
									outlined
									color="#6D8B74"
									text
									to="studyList_CASE1"
									class=" animate-bounce "
								>
									抽 一篇文章
								</v-btn>   
							</v-card-actions> 
						</div>
					</v-card-title> 
					<v-card-text>  
						<div>{{  uDat[0].nt1 }}  {{  uDat[0].nt2 }}  </div> 
					</v-card-text> 
				</div>
				<div class="col-span-1"></div> 
			</div>

			<div class="col-span-2 h-screen">
				<div class="d-none d-lg-block">

					<div class="pt-12 flex justify-around">
						<!-- <div class="px-1  sx:text-base text-xl font-black text-red-600">[</div> -->
							<div class=" ">
								<vue-typed-js 
								:strings=j
								:loop="true" 
								:typeSpeed="20" 
								> 
									<h1 class="-rotate-12 typing text-gray-400 sx:text-base text-xl font-black"></h1>
								</vue-typed-js>
							</div>
						<!-- <div class="px-1 sx:text-base text-xl font-black text-red-600">]</div> -->
					</div> 
					<div class="pt-36 flex justify-around">
						<!-- <div class="px-1 sx:text-base text-xl font-black text-red-600">[</div> -->
							<div class=" ">
								<vue-typed-js 
								:strings=j
								:loop="true" 
								:typeSpeed="10" 
								> 
									<h1 class="-rotate-12 typing text-gray-600 sx:text-base text-xl font-black"></h1>
								</vue-typed-js>
							</div>
						<!-- <div class="px-1 sx:text-base text-xl font-black text-red-600">]</div> -->
					</div> 
					<div class="pt-48 flex justify-around">
						<!-- <div class="px-1  sx:text-base text-xl font-black text-red-600">[</div> -->
							<div class=" ">
								<vue-typed-js 
								:strings=j
								:loop="true" 
								:typeSpeed="20" 
								> 
									<h1 class="-rotate-12 typing text-gray-400 sx:text-base text-xl font-black"></h1>
								</vue-typed-js>
							</div>
						<!-- <div class="px-1 sx:text-base text-xl font-black text-red-600">]</div> -->
					</div> 
					<div class="pt-12 flex justify-around">
						<!-- <div class="px-1  sx:text-base text-xl font-black text-red-600">[</div> -->
							<div class=" ">
								<vue-typed-js 
								:strings=j
								:loop="true" 
								:typeSpeed="30" 
								> 
									<h1 class="-rotate-12 typing text-gray-300 sx:text-base text-xl font-black"></h1>
								</vue-typed-js>
							</div>
						<!-- <div class="px-1 sx:text-base text-xl font-black text-red-600">]</div> -->
					</div>   
						<div class="ball-box translate-y-20"> 
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
							</ul> 
						</div> 
					</div> 
		    </div> 
			
			

			
			 
		</div>   
  </div>  
</template>
 

<script>  

import usersData from "../data/tmpDta.json";

export default {
  
  data() {
    return {
		uDat:usersData,
      dialog: false,
      dialog2: false,
	  j:['現代東亞.儒家社會', '大學教育機構','','hybird(混雜)','policy borrowing','差異divergence','相似convergence',''],

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
  },
  methods: { 
  },
  mounted() {
   
     
  }
}
</script>





<style scoped>

/* https://codepen.io/AnzilkhaN/pen/aXVOpE */

/* https://codepen.io/Shruti-Ag/pen/ZEEQBqB */

/* https://codepen.io/JoeHastings/pen/MOdRVm

*/
.bg {
  
  background-color: #34495e;
}

@import url('https://fonts.googleapis.com/css?family=Special+Elite');


/* .qta_mdf_font{ font-family: ‘cwTeXFangSong’, serif; line-height: 2 ;} */

.qta_mdf_font {
	font-family: 'Special Elite', cursive;
	/* background: #fffdf5; */
	/* color: #3f3f5a; */
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

blockquote {
	font-weight: 100;
	font-size: 1.3rem;
	max-width: 800px;
	line-height: 1.4;
	position: relative;
	margin: 0;
	padding: .5rem;
}

blockquote:before,
blockquote:after {
	position: absolute;
	color: #857d5d;
	font-size: 4rem;
	width: 1.5rem;
	height: 1.5rem;
}

blockquote:before {
	content: '“';
	left: -2rem;
	top: -1rem;
}

blockquote:after {
	content: '”';
	right: -1rem;
	bottom: 1rem;
}

cite {
	line-height: 3;
	text-align: right;
}

/* // - */

@import url(https://fonts.googleapis.com/earlyaccess/cwtexfangsong.css);

.mdf_font{ font-family: ‘cwTeXFangSong’, serif; line-height: 2 ;}

.bg_Img{ background-image: url("../assets/cover_Page.jpg"); background-repeat: repeat-y;}

.ball-box {
	width: 45%;
	min-width: 320px;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: absolute;
	top: 35%;
	/* right: 65%; */
	left:65%;
	transform: translate(-50%, -50%);
	/* width: 50%;
	min-width: 820px;
	height: 95px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); */

  -moz-transform:rotate(90deg);
  -webkit-transform:rotate(90deg);
  -o-transform:rotate(90deg);
  -ms-transform:rotate(90deg);
  transform:rotate(90deg);
  
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
	width: 16px;
	height: 16px;
	border-radius: 47%;
	background-color: #a3a3a3;
	list-style-type: none;

	opacity: 0;
	
	animation: 1.5s ease-in-out infinite;
	animation-name: upwards;
}
.red-ball li {
	background-color: #252525;
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


body {
  display: flex;
  height: 100%;
  background-color: #333;
}
.word {
  margin: auto;
  color: white;
  font: 700 normal 2.5em 'tahoma';
  text-shadow: 5px 2px #222324, 2px 4px #222324, 3px 5px #222324;
}

</style>
