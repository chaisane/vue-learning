<script setup lang="ts">

import { reactive, ref } from 'vue';
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

// Writable Computed: getter, setter
const amount = ref<number>(100)
const amountFormat = computed<string>({
    get(): string {
        return new Intl.NumberFormat('en-US').format(amount.value) + ' Baht.'
    },
    set(newValue: string) {
        const numericValue = Number(String(newValue).replace(/[^\d]/g, ''))
        amount.value = numericValue
    }
})

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Computed Properties</h5>
            <p class="card-text">ค่าที่คำนวณอัตโนมัติจาก state และ cache ผลลัพธ์ไว้</p>
        </div>
    </div>

    <!-- Computed Caching vs. Methods -->
    <div class="col-12 card h-100 card-body">
        <p>Has books: {{ author.books.length }}</p>
        <span>CheckBooksBy"Computed"#1: {{ checkBooksByComputed }}</span><br>
        <span>CheckBooksBy"Computed"#2: {{ checkBooksByComputed }}</span><br>
        <span>CheckBooksBy"Method"#1: {{ checkBooksByMethod() }}</span><br>
        <span>CheckBooksBy"Method"#2 {{ checkBooksByMethod() }}</span><br>
        <div class="d-grid gap-2 d-md-block">
            <button @click="addBook" class="btn btn-outline-success">Add Book</button>
        </div>
    </div>

    <div class="col-12 card h-100 card-body">
        <p>Amount: {{ amount }}</p>
        <p>AmountFormat: {{ amountFormat }}</p>
        <div class="d-grid gap-2 d-md-block">
            <button @click="amount = amount * 10" class="btn btn-primary">amount x 10</button>&nbsp;
            <button @click="amountFormat = '987,654,321'" class="btn btn-primary">987,654,321 Baht.</button>&nbsp;
            <button @click="amount = 100" class="btn btn-primary">Reset 100</button>&nbsp;
        </div>
    </div>

</template>