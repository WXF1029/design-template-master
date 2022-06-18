<template>
  <div>
    <!-- 测试 pinia -->
    <div>{{ store.userName }}</div>
    <div>{{ userName }}</div>
    <div>{{ count }}</div>
    <button @click="onEditUserName">修改userName</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { appStore } from '../../store/index'

const store = appStore()
const { userName, count } = storeToRefs(store)

const onEditUserName = () => {
  store.updateUserName(132)
}

</script>

<style scoped lang="scss">

</style>
