<script setup lang="ts">
import { computed, reactive, ref, vModelCheckbox } from 'vue';

const isActive = ref(false)
const hasError = ref(false)
const message = ref(null)


</script>

<template>
    isActive
    <input type="checkbox" v-model="isActive" >OK</input>
    <button @click="isActive = true">True</button>
    <button @click="isActive = false">False</button><br>
    hasError
    <button @click="hasError = true">True</button>
    <button @click="hasError = false">False</button>
    <div v-if="isActive">
        <span v-if="!hasError" class="text-success">Message Success</span>
        <span v-if="hasError" class="text-danger">Message Error</span>
    </div>

    <div class="static" :class="{ 'd-none': isActive, 'text-danger': hasError, 'text-success': !hasError }">Message {{
        message }}</div>
</template>

Tab