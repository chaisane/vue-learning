<script setup lang="ts">
import { reactive, ref } from 'vue'

const countA = 0
console.log('countA: ', countA)

// ใช้ ref() เหมาะกับค่าพื้นฐาน (number, string, boolean) หรือ object/array เล็ก ๆ
const countB = ref(0)
console.log('countB: ', countB)
function increment() {
    countB.value++
    console.log('countB.value', countB.value)
}

const obj = ref({
    num: { count: 0 },
    arr: ['A', 'B']
})

function manageObject() {
    obj.value.num.count++;
    obj.value.arr.push('C')
}


// ใช้ reactive() เมื่อเก็บ object/array ซับซ้อน หรือ Map, Set
const book = reactive({
    title: 'Clean Code',
    author: {
        name: 'Robert C. Martin',
        age: 70
    },
    publishedYear: 2008,
    categories: ['Programming', 'Software Engineering'],
    stock: 3,
    reviews: [
        { user: 'Alice', rating: 5, comment: 'Must-read for developers!' },
        { user: 'Bob', rating: 4, comment: 'Great but a bit long.' }
    ]
})

function addReview(user: string, rating: number, comment: string) {
    book.reviews.push({ user, rating, comment })
}

function restock(amount: number) {
    book.stock += amount
}

function sellOne() {
    if (book.stock > 0) book.stock--
}

// function craeteBook() {
//     return {
//         title: 'Clean Code',
//         author: {
//             name: 'Robert C. Martin',
//             age: 70
//         },
//         publishedYear: 2008,
//         categories: ['Programming', 'Software Engineering'],
//         stock: 3,
//         reviews: [
//             { user: 'Alice', rating: 5, comment: 'Must-read for developers!' },
//             { user: 'Bob', rating: 4, comment: 'Great but a bit long.' }
//         ]
//     }
// }

// const book = reactive(craeteBook())

// function reset() {
//     Object.assign(book, craeteBook())
// }

</script>

<template>
    <!-- Declaring Reactive State -->
    <div class="col-12 card h-100 card-body">
        <div class="p-3">
            <button @click="countA++" class="btn btn-warning btn-sm ms-2"> countA++ </button> = {{ countA }}
            <button @click="countB++" class="btn btn-success btn-sm ms-2"> countB++ </button> = {{ countB }}
            <button @click="increment" class="btn btn-success btn-sm ms-2"> increment</button> = {{ countB }}
        </div>
    </div>
    <!-- Deep Reactivity -->
    <div class="col-12 card h-100 card-body">
        <div class="p-3">
            <button @click="manageObject" class="btn btn-primary btn-sm mt-2">Manage Object</button>
            <pre>{{ JSON.stringify(obj, null, 2) }}</pre>
        </div>
    </div>
    <!-- reactive() -->
    <div class="col-12 card h-100 card-body">
        <div class="p-3">
            <h2>{{ book.title }}</h2>
            <p><b>Author:</b> {{ book.author.name }} ({{ book.author.age }})</p>
            <p><b>Year:</b> {{ book.publishedYear }}</p>
            <p><b>Categories:</b> {{ book.categories.join(', ') }}</p>
            <p><b>Stock:</b> {{ book.stock }}</p>

            <button @click="sellOne" class="btn btn-danger btn-sm">Sell One</button>
            <button @click="restock(5)" class="btn btn-success btn-sm ms-2">Restock +5</button>

            <h4 class="mt-3">Reviews</h4>
            <ul>
                <li v-for="(r, i) in book.reviews" :key="i">
                    ⭐ {{ r.rating }}/5 - {{ r.comment }} <i>by {{ r.user }}</i>
                </li>
            </ul>

            <button @click="addReview('Charlie', 5, 'Excellent!')" class="btn btn-primary btn-sm mt-2">
                Add Review (Charlie)
            </button>
            <!-- <button @click="reset" class="btn btn-basic btn-sm mt-2">
                Reset
            </button> -->
        </div>
    </div>
</template>
