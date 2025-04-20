<script setup>
const props = defineProps({
  cat :{
    type: Object,
    required:true
  }
})
const emits = defineEmits(['back'])

</script>

<template>
猫咪细节页面{{cat.id}}

  <wd-button @click="emits('back');console.log(cat)">返回</wd-button>
</template>

<style scoped>

</style>