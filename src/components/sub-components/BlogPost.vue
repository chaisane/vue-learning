<script setup lang="ts">
// Passing Props
defineProps(['title'])

// defineProps<{
//     title?: string
//     post?: { no: number; title: string }
// }>()
</script>

<template>
    <div class="col-6 card h-100 card-body">
        <h3>{{ title }}</h3>
        <!-- <h3>{{ no ? no + '. ' : '' }} {{ title }}</h3> -->
        <!-- <h3 v-if="post">{{ post.no ? post.no + '. ' : '' }} {{ post.title }}</h3> -->
    </div>
</template>