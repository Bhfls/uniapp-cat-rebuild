<template>
  <view class="cat-item">
    <!-- 猫咪头像 -->
    <image 
      class="cat-avatar" 
      :src="cat.image || 'https://placehold.co/300x200?text=猫'" 
      mode="aspectFill"
      alt="猫咪头像"
    ></image>
    
    <!-- 猫咪名称 -->
    <view class="cat-name">{{ cat.name }}</view>
    
    <!-- 猫咪描述 -->
    <view class="cat-description">{{ cat.description }}</view>

  </view>
</template>

<script setup>
import { defineProps } from 'vue';
// import uniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.d.vue.ts';
//TODO:这个组件要手写，ai不靠谱
const props = defineProps({
  cat: {
    type: Object,
    required: true,
    validator(value) {
      return (
        typeof value === 'object' &&
        value.hasOwnProperty('id') &&
        value.hasOwnProperty('name') &&
        value.hasOwnProperty('description') &&
        value.hasOwnProperty('image') &&
        value.hasOwnProperty('likes') &&
        value.hasOwnProperty('comments')
      );
    }
  }
});
</script>

<style scoped>
.cat-item {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}

.cat-avatar {
  width: 100%;
  height: 200px;
}

.cat-name {
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
}

.cat-description {
  font-size: 16px;
  color: #666;
  padding: 0 16px 16px;
}

.cat-stats {
  display: flex;
  padding: 0 16px 16px;
}

.cat-like, .cat-comment {
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: #999;
}

.cat-like .uni-icons, .cat-comment .uni-icons {
  margin-right: 4px;
}
</style>
