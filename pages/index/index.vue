<template>
	
	<view class="content">
		<wd-navbar >
			  <template #title>
			    <view class="search-box">
			      <wd-search v-model="keyword" @search="change" hide-cancel placeholder-left></wd-search>
			    </view>
			  </template>
		</wd-navbar>
		<wd-button @click="click">{{title}}</wd-button>


	</view>
  <BottomBar class="botton-bar"></BottomBar>
</template>

<script setup>
	import BottomBar from "../../componets/bottom-bar/BottomBar.vue";
	import { ref } from 'vue'
	const keyword = ref("")
	const title = ref("wei")
	const click = () => title.value = "1"
	const change = () => {
		console.log(keyword.value)
	}
</script>

<style scoped>

	.search-box {
	  display: flex;
	  height: 100%;
	  align-items: center;
	  --wot-search-padding: 0;
	  --wot-search-side-padding: 0;
	  :deep() {
	    .wd-search {
	      background: transparent;
	    }
	  }
	}
	.botton-bar{
    position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		margin-bottom: 0;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
