<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './sub-components/BlogPost.vue';

const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
    <div class="p-3">
        <BlogPost style="background-color: aquamarine;" title="My journey with Vue" />
        <BlogPost style="background-color: aquamarine;" title="Blogging with Vue" />
        <BlogPost style="background-color: aquamarine;" title="Why Vue is so fun" />

        <BlogPost v-for="post in posts" :key="post.id" :title="post.title" style="background-color: aqua;" />
    </div>
</template>