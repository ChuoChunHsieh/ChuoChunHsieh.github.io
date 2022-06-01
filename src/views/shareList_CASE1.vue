<template>
<v-app id="inspire"> 
	<div class=" grid-cols-1 grid-flow-col gap-1">
		 
		<div>
			<v-card class="h-screen">
			
			<v-toolbar flat color="#6D8B74" dark>
				<v-toolbar-title>
					<div class="flex justify-end my-2 mx-24 " >
						<h2> 最新訊息</h2>
						<!-- <span class= "text-gray-100 text-right text-xs  "> {{ uuuser.email }} 已登入網站後台。請開始修改內容 </span> -->
					</div>

				</v-toolbar-title>
			</v-toolbar>
			<v-tabs color="#5F7161">
				
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg> 個人簡介
				</v-tab>

				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
					</svg> 熱門文章 / 最新消息 
				</v-tab>
		  
				<!-- <v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg> 主題訊息 設定
				</v-tab>  --> 

				<v-tab-item>
					<div class="flex "> 
						<div v-for="(item, i) in blogList" :key="i">
							<div class=" rounded-lg border-2 border-gray-200 m-2 p-3 " v-if="item.StudySrc != true && item.Idea == null "
								v-show="item.status == '自我介紹_en' | item.status == '自我介紹'"
								> 

								<!-- <span class="text-lg text-gray-700 font-base tracking-wide mr-3"> {{ item.title}}</span>
								<span class="text-xs text-gray-700 font-base tracking-wide mr-3">#{{ item.type}} #{{ item.status}} #{{ item.lang}}</span>
								<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ transDate(item.time) }}</span> -->

								<markdown-it-vue class=" p-3" :content="item.content" />
							</div>

							<!-- <div class=" m-2 p-3" v-if="item.StudySrc != true && item.Idea == null && item.status == '自我介紹_en' ">
	  
									<v-textarea class="" label="編輯 .自我介紹(英文版)" outlined v-model="item.content"></v-textarea> 
								</div> -->
						</div>
					</div>
				</v-tab-item> 

				<v-tab-item>
					<div class="flex"> 
						<div v-for="(item, i) in blogList" :key="i">
							<div class="  m-2 p-1" v-if="item.StudySrc != true && item.Idea == null && item.status == '公開' "> 

								<span class="text-lg text-gray-700 font-base tracking-wide mr-3"> {{ item.title}}</span>
								<span class="text-xs text-gray-700 font-base tracking-wide mr-3">#{{ item.type}} #{{ item.status}} #{{ item.lang}}</span>
								<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ transDate(item.time) }}</span>

								<markdown-it-vue class="md-body bg-gray-50 border-gray-200 rounded-md border-2 p-5" :content="item.content" />
							</div>
						</div>
					</div>
				</v-tab-item> 

			</v-tabs>
		</v-card> 
		</div> 
	</div>
		  
	</div>
</v-app>	
</template>
 

<script>
import firebase from 'firebase';
 import MarkdownItVue from 'markdown-it-vue'
 import 'markdown-it-vue/dist/markdown-it-vue.css'

 import blogDataService from "../services/blogDataService"
//  import blogStDataService from "../services/blogStDataService"


 export default {
 	computed: {
		fltr_stp1: function() { return this.blogList.filter(c => c.Idea.indexOf(true) !== -1); },
		// fltr_stp2: function() { return this.fltr_stp1.sort(c => c.Idea.indexOf(true) !== -1); },
		sortedArray: function() {
		function compare(a, b) {
			if (a.Bk_year < b.Bk_year)
				return -1;
			if (a.Bk_year > b.Bk_year)
				return 1;
			return 0;
			}

			return this.fltr_stp1.sort(compare);
			},
		 
 
	},
 	data() {
 		return {
			uuuser:[],
 			// - - - - - - - - 
			 content: '',
 			content_en: '',
 			type: '',
 			type_en: '',


 			title: '',
 			title_en: '',

 			msg: '',
 			tab: '',

 			// - - 暫時性容器 - - - 
 			blogList: [],
 			blogSt: [],
 			// - - - - - 
 			currentTime: Date.now(),
 			cT: "",
 			//    ss :'# your markdown content',
 			// = = = = == = 
 			time: '',
 			status: '',
 			lang: '',
 			url: '',
 			Bk_year: '',


 			status_idx: ['草稿', '公開', '暫時隱藏'],
			idea_idx: [1,2,3,4,5,6], 
 			lang_idx: ['未分類', '中文為主', '英文為主', '中英兼備'],
 			type_idx: ['學術論文', '學術論壇', '專書專刊', '教育部計畫', '科技部計畫', '指導研究'],
 			type_idx_un: ['未分類', '學術論文', '學術論壇', '專書專刊', '教育部計畫', '科技部計畫', '指導研究'], 
 		}
 	},
 	methods: {
		 chk(){

			 firebase.auth().onAuthStateChanged(function(user) { 
  if (user.emailVerified) {
    alert('Email is verified');
  }
  else {
    alert('Email is not verified');
  }
});

		 },
		 eMail_Sent(){
			 const user = firebase.auth().currentUser;
      // send the signed in user a verification email
    		  user.sendEmailVerification();
alert(user.email+ " here is Done")
			//  this.user.sendEmailVerification();
		 },
		 logOut() {
		firebase
			.auth()
			.signOut()
			.then(() => {
			this.$router.replace({path: '/'});
			});
		},

 		savePost_V2() {
 			var data = {


 				time: this.dayjs(this.cT).toISOString(),
 				type: this.type,
 				status: this.status,
 				lang: this.lang,
 				url: this.url,
 				title: this.title,
 				content: this.content,
 				title_en: this.title_en,
 				Bk_year: this.Bk_year,
 				StudySrc: true,


 			};
 			blogDataService.create(data)
 				.then(() => {

 					Swal.fire({
 						icon: 'success',
 						title: '完成登記',
 						text: '系統 已將資料上傳完畢',
 						time: 2000,

 					})

 					// this.submitted = true;
 				})
 				.catch(e => {
 					console.log(e);
 					this.msg = e;
 				});
 		},
 		saveIdea() {
 			var data = { 
 				time: this.dayjs(this.cT).toISOString(),
 				type: this.type,
 				status: this.status,
 				lang: this.lang,
 				title: this.title,
 				content: this.content,
				 title_en: this.title_en,
 				content_en: this.content_en,
 				Bk_year: this.Bk_year,
				url: this.url,
 				StudySrc: false,
 				Idea: true,
				

 			};
			 if(  data.Bk_year == "" )
				{   data.Bk_year = 1 }

 			blogDataService.create(data)
 				.then(() => {

 					Swal.fire({
 						icon: 'success',
 						title: '完成登記',
 						text: '系統 已將資料上傳完畢',
 						time: 2000,

 					})

 					// this.submitted = true;
 				})
 				.catch(e => {
 					console.log(e);
 					this.msg = e;
 				});
 		},

 		savePost() {
 			var data = {


 				time: this.dayjs(this.cT).toISOString(),
 				type: this.type,
 				status: this.status,
 				lang: this.lang,
 				title: this.title,
 				content: this.content,
 				Bk_year: this.Bk_year,
 				StudySrc: false,

 			};
 			blogDataService.create(data)
 				.then(() => {

 					Swal.fire({
 						icon: 'success',
 						title: '完成登記',
 						text: '系統 已將資料上傳完畢',
 						time: 2000,

 					})

 					// this.submitted = true;
 				})
 				.catch(e => {
 					console.log(e);
 					this.msg = e;
 				});
 		},
 		 
 		ModifyPost(e, stus) {
 			var r = {
 				status: stus
 			}
 			blogDataService.update(e.key, r)
 				.then(() => {
 					Swal.fire({
 						icon: 'info',
 						title: '完成更新',
 						text: '更新內容 ,上傳完畢',
 						time: 2000,

 					})
 					this.$emit("refreshList");
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		},
		Modifyidea(e) {
 			var r = {
				 Bk_year :e.Bk_year,
				 title   :e.title,
				 content   :e.content,

 			}
 			blogDataService.update(e.key, r)
 				.then(() => {
 					Swal.fire({
 						icon: 'info',
 						title: '完成更新',
 						text: '更新內容 ,上傳完畢',
 						time: 2000,

 					})
 					this.$emit("refreshList");
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		}, 

 		ModifyCnten(e, c10) {
 			var r = {
 				content: c10
 			}
 			blogDataService.update(e.key, r)
 				.then(() => {
 					Swal.fire({
 						icon: 'success',
 						title: '完成更新',
 						text: '更新內文 ,上傳完畢',
 						time: 2000,

 					})
 					this.$emit("refreshList");
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		},
 	 
 		deletePost(e) {
 			blogDataService.delete(e.key)
 				.then(() => {
 					Swal.fire({
 						icon: 'error',
 						title: '完成刪除',
 						text: '系統 已將刪除完畢',
 						time: 2000,

 					})
 					window.reload();
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		},
 		 

 		UpDtaOd2(e) {
 			const data = {
 				// status : e.status,
 				// time : e.time, 
 				// type: e.type, 
 				// title: e.title, 
 				content: e.content,
 			};

 			blogDataService.update(e.key, data)
 				.then(() => {
 					this.msg = e.bking_name + '@' + e.sentTime + "更新資料,上傳成功!";
 					// this.$emit("refreshList");
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		},
 		UpDtaURL(k, u) {
 			const data = {
 				// status : e.status,
 				// time : e.time, 
 				// type: e.type, 
 				// title: e.title, 
 				url: u,
 			};


 			blogDataService.update(k, data)
 				.then(() => {
 					//   this.msg =  u +"更新資料,上傳成功!";
 					Swal.fire({
 						icon: 'success',
 						title: '完成更新',
 						time: 2000,

 					})
 					this.$emit("refreshList");
 				})
 				.catch((e) => {
 					console.log(e);
 				});
 		},

 	 
 		opepURL(idx) {
 			window.open(idx);
 		},

 		updateCurrentTime() { this.cT = Date.now(); },
 		transCurrentTime(idx) { return this.dayjs(idx).format("HH:mm:ss"); },
 		transDate(idx) { return this.dayjs(idx).format("MM/DD HH:mm"); },


 		blog_onDataChange(items) {
 			let _tutorials = [];
 			items.forEach((item) => {
 				let key = item.key;
 				let data = item.val();
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
 					Idea: data.Idea,
 				});
 			});
 			this.blogList = _tutorials;
 		},
 		blogSt_onDataChange(items) {
 			let _tutorials = [];
 			items.forEach((item) => {
 				let key = item.key;
 				let data = item.val();
 				_tutorials.push({
 					key: key,

 					type: data.type,
 					content: data.content,
 					type_en: data.type_en,
 					content_en: data.content_en,

 					edit_b: data.edit_b,
 					time: data.time,
 				});
 			});
 			this.blogSt = _tutorials;
 		}, 
 	}, 
 	mounted() {  
 		blogDataService.getAll().on("value", this.blog_onDataChange); 
 		this.interval = setInterval(this.updateCurrentTime, 1000);
 	}
 }
</script>

 