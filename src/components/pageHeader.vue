<!--
 * @Description: 首页头部
 * @Author: WXF
 * @Date: 2022-06-20 19:25:44
 * @LastEditTime: 2022-06-20 19:57:49
 * @LastEditors: WXF
-->
<template>
  <div class="page-header flex">
    <div class="left">
      <span class="title">未命名作品</span>
    </div>
    <div class="right">
      <a-button type="primary" shape="round">预览和设置</a-button>
      <a-button type="primary" shape="round">保存</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 64px;
  overflow: hidden;
  background: #001529;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
  .title {
    font-size: 16px;
    color: #fff;
  }
  .ant-btn {
    margin-left: 15px;
  }
}
</style>
