<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

// Binding to Objects
const isActive = ref(true)
const hasError = ref(false)
const error = ref('error')

const classObject = reactive({
    active: true,
    'text-danger': false
})

const classObject1 = computed(() => ({
    active: isActive.value,
    'text-danger': error.value,
    'text-success': !error.value,
}))

// Binding to Arrays
const activeClass = ref('active')
const errorClass = ref('text-danger')
const successClass = ref('text-success')
const isError = ref(false)

// Binding to Objects
const activeColor = ref('blue')
const fontSize = ref(30)

// Binding to Objects
const styleObject = reactive({
    color: 'blue',
    fontSize: '30px'
})

const baseStyles = ref('color:green;')
const overridingStyles = ref('font-size: 30px;')
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Class and Style Bindings</h5>
            <p class="card-text">การ bind class และ style ของ element ตามเงื่อนไข</p>
        </div>
    </div>

    <!-- Binding HTML Classes -->
    <div class="col-12 card h-100 card-body">
        <div class="static" :class="{ active: isActive, 'text-danger': hasError }">Binding Class inline</div>
        <div :class="classObject">Binding Class object</div>
        <div :class="classObject1">Binding Class computed {{ error ? error : 'success!!!' }}</div>
    </div>
    <div class="col-12 card h-100 card-body">
        <div :class="[activeClass, errorClass]">Binding Class Arrays</div>
        <div :class="[isActive ? activeClass : '', errorClass]">Binding Class Arrays Expression</div>
        <div :class="[{ [activeClass]: isActive }, { [errorClass]: isError }, { [successClass]: !isError }]">Binding
            Class Arrays Object Syntax</div>
    </div>
    <!-- Binding Styles -->
    <div class="col-12 card h-100 card-body">
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Binding Inline Styles</div>
        <div :style="styleObject">Binding Object Styles</div>
        <div :style="[baseStyles, overridingStyles]">Binding Arrays Styles</div>
    </div>
</template>
