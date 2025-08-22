<script setup lang="ts">
// Passing Props
defineProps(['title'])
</script>

<template>
    <div class="col-6 card h-100 card-body">
        <h3>{{ title }}</h3>
    </div>
</template>