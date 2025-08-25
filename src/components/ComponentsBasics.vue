<script setup lang="ts">
import { ref } from 'vue';
import BlogPost from './sub-components/BlogPost.vue';

const posts = ref([
    { no: 1, title: 'My journey with Vue' },
    { no: 2, title: 'Blogging with Vue' },
    { no: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1)
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Components Basics</h5>
            <p class="card-text">การสร้างและใช้งาน component เพื่อแยกโค้ดเป็นส่วน ๆ</p>
        </div>
    </div>
    <div class="p-3">
        <!-- Case#1 -->
        <BlogPost title="My journey with Vue" style="background-color: aquamarine;" />
        <BlogPost title="Blogging with Vue" style="background-color: aquamarine;" />
        <BlogPost title="Why Vue is so fun" style="background-color: aquamarine;" />

        <!-- Case#2 -->
        <!-- <BlogPost v-for="post in posts" :title="post.title" :no="post.no" style="background-color: aqua;" /> -->

        <!-- Case#3 -->
        <!-- <BlogPost v-for="post in posts" :post="post" style="background-color: darkcyan;" /> -->
    </div>

    <!-- Listening to Events -->
    <!-- <div class="p-3">
        <h5>FontSize: {{ Math.round(postFontSize * 100) / 100 }}</h5>
        <div :style="{ fontSize: postFontSize + 'em'  }">
            <BlogPost title="My Text" @enlarge-text="postFontSize += 0.1" />
        </div>
    </div> -->

</template>