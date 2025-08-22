<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './sub-components/BlogPost.vue';

const posts = ref([
    { no: 1, title: 'My journey with Vue' },
    { no: 2, title: 'Blogging with Vue' },
    { no: 3, title: 'Why Vue is so fun' }
])
</script>

<template>
    <div class="p-3">
        <BlogPost title="My journey with Vue" style="background-color: aquamarine;" />
        <BlogPost title="Blogging with Vue" style="background-color: aquamarine;" />
        <BlogPost title="Why Vue is so fun" style="background-color: aquamarine;" />

        <!-- <BlogPost v-for="post in posts" :title="post.title" :no="post.no" style="background-color: aqua;" /> -->

        <!-- <BlogPost v-for="post in posts" :post="post" style="background-color: darkcyan;" /> -->
    </div>
</template>