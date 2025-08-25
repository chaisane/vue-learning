<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Lifecycle Hooks</h5>
            <p class="card-text">ฟังก์ชันที่ทำงานตาม Lifecycle ของ component เช่น onMounted, onUnmounted</p>
        </div>
    </div>
</template>