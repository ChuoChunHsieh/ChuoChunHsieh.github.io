<template>
<v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
	  <!-- <div class="mx-3 py-1.5 "> 
        <v-btn
          icon small class="p-5"
          to="/"   > 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			</svg>
        </v-btn> 
        <span class="text-xs font-light px-1"> 介紹 </span>
      </div> -->

	   <div class="mx-3 py-1.5 "> 
        <v-btn
          icon small class="p-5" @click="logOut()"
            >
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </v-btn> 
        <span class="text-xs font-light px-1"> 登出 </span>
      </div>

    </v-navigation-drawer>
	<div class=" grid-cols-1 grid-flow-col gap-1">
		<!-- <div class="flex justify-end my-2 mx-24 " >
			 <span class= "text-gray-600 text-right text-xs  "> {{ uuuser.email }} 登入中 </span>
		</div> -->
		<div>
			<v-card>
			
			<v-toolbar flat color="#6D8B74" dark>
				<v-toolbar-title>
					<div class="flex justify-end my-2 mx-24 " >
						<!-- <h2>  </h2> -->
						<span class= "text-gray-100 text-right text-xs  "> {{ uuuser.email }} 已登入網站後台。請開始修改內容 </span>
					</div>

				</v-toolbar-title>
			</v-toolbar>
			<v-tabs color="#5F7161">
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
			</svg> 熱門文章 / 最新消息 編輯
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
			</svg> 研究理念
				</v-tab>
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
					</svg> 
					 著作登錄
				</v-tab>
				<!-- 	  
		  <v-tab>  
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
			</svg>
	        學術論文 /  學術論壇 / 指導研究  文章登入
	      </v-tab>
	       
		  <v-tab>
	        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
			</svg>
	        教育部計畫 / 科技部計畫 文章登入
	      </v-tab> -->
				<v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg> 主題訊息 設定
				</v-tab>

				<!-- <v-tab>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg> 帳號 設定
				</v-tab> -->
	
		
	
				<v-tab-item>
					<div class="flex">
						<div class="w-1/3  m-5 bg-gray-50  p-3">
							<span class="text-xs "> 預覽如下：</span>
							<hr>
							<markdown-it-vue class="md-body" :content="content" />
						</div>
	
						<div class="w-1/3  m-5 bg-gray-0  p-3">
							<div class="flex flex-row justify-end py-3">
	
								<span class="text-xs text-blue-700 font-base tracking-wide mr-24">目前時間 : {{ transDate(cT) }} </span>
								<v-btn @click="savePost" dense small outlined class=" w-1/4 btn btn-dark btn-lg btn-block">儲存</v-btn>
							</div>
							<!-- 登入時間 : {{  }} -->
							<v-text-field outlined single-line dense v-model="title" label="主題"></v-text-field>
	
							<v-text-field outlined single-line dense v-model="url" label="文章連結" type="url"></v-text-field>
	
							<div class="flex">
								<v-autocomplete v-model="status" class="mx-2" :items="status_idx" dense outlined label="發文狀態">
								</v-autocomplete>
	
								<v-autocomplete v-model="type" class="mx-2" :items="type_idx" dense outlined label="文章分類">
								</v-autocomplete>
	
								<v-autocomplete v-model="lang" class="mx-2" :items="lang_idx" dense outlined label="語言分類">
								</v-autocomplete>
							</div>
	
	
							<!-- <v-autocomplete :item="lang_idx" v-model="lang"></v-autocomplete> -->
							<v-textarea outlined v-model="content" label="發文內容"></v-textarea>
	
						</div>
	
						<div class="w-1/3  "> 
	
							<div v-for="(item, i) in blogList" :key="i">
								<div class=" bg-blue-50 m-2 p-3" v-if="item.StudySrc != true && item.Idea == null">
	
	
									<span class="text-lg text-gray-700 font-base tracking-wide mr-3"> {{ item.title}}</span>
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">#{{ item.type}} #{{ item.status}} #{{ item.lang}}</span>
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ transDate(item.time) }}</span>
	
									<v-btn @click="deletePost(item)" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn>
									<!-- <v-btn  @click="ModifyPost(item,'草稿')" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">草稿</v-btn> -->
									<v-btn @click="ModifyPost(item,'公開')" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">公開</v-btn>
	
									<v-btn @click="ModifyPost(item,'暫時隱藏')" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">隱藏</v-btn>
									<v-btn @click="ModifyCnten(item,item.content)" dense small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn>
									<!-- <v-checkbox dense hide-details small-x v-model="item.edit_b"  label="編輯"  >  </v-checkbox> -->
									<v-btn-toggle v-model="item.edit_b" color="light-blue darken-2" dense group multiple>
										<v-btn :value="1" class="">
											<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
			  </svg>
										</v-btn>
	
									</v-btn-toggle>
	
									<v-textarea v-show="item.edit_b == true" class="my-2" label="發文內容" outlined v-model="item.content"></v-textarea>
	
									<markdown-it-vue class="md-body bg-blue-100  p-3" :content="item.content" />
								</div>
							</div>
							<!-- <div v-for="(_blog, n) in blogList" :key="n">
						<markdown-it-vue class="md-body" :content="_blog[n].content" />
					</div> -->
						</div>
					</div>
				</v-tab-item>

				 <v-tab-item>
					<div class="flex"> 
						<div class="w-1/2  m-5 "> 
							<div class="grid grid-cols-2 gap-1">

								<div class="col-span-2 flex ">
									<v-autocomplete
										v-model="Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									</v-autocomplete> 
									<v-btn @click="saveIdea" dense dark class="  btn btn-dark btn-lg btn-block">儲存</v-btn>  
								</div>
								<div class="col-span-2  bg-gray-0  p-3">
									<v-textarea outlined single-line dense v-model="title" label="主題句"></v-textarea> 
									
									<v-text-field outlined single-line dense v-model="url" label="資料來源"></v-text-field> 
									<v-textarea outlined v-model="content" label="內文"></v-textarea> 
								</div>
	
								<!-- <div class=" bg-gray-0  p-3">
									<v-textarea outlined single-line dense v-model="title_en" label="主題句(英文)"></v-textarea>
									
									<v-text-field outlined single-line dense v-model="url" label="資料來源"></v-text-field> 
									<v-textarea outlined v-model="content_en" label="內文(英文)"></v-textarea> 
								</div>  -->
							</div>  
						</div> 
						<div class="w-1/2  "> 
							<!-- {{ sortedArray }} -->  
							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 1 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div>

							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 2 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div>

							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 3 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div>

							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 4 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div>
							
							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 5 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div>

							<div v-for="(item, i) in blogList" :key="i"> 
								<div class="rounded-lg  border-2 border-gray-200 m-2 p-3" v-if="item.Idea == true  && parseInt(item.Bk_year) == 6 " >   
									<div class="flex justify-end " >
										<v-btn @click="deletePost(item)" dense x-small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除</v-btn> 
										<v-autocomplete
										v-model="item.Bk_year" class="mx-2 " 
										:items="idea_idx" dense outlined 
										label="排列次序" type="number">
									   </v-autocomplete>  
										 <v-btn @click="Modifyidea(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">存檔</v-btn> 
									</div> 
									<blockquote  >
										<p>{{  item.title }}</p> 
										<cite>{{  item.url }}</cite> 
								    </blockquote> 
									<p>{{  item.content }}</p> 
								</div>  
							</div> 
						</div>
					</div>
				</v-tab-item>
	
	
				<v-tab-item>
					<div class="flex">
	
						<div class="w-2/3  m-5 bg-gray-0  p-3 ">
							<v-text-field outlined single-line dense v-model="title" label="論文名稱"></v-text-field>
	
							<v-text-field outlined single-line dense v-model="title_en" label="論文名稱(英文)"></v-text-field>
	
							<v-text-field outlined single-line dense v-model="url" label="文章連結" type="url"></v-text-field>
							<span class="text-xs "> 文章分類：</span> 
	
							<div class="flex flex-row justify-end py-3">
								<v-radio-group v-model="type" row v-for="(item, index) in type_idx" :key="index" class="w-2/3 ">
									<v-radio dense color="red" class="text-white text-xs mr-5 " :label="item" :value="item">
									</v-radio>
								</v-radio-group>
	
							</div>
	
							<div class="flex">
								<v-text-field outlined single-line dense v-model="Bk_year" label="登入年度" class="w-1/3"></v-text-field>
	
								<v-autocomplete v-model="lang" class="mx-2" :items="lang_idx" dense outlined label="語言分類">
								</v-autocomplete>
	
								<v-autocomplete v-model="status" class="mx-2" :items="status_idx" dense outlined label="發文狀態">
								</v-autocomplete>
	
							</div>
							<v-btn @click="savePost_V2" dense dark class=" w-full btn btn-dark btn-lg btn-block">登入文章</v-btn>
	
						</div>
						<div class="w-1/3 bg-gray-50 ">
							<div v-for="(item, i) in blogList" :key="i">
								<div class=" bg-green-100 m-2 p-3" v-if="item.StudySrc == true ">
	
	
									<span class="text-xs text-gray-100 font-black bg-yellow-500  rounded-3xl px-3 py-1.5 mr-3">{{ item.Bk_year}}</span>
	
									<span class="text-xs text-gray-100 font-black bg-green-700  rounded-3xl px-3 py-1.5 mr-3">#{{ item.type}} #{{ item.status}} #{{ item.lang}}</span>
	
	
									<v-btn @click="deletePost(item)" dense x-small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block" color="error">刪除</v-btn>
	
									<div class="flex mt-2">
										<v-text-field outlined single-line dense v-model="item.url" v-on:change="UpDtaURL(item.key,item.url)" label="更新 URL" hint="更新 URL"></v-text-field>
										<v-btn @click="UpDtaURL(item.key,item.url)" solo x-small dark class=" w-1/7 my-2 mx-1 btn btn-dark btn-lg btn-block">更新連結</v-btn>
									</div>
	
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> {{ item.title}}</span>
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3" v-show="item.title_en != null"> {{ item.title_en}}</span>
									<v-btn @click="opepURL(item.url)" v-show="item.url != null" dense small outlined class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">看完整文章</v-btn>
	
								</div>
							</div>
						</div>
					</div>
				</v-tab-item> 
	
				<v-tab-item>
					<div class="flex">

						<div class="w-1/3  m-5 bg-gray-0  p-3 ">  
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 中文版內容 </span>
	
							<v-textarea outlined single-line dense v-model="type" label="最新消息"></v-textarea> 
							<v-textarea outlined single-line dense v-model="content" label="個人簡介"></v-textarea>
							<v-textarea outlined single-line dense v-model="content" label="熱衷議題"></v-textarea>
	
							<hr>
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 英文版內容 </span> 
	
	 						<v-textarea outlined single-line dense v-model="content_en" label="最新消息 (英文)"></v-textarea>
							 <v-textarea outlined single-line dense v-model="content_en" label="個人簡介 (英文)"></v-textarea>
							<v-textarea outlined single-line dense v-model="content_en" label="熱衷議題 (英文)"></v-textarea>
	
							<v-btn @click="saveBlogSt" dense dark class=" w-full btn btn-dark btn-lg btn-block">儲存</v-btn> 
						</div>

	
						<div class="w-1/3  m-5 bg-gray-0  p-3 ">
	
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 中文版內容 </span>
	
							<v-text-field outlined single-line dense v-model="type" label="信息主題"></v-text-field>
	
							<v-text-field outlined single-line dense v-model="content" label="信息內容"></v-text-field>
	
							<hr>
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 英文版內容 </span>
	
	
							<v-text-field outlined single-line dense v-model="type_en" label="信息主題 (英文)"></v-text-field>
	
	
							<v-text-field outlined single-line dense v-model="content_en" label="信息內容 (英文) "></v-text-field>
	
							<v-btn @click="saveBlogSt" dense dark class=" w-full btn btn-dark btn-lg btn-block">儲存</v-btn>
	
						</div>
						<div class="w-1/3  ">
							<div v-for="(item, i) in blogSt" :key="i">
								<div class=" bg-blue-50 m-2 p-3">
									<div class="flex">
	
										<v-text-field outlined single-line dense v-show="item.edit_b == true" v-model="item.type" label="信息主題"></v-text-field>
	
										<v-text-field outlined single-line dense v-show="item.edit_b == true" v-model="item.type_en" label="信息主題_en"></v-text-field>
	
										<v-btn @click="deleteBlogSt(item)" v-show="item.edit_b == true" dense small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除 </v-btn>
	
										<v-btn @click="MdfSt(item,item.content)" dense small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">更新</v-btn>
	
	
										<v-checkbox v-model="item.edit_b" dense label="DevOpts" class=" w-auto mx-1 btn btn-dark btn-lg btn-block"></v-checkbox>
	
	
	
									</div>
	
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ item.type }}</span>
	
									<v-text-field outlined single-line dense v-model="item.content" label="信息內容"></v-text-field>
	
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ item.type_en }}</span>
	
									<v-text-field outlined single-line dense v-model="item.content_en" label="信息內容_en"></v-text-field>
								</div>
							</div>
						</div>
					</div>
				</v-tab-item>  

				<v-tab-item>
					<div class="flex">
						

						 <!-- <v-text-field outlined single-line dense v-model="content_en" label="信息內容 (英文) "></v-text-field> -->
	
					    <v-btn @click="eMail_Sent" dense dark 
						class=" ">發送</v-btn>

						

						 {{ uuuser }}
	

						<div class="w-1/3  m-5 bg-gray-0  p-3 ">  
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 中文版內容 </span>
	
							<v-textarea outlined single-line dense v-model="type" label="最新消息"></v-textarea> 
							<v-textarea outlined single-line dense v-model="content" label="個人簡介"></v-textarea>
							<v-textarea outlined single-line dense v-model="content" label="熱衷議題"></v-textarea>
	
							<hr>
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 英文版內容 </span> 
	
	 						<v-textarea outlined single-line dense v-model="content_en" label="最新消息 (英文)"></v-textarea>
							 <v-textarea outlined single-line dense v-model="content_en" label="個人簡介 (英文)"></v-textarea>
							<v-textarea outlined single-line dense v-model="content_en" label="熱衷議題 (英文)"></v-textarea>
	
							<v-btn @click="saveBlogSt" dense dark class=" w-full btn btn-dark btn-lg btn-block">儲存</v-btn> 
						</div>

	
						<div class="w-1/3  m-5 bg-gray-0  p-3 ">
	
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 中文版內容 </span>
	
							<v-text-field outlined single-line dense v-model="type" label="信息主題"></v-text-field>
	
							<v-text-field outlined single-line dense v-model="content" label="信息內容"></v-text-field>
	
							<hr>
							<span class="text-xs text-gray-700 font-base tracking-wide mr-3"> 英文版內容 </span>
	
	
							<v-text-field outlined single-line dense v-model="type_en" label="信息主題 (英文)"></v-text-field>
	
	
							
						</div>
						<div class="w-1/3  ">
							<div v-for="(item, i) in blogSt" :key="i">
								<div class=" bg-blue-50 m-2 p-3">
									<div class="flex">
	
										<v-text-field outlined single-line dense v-show="item.edit_b == true" v-model="item.type" label="信息主題"></v-text-field>
	
										<v-text-field outlined single-line dense v-show="item.edit_b == true" v-model="item.type_en" label="信息主題_en"></v-text-field>
	
										<v-btn @click="deleteBlogSt(item)" v-show="item.edit_b == true" dense small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">刪除 </v-btn>
	
										<v-btn @click="MdfSt(item,item.content)" dense small dark solo class=" w-1/7 mx-1 btn btn-dark btn-lg btn-block">更新</v-btn>
	
	
										<v-checkbox v-model="item.edit_b" dense label="DevOpts" class=" w-auto mx-1 btn btn-dark btn-lg btn-block"></v-checkbox>
	
	
	
									</div>
	
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ item.type }}</span>
	
									<v-text-field outlined single-line dense v-model="item.content" label="信息內容"></v-text-field>
	
									<span class="text-xs text-gray-700 font-base tracking-wide mr-3">{{ item.type_en }}</span>
	
									<v-text-field outlined single-line dense v-model="item.content_en" label="信息內容_en"></v-text-field>
								</div>
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
 import blogStDataService from "../services/blogStDataService"


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
 		saveBlogSt() {
 			var data = {
 				time: this.dayjs(this.cT).toISOString(),
 				type: this.type,
 				content: this.content,

 				type_en: this.type_en,
 				content_en: this.content_en,
 			};
 			blogStDataService.create(data)
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
 		MdfSt(e, c10) {
 			var r = {
 				content: c10
 			}
 			blogStDataService.update(e.key, r)
 				.then(() => {
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
 		deleteBlogSt(e) {
 			blogStDataService.delete(e.key)
 				.then(() => {
 					Swal.fire({
 						icon: 'error',
 						title: '完成刪除',
 						text: '系統 已將刪除完畢',
 						time: 2000,

 					})
 					this.$emit("refreshList");
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

 		UpDtaBlogSt(e) {
 			const data = {
 				type: e.type,
 				content: e.content,
 			};

 			blogStDataService.update(e.key, data)
 				.then(() => {
 					this.msg = e.content + "更新資料,上傳成功!";

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

		 U_onDataChange(items) {
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
		 
		 var user = firebase.auth().currentUser;

			if (user) {
			// User is signed in.
			this.uuuser = user;
			} else {
			// No user is signed in.
			}

		  
 		blogDataService.getAll().on("value", this.blog_onDataChange);
 		blogStDataService.getAll().on("value", this.blogSt_onDataChange);
 		this.interval = setInterval(this.updateCurrentTime, 1000);
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

.BBg{ background: white;}

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
		margin: 8px 12px;
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

 