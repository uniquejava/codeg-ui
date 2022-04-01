<template>
  <div class="page">
    <a-button type="primary" @click="doSayHello">Hello <StarOutlined/></a-button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { StarOutlined } from '@ant-design/icons-vue';

const doSayHello = () => {
  message.info(`Hello world!`);
};
</script>

<style lang="less" scoped>
.page {
  padding: 10px;
}
</style>