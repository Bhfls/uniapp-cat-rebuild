<template>
	<view class="content">


    <!-- 新增：根据activePage显示对应的页面内容 -->
    <view v-if="activePage === 0">
<!--      搜索框-->
      <wd-navbar >
        <template #title>
          <view class="search-box">
            <wd-search v-model="keyword" @search="change" hide-cancel placeholder-left></wd-search>
          </view>
        </template>
      </wd-navbar>
      <list :cats="catdata"></list>
      <!-- TODO：名册页面内容 -->
    </view>
    <view v-else-if="activePage === 1">
      <!-- TODO：支持页面内容 -->
      支持我们
    </view>
    <view v-else-if="activePage === 2">
      <!-- TODO：反馈页面内容 -->
      <feedback></feedback>
    </view>
	</view>
  <BottomBar class="botton-bar" @page="handlePageChange"></BottomBar>
</template>

<script setup>
	import BottomBar from "../../componets/bottom-bar/BottomBar.vue";
  import feedback from "../feedback/feedback.vue"
  import index from "../list/list.vue"
	import { ref } from 'vue'
  import List from "../list/list.vue";
  import { cats } from "../../data/data.js";
  const catdata = ref(cats)
	const keyword = ref("")//TODO:搜索框绑定变量


	const change = () => {
		console.log(keyword.value)
	}

	// 新增：记录当前选中的页面索引
	const activePage = ref(0);
//TODO:添加页面：支持
	// 新增：处理页面切换事件
	const handlePageChange = (index) => {
	  activePage.value = index;
	};
</script>

<style scoped>
	/* 修改：在content样式中添加padding-bottom以避免被底部栏遮挡 */

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
