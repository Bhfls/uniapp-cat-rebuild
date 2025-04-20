<script setup>
/**
 * @typedef {Object} CatItem
 * @property {number} id - 猫咪ID
 * @property {string} color - 猫咪颜色
 * @property {string} name - 猫咪名称
 * @property {string} description - 猫咪描述
 * @property {string} image - 猫咪头像
 * @property {string} state - 猫咪状态
 * @property {boolean} isNeutered - 猫咪是否绝育
 * @property {string} frequentlyFrequentedLocations - 猫咪常去地点
 * @property {boolean} isMale - 猫咪性别
 *
 * @type {import('vue').PropType<CatItem[]> }
 */

const props = defineProps({
  cats: {
    type:Array,
    required:true,
  }
},)
const emit = defineEmits(['catClick'])
const cardClick = (item) => {
  console.log(item)
  emit('catClick',item)
}
</script>

<template>

<view v-if="cats.length > 0" v-for="cat in cats" @click="cardClick(cat.id)">
<view class="cat-info">
  <wd-img :src="cat.image" round :height="40" :width="40"/>
  <view class="cat-info-name">{{cat.name}}</view>
</view>
  <wd-divider></wd-divider>
</view>
<wd-divider v-else>没有找到结果</wd-divider>
<!--<view v-else class="empty">
<wd-text text="没有找到结果"></wd-text>
</view>-->
</template>

<style scoped>
.cat-info-name{
  margin-left: 20rpx;

  font-size: 30rpx;
  font-weight: bold;
  margin-right: 20px;
  color: #000000;
/*  background: #b86363;*/
}

.cat-info{
  display: flex;
  width:100%;
 /* background: #b86363;*/
  align-items: center;
  padding-left: 30rpx;
}
.empty{
  display: flex;
  justify-content:center;
  margin-top: 20rpx;

}


</style>