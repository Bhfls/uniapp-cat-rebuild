<template>
  <wd-form ref="form" :model="model">
    <wd-cell-group border>
      <wd-input
          label="反馈类型"
          label-width="100px"
          prop="value1"
          clearable
          v-model="model.value1"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />


      <wd-textarea
          label="反馈说明"
          label-width="100px"
          prop="value3"
          clearable
          v-model="model.value3"
          placeholder="请填写反馈说明"
          auto-height
          :rules="[{required: true, message: '请填写反馈说明'}]" />
      <wd-input
          label="联系方式"
          label-width="100px"
          prop="value2"
          clearable
          v-model="model.value2"
          placeholder="请填写您的联系方式"
          :rules="[{ required: true, message: '请填写联系方式' }]"
      />
    </wd-cell-group>
    <view class="footer">
      <wd-button type="primary" size="large" @click="handleSubmit" block>提交</wd-button>
    </view>
  </wd-form>
</template>


<script setup>

  import { ref } from 'vue'
  const form = ref(null)
  const model = ref({
    value1: '',
    value2: '',
    value3: ''
  })
  const handleSubmit = () => {
   form.value
       .validate()
       .then(({valid, errors})=>
        consol.log(model.value.value3)
       )
       .catch(
        ({valid, errors})=>
        console.log(errors)

       )
  }
  const content = ref('')
</script>


<style>
.title{
  margin-left: 20rpx;
}
	       
</style>
<!-- TODO: 反馈页面 -->