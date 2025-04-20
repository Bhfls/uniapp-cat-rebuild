<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['back'])

</script>

<template>
猫咪细节页面{{props.id}}
  <wd-button @click="emits('back')">返回</wd-button>
</template>

<style scoped>

</style>