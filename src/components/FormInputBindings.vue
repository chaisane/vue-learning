<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

const text = ref('')
const textarea = ref('')
const isChecked = ref(false)
const checkedNames = ref([])
const picked = ref('')
//const selected = ref([])

const dogs = reactive([
    { type: 'Golden Retriever', checked: true },
    { type: 'Shih Tzu', checked: false },
    { type: 'Siberian Husky', checked: false },
])

const checkedDogs = computed(() => {
    return dogs.filter(dog => dog.checked).map(dog => dog.type)
})

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]



const selected = ref('')

const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
])

const toggle = ref(true)
const pick = ref('first')
const first = ref('first')
const second = ref('second')

</script>
<template>

    <div class="col-12 card h-100 card-body">
        <!-- Basic Usage -->
        <div class="mb-3">
            <label class="form-label">Message is: </label> {{ text }}
            <input v-model="text" class="form-control" placeholder="example">
        </div>
        <!-- Multiline Text -->
        <div class="mb-3">
            <label class="form-label">Multiline message is: </label> {{ textarea }}
            <textarea v-model="textarea" class="form-control" rows="3"></textarea>
        </div>
    </div>

    <!-- Checkbox -->
    <div class="col-12 card h-100 card-body">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="checkbox" v-model="isChecked">
            <label class="form-check-label">
                {{ isChecked }}
            </label>
        </div>
    </div>

    <div class="col-12 card h-100 card-body">
        <div class="mb-3">
            <label class="form-label">Checked dogs: </label> {{ checkedDogs }}
        </div>
        <template v-for="dog in dogs">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" :value="dog.type" v-model="dog.checked" />
                <label class="form-check-label">{{ dog.type }}</label>
            </div>
        </template>
    </div>

    <!-- Radio: same 'name' = one choice in group -->
    <div class="p-3">
        <div class="mb-3">
            <label class="form-label">Picked day: </label> {{ picked }}
        </div>
        <template v-for="(day, index) in days">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="radioOptions" :value="day" v-model="picked"
                    :disabled="5 <= index">
                <label class="form-check-label" for="radio1">{{ day }}</label>
            </div>
        </template>
    </div>

    <!-- Select single/multiple -->
    <div class="col-4 card h-100 card-body">
        <div class="mb-3">
            <label class="form-label">selected value: </label> {{ selected }}
        </div>
        <select class="form-select" v-model="selected">
            <option value="" disabled>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>

<style scoped>
.form-label {
    color: #e74e07;
    font-weight: bold;
}
</style>