<template>
  <wd-form ref="form" :model="model">
    <wd-cell-group border>
      <wd-picker
          :columns="feedbackTypes"
          label="反馈类型"
          label-width="100px"
          v-model="model.feedbackType"
          />


      <wd-textarea
          label="反馈说明"
          label-width="100px"
          prop="value3"
          clearable
          v-model="model.description"
          placeholder="请填写反馈说明"
          auto-height
          />
      <wd-input
          label="联系方式"
          label-width="100px"
          prop="value2"
          clearable
          v-model="model.contact"
          placeholder="请填写您的联系方式"

      />
      <!--TODO:增加图片-->
    </wd-cell-group>
    <view class="footer">
      <wd-button type="primary" size="large" @click="handleSubmit" block>提交</wd-button>
    </view>
  </wd-form>
</template>


<script setup>

  import { ref } from 'vue'
  const feedbackTypes = ref(["猫咪特殊情况","日常运营建议","故事分享"])
  const form = ref(null)
  const model = ref({
    feedbackType: '',
    description: '',
    contact: ''
  })

  const handleSubmit = () => {
    if (model.value.feedbackType === ''){
        uni.showToast({
			title: '请选择反馈类型',
			icon: 'none'
		})

	}
	else if (model.value.description === ''){
        uni.showToast({
			title: '请填写反馈说明',
			icon: 'none'
		})

	}
  else if (model.value.contact === ''){
        uni.showModal({
			title: '请填写联系方式',
			icon: 'none'
		})

	}
  else {
    uni.showModal({
      title: '提交成功',
      content: '感谢您的反馈，我们会尽快处理',
    })
      model.value = {
        feedbackType: '',
        description: '',
        contact: ''
      }
    console.log(model.value)
//TODO: 提交反馈到服务器
  }
}
  const content = ref('')
</script>


<style>

</style>
