<script setup lang="ts">
import { ref } from 'vue';

const good = ref(true)
const type = ref('A')

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Conditional Rendering</h5>
            <p class="card-text">การแสดง/ซ่อน element ด้วย v-if, v-show</p>
        </div>
    </div>
    <!-- v-if,  v-else -->
    <div class="col-12 card h-100 card-body">
        <div class="p-3">
            <button @click="good = !good" class="btn btn-primary">Toggle {{ good }}</button>
            <h1 v-if="good">Vue is good!</h1>
            <h1 v-else>Oh no 😢</h1>
        </div>
    </div>
    <!-- v-else-if, v-else -->
    <div class="col-12 card h-100 card-body">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <a class="nav-link" :class="{ active: type === 'A' }" @click="type = 'A'">Type A</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" :class="{ active: type === 'B' }" @click="type = 'B'">Type B</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" :class="{ active: type === 'C' }" @click="type = 'C'">Type C</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" :class="{ active: type === 'X' }" @click="type = 'X'">Type X</a>
            </li>
        </ul>
        <div v-if="type === 'A'" class="p-3">
            A
        </div>
        <div v-else-if="type === 'B'" class="p-3">
            B
        </div>
        <div v-else-if="type === 'C'" class="p-3">
            C
        </div>
        <div v-else class="p-3">
            Not A/B/C
        </div>
    </div>
    <!-- v-if on <template> (สร้าง/ลบ element จริงใน DOM) -->
    <template v-if="type === 'X'">
        <div class="col-12 card h-100 card-body">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </div>
    </template>
    <!-- render element ไว้เสมอ แต่สลับด้วย display: none -->
    <div class="p-3">
        <h1 v-show="type === 'X'">Hello!</h1>
    </div>
</template>