<script setup lang="ts">

import { reactive } from 'vue';
import { computed } from 'vue';

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
    console.log('publishedBooksMessage (computed): ' + (author.books.length))
    return author.books.length % 2 === 0 ? 'Even' : 'Odd'
})

function getBooksMessage() {
    console.log('getBooksMessage (method): ' + (author.books.length))
    return author.books.length % 2 === 0 ? 'Even' : 'Odd'
}

function addBook() {
    author.books.push('Vue 5 - The Temp')
}

</script>

<template>
    <!-- Computed Caching vs. Methods -->
    <p>Has published books: {{ author.books.length }}</p>
    <span>publishedBooksMessage#1 (computed): {{ publishedBooksMessage }}</span><br>
    <span>publishedBooksMessage#2 (computed): {{ publishedBooksMessage }}</span><br>
    <span>getBooksMessage#1 (method): {{ getBooksMessage() }}</span><br>
    <span>getBooksMessage#2 (method): {{ getBooksMessage() }}</span><br>
    <button @click="addBook">Add Book</button>
</template>