<script setup lang="ts">
// Case#1, 2 (title, no)
defineProps(['title'])

// Case#3
// defineProps<{
//     title?: string
//     post?: { no: number; title: string }
// }>()

// Listening to Events
// defineEmits(['enlarge-text'])
</script>

<template>
    <div class="col-6 card h-100 card-body">
        <!-- Case#1 -->
        <h3>{{ title }}</h3>

        <!-- Case#2 -->
        <!-- <h3>{{ no ? no + '. ' : '' }} {{ title }}</h3> -->

        <!-- Case#3 -->
        <!-- <h3 v-if="post">{{ post.no ? post.no + '. ' : '' }} {{ post.title }}</h3> -->

        <!-- Listening to Events -->
        <!-- <button @click="$emit('enlarge-text')" >{{ title }}</button> -->
    </div>

</template>