<template>
	<view class="content">


    <!-- 新增：根据activePage显示对应的页面内容 -->
    <view v-if="activePage === 0" class="full-width-container">
      <!--搜索框-->
      <wd-navbar >
        <template #title>
          <view class="search-box">
            <wd-search v-model="keyword" @search="search" @clear="search" hide-cancel placeholder-left></wd-search>
          </view>
        </template>
      </wd-navbar>
      <list :cats="catData" @catClick="catClick"></list>

    </view>

    <!--------------------------------------------------->

    <view v-else-if="activePage === 1" class="full-width-container">
      <!-- TODO：支持页面内容 -->
      <support></support>
    </view>

    <!--------------------------------------------------->

    <view v-else-if="activePage === 2">

      <feedback></feedback>
    </view>

    <!---------------------------------------------------->

    <view v-else-if="activePage === 3" class="full-width-container">
      <!-- TODO：详细信息页面内容 -->
      <detail :cat="activeCat" @back="activePage=0;activeCat=null"></detail>
    </view>

    <!---------------------------------------------------->

	</view>
  <BottomBar class="botton-bar" @page="handlePageChange"></BottomBar>
</template>

<script setup>
import BottomBar from "../../componets/bottom-bar/BottomBar.vue"; // 修正components路径拼写
import detail from "../detail/detail.vue";
import feedback from "../feedback/feedback.vue";
import List from "../list/list.vue";
import support from "../support/support.vue";

import { ref } from 'vue';

import { cats } from "../../data/data.js";
const fullCatData = cats
const catData = ref(fullCatData)
const keyword = ref("")

	const search = () => {
		if (keyword.value === "") {
       catData.value = fullCatData
		} else {
			catData.value = fullCatData.filter(item => item.name.includes(keyword.value))
    }
	}

	// 新增：记录当前选中的页面索引
	const activePage = ref(0);
  const activeCat= ref(null);//记录当前选中的猫
  const catClick = (item) => {
    console.log(item,"from index")
    activeCat.value = fullCatData.find(cat => cat.id === item)
    activePage.value = 3
  }

	// 新增：处理页面切换事件
	const handlePageChange = (index) => {
	  activePage.value = index;
	};
</script>

<style scoped>
	/* 修改：在content样式中添加padding-bottom以避免被底部栏遮挡 */
.full-width-container{
/*  background: #007aff;*/
  width: 100%;

}
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
		padding-bottom: 100rpx; /* 根据底部栏高度调整 */

	}

</style>
