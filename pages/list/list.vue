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
  cats:{
    type: Array,
    required: true,
    validator(value, props) {
      value.every(item =>
        typeof item === 'object' &&
        item.hasOwnProperty('id') && typeof item.id === 'number' &&
        item.hasOwnProperty('name') && typeof item.name === 'string' && item.name.length > 0 &&
        item.hasOwnProperty('color') && typeof item.color === 'string' && item.color.length > 0 &&
        item.hasOwnProperty('description') && typeof item.description === 'string' && item.description.length > 0 &&
        item.hasOwnProperty('color') && typeof item.color === 'string' && item.color.length > 0 &&
        item.hasOwnProperty('image') && typeof item.image === 'string' && item.image.length > 0 &&
        item.hasOwnProperty('state') && typeof item.state === 'string' && item.state.length > 0 &&
        item.hasOwnProperty('isNeutered') && typeof item.isNeutered === 'boolean' &&
        item.hasOwnProperty('frequentlyFrequentedLocations') && typeof item.frequentlyFrequentedLocations === 'string' && item.frequentlyFrequentedLocations.length > 0 &&
        item.hasOwnProperty('isMale') && typeof item.isMale === 'boolean'
      )
    }
  }
})
import CatItem from "../../componets/bottom-bar/CatItem.vue";
</script>

<template>
<view>
  <view v-for="cat in cats" :key="cat.id">
    <CatItem :cat="cat" :key="cat.id"></CatItem>
  </view><!-- TODO: 展示页面 -->
</view>

</template>

<style scoped>

</style>