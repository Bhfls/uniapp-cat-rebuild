<template>
	<view class="container">
		<wd-row>
		  <wd-col :span="8">
        <!-- 修改第一个wd-col结构，添加点击事件并调整布局 -->
        <view class="navbar-item" @click="handleItemClick(0)">
          <wd-icon name="home" size="20" :color="activeIndex === 0 ? 'green' : '#666'"></wd-icon>
          <wd-text text="名册" class="text" :style="{ color: activeIndex === 0 ? 'green' : '#666', fontSize: '10px' }"></wd-text>
        </view>
      </wd-col>

		  <wd-col :span="8"><view class="navbar-normal">支持我们</view></wd-col>



		  <wd-col :span="8">
        <!-- 新增：对第三个col应用相同交互和样式 -->
        <view class="navbar-item" @click="handleItemClick(2)">
          <wd-icon name="view-module" size="20" :color="activeIndex === 2 ? 'green' : '#666'"></wd-icon>
          <wd-text text="反馈" class="text" :style="{ color: activeIndex === 2 ? 'green' : '#666', fontSize: '10px' }"></wd-text>
        </view>
      </wd-col>
		</wd-row>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['page']);
const activeIndex = ref(0); // 新增：记录当前选中索引

// 新增：处理点击事件
const handleItemClick = (index) => {
  activeIndex.value = index;
  emit('page', index);
};

</script>

<style scoped>
.navbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  margin-top: 4px;
  font-size: 10px;
}

	       .container{
           height: 100%;
           background-color: #f6f5f5;
         }
         .navbar-normal{
	         min-height: 30px;
	         text-align: center;
	         line-height: 30px;
	         font-size: 12px;
	         margin-bottom: 0;

	       }

         wd-row{
           position: fixed;
           bottom: 0;
           width: 100%;
           height: 100%;
           background: rgba(255, 255, 255, 0.82);
         }
         wd-col{
           height: 100%;

         }
</style>

