<script setup>
import {onMounted, onUnmounted, ref,onBeforeMount} from 'vue'
const props = defineProps({
  cat :{
    type: Object,
    required:true
  }
})
const emits = defineEmits(['back'])
const currentCat = ref(0)
const swiper = ref(props.cat.detail_images)

const handleClick = (e) => {
  console.log(e)
}
const onChange = (e) => {
  console.log(e)
}
</script>

<template>
  <wd-navbar :title="cat.name" left-text="返回" left-arrow @click-left="emits('back')"></wd-navbar>
  <wd-swiper :list="swiper" autoplay v-model:current="currentCat" @click="handleClick" @change="onChange"></wd-swiper>
  <wd-row>
    <wd-col :span="12"><view class="detail-container name">{{cat.name}}</view></wd-col>
    <wd-col :span="12"></wd-col>
    <wd-col :span="24"><view class="describe detail-container ">{{cat.description}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">状态：</text>{{cat.state}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">颜色：</text>{{cat.color}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">绝育状态:</text>{{cat.isNeutered?'已绝育':'未绝育'}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">性别：</text>{{cat.isMale?'公猫':'母猫'}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">首次目击：</text>{{cat.first_seen}}</view></wd-col>
    <wd-col :span="12"><view class="detail-container attrib"><text class="attrib-name">常出现位置：</text>{{cat.frequentlyFrequentedLocations}}</view></wd-col>


  </wd-row>
</template>

<style scoped>
.name {
  font-size: 36rpx;
  color: black;
  font-weight: bold;
  text-align: left;
  padding-left: 20px;
}
.describe{
  font-size: 12px;
  color: #999999;
  text-align: center;
  padding-top: 5px;
}
.attrib-name{
  font-size: 8px;
  color: #999999;
}
.attrib{
  text-align: center;
  font-weight: bold;
  font-size: 12px;
}
.detail-container{
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 4px;
  min-height: 30px;

  line-height: 30px;

  margin-bottom: 10px;

}

</style>