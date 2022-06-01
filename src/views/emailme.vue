<template> 
<div class="BB">
    <article class="article">
	<h1>與我聯繫 (Contact me)</h1>
	<p>歡迎各界，需要討論...等議題</p>
	
	<blockquote  >
		<p>Hybridity is novel approach to conceptualizing HE governance, rather than another ideal typical form.</p>
		
			<cite>Chuo-Chun<span class="cite-last-name">Hsieh</span> </cite>
			
	</blockquote>

	<!-- <h1>與我聯繫 (Contact me)</h1> -->
	<h3>電子郵件：sljk@gmail.com</h3>
	<h3>文件地址：</h3>
	<h3>辦公時間：</h3>
	 
</article>

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

/* https://codepen.io/erinesullivan/pen/gxdbzp */

 @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Vollkorn:ital,wght@0,600;1,500&display=swap');

:root {
	--type-body: Open Sans, Helvetica, Arial, sans-serif;
	--type-quote: Vollkorn;
	--quote-image-width: 140px;
	--border-rad: 7px;
	--accent-color: hsl(322deg 85% 65%);
	--quote-bg: hsl(0 0% 97%);
}


*,
*::before,
*::after {
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: #BDB873;
}

a:hover,
a:focus {
	text-decoration: underline;
}

.BB {
	margin: 15px 10px;
	font-family: Open Sans, Helvetica, Arial, sans-serif;
	color: hsl(0 0% 15%);
}

.article {
	max-width: 900px;
	margin: auto;
}

h1 {
	width: max-content;
	margin: 0 auto 1.8em;
	box-shadow:
		0 2px 0 #BDB873,
		0 4px 0 white,
		0 6px 0 #BDB873;
	font: 1.4rem Vollkorn;
	color: hsl(0 0% 25%);
}


blockquote {
	position: relative;
	margin: 40px 0;
	padding: 1.6em 2.4em .7em ;
	font: italic 1.2rem Vollkorn;
	background: #f0efeb no-repeat left ;
	border-radius: 7px;
	border: 2px solid white;
	box-shadow: 2px 2px 4px hsl(0 0% 0% / 20%);
	text-indent: 1.6em;
}

@media (min-width: 768px) {
	blockquote {
		margin: 40px 60px;
	}
}

blockquote::before {
	content: "";
	pointer-events: none;
	position: absolute;
	z-index: 1;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	border-radius: 7px;
	box-shadow:
		inset -2px -2px 1px hsl(0 0% 100%),
		inset 2px 2px 4px hsl(0 0% 0% / 20%);
}

blockquote::after {
	content: "❝";
	position: absolute;
	z-index: 1;
	left: 50%;
	top: -2px;
	transform: translate(-50%, -50%);
	width: 1.3em;
	height: 1.3em;
	background: white;
	box-shadow: 0 4px 5px -1px hsla(0 0% 0% / 20%);
	border-radius: 999px;
	display: grid;
	place-content: center;
	padding-top: .5em;
	color: #BDB873;
	font-size: 36px;
	font-style: normal;
	text-indent: 0;
}

.blockquote-author-image {
	position: absolute;
	left: 0;
	top: 0;
	width: var(--quote-image-width);
	height: 100%;
	opacity: 0.75;
	background: #BDB873 var(--image) no-repeat center / cover;
	background-blend-mode: hard-light;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
}

cite {
	display: block;
	margin-top: 30px;
	text-indent: 0;
	text-align: center;
	font: bold .9rem Helvetica;
	text-transform: uppercase;
	color: hsl(0 0% 20%);
}

@media (min-width: 768px) {
	cite {
		margin-left: calc(1rem - var(--quote-image-width));
	}
}

.cite-last-name {
	/* background: #BDB873; */
	color: var(--quote-bg);
} 

.controls {
	position: fixed;
	bottom: 10px;
	right: 10px;
	font-size: 0.8em;
	opacity: 0.7;
	transition: .2s;
}

.controls:hover,
.controls:focus {
	opacity: 1;
}

.controls label {
	font-weight: bold;
	text-transform: lowercase;
}

.controls input {
	display: block;
	width: 100%;
	border: 0;
	outline: none;
	padding: 0;
}

</style>
