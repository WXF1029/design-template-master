<!--
 * @Description: 首页
 * @Author: WXF
 * @Date: 2022-06-18 17:48:31
 * @LastEditTime: 2022-06-20 20:05:49
 * @LastEditors: WXF
-->
<template>
  <div class="main">
    <!-- 头部 -->
    <PageHeader />

    <div class="wrap flex">
      <div class="wrap-left">
        左部内容
        <!-- 文本、图片、形状组件 -->
      </div>
      <div class="wrap-center">
        <p class="title">画布区域</p>
        <div class="preview">
          <!-- 预览组件 -->
        </div>
      </div>
      <div class="wrap-right">
        右部内容
        <!-- 属性设置、图层设置、页面设置组件 -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

import PageHeader from '@c/pageHeader.vue'

defineComponent( {
  PageHeader
})

</script>

<style scoped lang="scss">

</style>
