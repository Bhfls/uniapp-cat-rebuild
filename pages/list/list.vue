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

</script>

<template>

  <wd-row gutter="20" class="card-container">
    <wd-col :span="12"><view class="card">
      <view class="cat-image"></view>
<!--TODO:把图片加上，完善样式-->
    </view></wd-col>
    <wd-col :span="12"><view class="card">span: 8</view></wd-col>
    <wd-col :span="12"><view class="card">span: 8</view></wd-col>
  </wd-row>


</template>

<style scoped>
.card-container {


/*  background: antiquewhite;*/
}

.card{
  border-radius: 8px;
  min-height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.45);
  height: 200rpx;
  display: flex;
  overflow: hidden;
 /* background: #999999;*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.cat-image {
  margin-top:0;
  width: 100%;
  height: 60%;
  background: #cd1717;
}
</style>