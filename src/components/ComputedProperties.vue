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
const checkBooksByComputed = computed(() => {
    console.log('CheckBooksBy"Computed", length: ', (author.books.length))
    return author.books.length % 2 === 0 ? 'Even' : 'Odd'
})

function checkBooksByMethod() {
    console.log('CheckBooksBy"Method" length: ' + (author.books.length))
    return author.books.length % 2 === 0 ? 'Even' : 'Odd'
}

function addBook() {
    author.books.push('Vue 5 - The Temp')
}

</script>

<template>
    <!-- Computed Caching vs. Methods -->
    <p>Has books: {{ author.books.length }}</p>
    <span>CheckBooksBy"Computed"#1: {{ checkBooksByComputed }}</span><br>
    <span>CheckBooksBy"Computed"#2: {{ checkBooksByComputed }}</span><br>
    <span>CheckBooksBy"Method"#1: {{ checkBooksByMethod() }}</span><br>
    <span>CheckBooksBy"Method"#2 {{ checkBooksByMethod() }}</span><br>
    <button @click="addBook">Add Book</button>
</template>