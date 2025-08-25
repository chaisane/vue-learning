<script setup lang="ts">
import { ref, useTemplateRef, onMounted, computed } from 'vue'
import Child from './sub-components/Child.vue'


const myInput = useTemplateRef('myInput')
const childRef = useTemplateRef('childRef')

onMounted(() => {
    myInput.value?.focus()
    //childRef.value?.childTextRef?.focus()
});

const items = useTemplateRef('items') // array ของ elements
const randomIndex = ref(15)

function scrollTo(n: number) {
    if (items?.value) {
        const myItem = items.value[n - 1];
        myItem?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        myItem?.classList.add('bg-success', 'text-white') // ใส่ style ให้ item ที่เลือก
        scrollRandom()

        const otherItems = items.value.filter((el, i) => i !== (n - 1))
        otherItems.forEach(el => el.classList.remove('bg-success', 'text-white')) // ลบ style ออกจากตัวอื่น
    }
}

function scrollRandom() {
    randomIndex.value = Math.floor(Math.random() * 20) + 1
}

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Template Refs</h5>
            <p class="card-text">อ้างอิงถึง DOM หรือ component โดยตรงผ่าน ref</p>
        </div>
    </div>
    <!-- Template Refs: สำหรับ อ้างอิง DOM element หรือ child component โดยตรง -->
    <div class="row g-2 p-3">
        <div class="col-md">
            <div class="form-floating">
                <input class="form-control" placeholder="Type here...">
                <label>Type here...</label>
            </div>
        </div>
        <div class="col-md">
            <div class="form-floating">
                <input ref="myInput" class="form-control" placeholder="Type here...">
                <label>Focus Type here...</label>
            </div>
        </div>
    </div>

    <!-- Ref on Component -->
    <Child ref="childRef"></Child>

    <!-- Refs inside v-for -->
    <div class="p-3">
        <div class="my-items">
            <div v-for="n in 20" :key="n" ref="items" class="my-item">
                Item {{ n }}
            </div>
        </div>
        <br>
        <button @click="scrollTo(randomIndex)" class="btn btn-outline-success">Scroll to Item {{ randomIndex }}</button>
    </div>


</template>

<style scoped>
.my-items {
    height: 200px;
    overflow-y: auto;
    border: 1px solid gray;
}

.my-item {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
}
</style>