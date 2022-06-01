<template>
	<div class="BB">
	
	
		<v-card>
			<v-toolbar flat color="#6D8B74" dark>
				<v-toolbar-title>研究內容</v-toolbar-title>
			</v-toolbar>
			<v-tabs color="#5F7161">
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
					</svg> 搜尋所有
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
					</svg> 學術論文
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
					</svg> 學術論壇
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
					</svg> 專書專刊
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
					</svg> 教育部計畫
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
					</svg> 科技部計畫
				</v-tab>
	
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg> 指導研究
				</v-tab>
	
				<!-- <v-tab>
			        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
			        熱門文章
			      </v-tab> --> 
				<v-tab-item>
					<v-card>
						<v-card-title>
							所有文章
							<v-spacer></v-spacer>
							<v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
						</v-card-title>
						<v-data-table :headers="headers" :items="StudyList" :sort-by="['quiz_date','patient_ID' ]" :sort-desc="[true, true]" :search="search" item-key="title">
	
							<template v-slot:item.url="{ item }"> 
							<v-btn  v-show="item.url != null"  @click="opepURL(item.url)"   dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">看完整文章</v-btn>
</template>
			</v-data-table>  
		</v-card>
      </v-tab-item> 

	  <!-- 學術論文 -->
	  <v-tab-item>
        <v-card>
			<v-card-title>
			  學術論文
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search0"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s0"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search0" 
				item-key="title" 
				>
			
				<template v-slot:item.url="{ item }">
					<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
						看完整文章</v-btn>
				</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>

<!-- 學術論壇 -->
	        <v-tab-item>
        <v-card>
			<v-card-title>
			  學術論壇
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search1"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s1"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search1" 
				item-key="title" 
				>
			
<template v-slot:item.url="{ item }">
	<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
		看完整文章</v-btn>
</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>

<!-- 專書專刊 -->
	        <v-tab-item>
        <v-card>
			<v-card-title>
			  專書專刊
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search2"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s2"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search2" 
				item-key="title" 
				>
			
			<template v-slot:item.url="{ item }">
				<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
					看完整文章</v-btn>
			</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>

	  <!-- 教育部計畫 --> 
	  	   <v-tab-item>
        <v-card>
			<v-card-title>
			  教育部計畫
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search3"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s3"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search3" 
				item-key="title" 
				>
			
<template v-slot:item.url="{ item }">
	<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
		看完整文章</v-btn>
</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>

<!-- 科技部計畫 -->
	   <v-tab-item>
        <v-card>
			<v-card-title>
			  科技部計畫
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search4"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s4"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search4" 
				item-key="title" 
				>
			
<template v-slot:item.url="{ item }">
	<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
		看完整文章</v-btn>
</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>

<!-- 指導研究 -->
	        <v-tab-item>
        <v-card>
			<v-card-title>
			  指導研究
			<v-spacer></v-spacer>
			<v-text-field
				v-model="search5"
				append-icon="mdi-magnify"
				label="Search"
				single-line
				hide-details
			></v-text-field>
			</v-card-title>
			<v-data-table
				:headers="headers"
				:items="fltr_s6"
				:sort-by="['quiz_date','patient_ID' ]" 
				:sort-desc="[true, true]" 
				
				:search="search5" 
				item-key="title" 
				>
			
<template v-slot:item.url="{ item }">
	<v-btn v-show="item.url != null" @click="opepURL(item.url)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">
		看完整文章</v-btn>
</template>
			</v-data-table>  
		</v-card>
      </v-tab-item>   
	   
    </v-tabs>
  </v-card> 
</div>
     
</template>
 

<script>
import usersData from "../data/tmpDta.json";

import blogDataService from "../services/blogDataService"

export default {

	data() {
		return {
			type_idx: ['學術論文', '學術論壇', '專書專刊', '教育部計畫', '科技部計畫', '指導研究'],
			search: '',
			search0: '',
			search1: '',
			search2: '',
			search3: '',
			search4: '',
			search5: '',
			BlogList: [],
			StudyList: [],
			headers: [{
					text: '文章標題',
					align: 'start',
					sortable: false,
					value: 'title',
				},
				{ text: '發表年份', value: 'Bk_year' },
				{ text: '文章分類', value: 'type' },
				{ text: '全文連結', value: 'url', align: 'center' },
				{ text: '語言歸類', value: 'lang' },
			],

		}
	},
	computed: {
		fltr_s0: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[0]) !== -1); },
		fltr_s1: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[1]) !== -1); },
		fltr_s2: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[2]) !== -1); },
		fltr_s3: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[3]) !== -1); },
		fltr_s4: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[4]) !== -1); },
		fltr_s5: function() { return this.StudyList.filter(c => c.type.indexOf(this.type_idx[5]) !== -1); }

		//    filterByDate: function () { 
		//   	   return  this.ODers.filter(c => c.sentTime.indexOf(this.searchs) !== -1)
		//   },
	},
	methods: {
		opepURL(idx) {
			if (idx == "") {
				Swal.fire({
					icon: 'error',
					title: '資料未上傳',
					text: '請先看別篇',
					time: 2000,

				})
			} else {
				window.open(idx);
			}


		},

		blog_onDataChange(items) {
			let _tutorials = [];
			let _blogs = [];
			items.forEach((item) => {
				let key = item.key;
				let data = item.val();
				if (data.StudySrc == true) {
					_tutorials.push({
						key: key,
						content: data.content,
						type: data.type,
						status: data.status,
						lang: data.lang,
						title: data.title,
						title_en: data.title_en,
						time: data.time,
						Bk_year: data.Bk_year,
						url: data.url,
						edit_b: data.edit_b,
						StudySrc: data.StudySrc,
					});
				} else {

				}


			});
			this.StudyList = _tutorials;
			this.BlogList = _tutorials;
		},

	},
	mounted() {
		blogDataService.getAll().on("value", this.blog_onDataChange);

	}
}
</script>
 