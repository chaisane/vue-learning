<script setup>
import { ref } from 'vue'

const countA = 0;
console.log('countA: ', countA);

// ใช้ ref เหมาะกับค่าพื้นฐาน (number, string, boolean) หรือ object/array เล็ก ๆ
const countB = ref(0);
console.log('countB: ', countB);
function increment() {
    countB.value++
    console.log('countB.value', countB.value);
}

const obj = ref({
    num: { count: 0 },
    arr: ['A', 'B']
});

function manageObject() {
    obj.value.num.count++;
    obj.value.arr.push('C');
}

const objArr = ref([
    {
        num: { count: 0 },
        arr: ['A', 'B']
    },
    {
        num: { count: 10 },
        arr: ['X', 'Y']
    }
]);

console.log('objArr: ', objArr.value[1].arr[0]);

</script>

<template>
    <!-- Declaring Reactive State -->
    <div class="col-12 card h-100 card-body">
        <button @click="countA++"> increment A </button> = {{ countA }}
        <button @click="countB++"> increment B </button> = {{ countB }}
        <button @click="increment()"> increment() B </button> = {{ countB }}
    </div>
    <!-- Deep Reactivity -->
    <div class="col-12 card h-100 card-body">
        <button @click="manageObject()">Manage Object</button>
        <pre>{{ JSON.stringify(obj, null, 2) }}</pre>
    </div>
</template>
