<template>
 
  <div class="w-auto" >  
	<v-card :loading="loading"  >
			<template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			></v-progress-linear>
			</template>

			<v-img 
			src="../assets/LandPage_02.jpg"
			></v-img>

			<div class="md:grid grid-cols-3 gap-0.5">
				<div class="col-span-1">
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
				<div class="col-span-2">
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
				<div class="col-span-2"> 
					<v-card-title>熱衷議題</v-card-title> 
					<v-card-text>  
						<div>{{  uDat[0].nt1 }}  {{  uDat[0].nt2 }}  </div> 
			       </v-card-text> 
				</div>
				<div class="col-span-1 flex justify-center">
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
			</div>  
		</v-card> 
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
    // this.go();
     
  }
}
</script>
 