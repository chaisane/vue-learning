<script setup lang="ts">
import { reactive, ref } from 'vue';

const items = ref([
    { message: 'Foo' },
    { message: 'Bar' }
])

const fullName = reactive([
    {
        firstName: 'John',
        lastName: 'Snow'
    },
    {
        firstName: 'Arya',
        lastName: 'Stark'
    },
])

const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10',
    reviewRate: null,
    price: '500'
})

</script>

<template>
    <!-- v-for loop array จะได้ object มาเก็บในตัวแปร item -->
    <div class="p-3">
        <h3>v-for="item in items"</h3>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>$item.message</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.message }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="p-3">
        <h3>v-for="(item, index) in items"</h3>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>$index</th>
                    <th>$item.message</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items">
                    <td>{{ index }}</td>
                    <td>{{ item.message }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- v-for loop array ดึง property ตามชื่อ ออกมาจาก object โดยตรง -->
    <div class="p-3">
        <h3>v-for="({ firstName, lastName }, index) in fullName"</h3>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>No. ($index + 1)</th>
                    <th>Full Name ($firstName $lastName)</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="({ firstName, lastName }, index) in fullName">
                    <td>{{ index + 1 }}</td>
                    <td>{{ firstName }} {{ lastName }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- v-for with an Object -->
    <div class="p-3">
        <h3>v-for="(value, key, index) in myObject"</h3>
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>$index</th>
                    <th>$key</th>
                    <th>$value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key, index) in myObject">
                    <td>{{ index }}</td>
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="container p-3 text-center">
        <div class="row g-0">
            <!-- v-for on <template>, v-for with v-if  -->
            <template v-for="(value, key, index) in myObject">
                <div class="col border" v-if="value">
                    <div class="border-bottom p-1 border-primary">#{{ index }}</div>
                    <div class="border-bottom p-1 border-primary">{{ key }}</div>
                    <div class="p-1">{{ value }}</div>
                </div>
            </template>
        </div>
    </div>

    <!-- v-for with a Range -->
    <div class="container p-3 text-center">
        <span class="border border-warning border-5"  v-for="n in 10">
            {{ n }}
        </span>
    </div>

</template>