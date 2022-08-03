<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
  <div class="test-viewport">测试转换</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
  console.log('submit', values);
};
</script>

<style scoped>
.van-form {
  width: 100vw;
}

.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
</style>
