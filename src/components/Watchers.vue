<script setup lang="ts">
import { reactive, ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const image = ref(null)

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    image.value = null
    if (newQuestion.includes('?')) {
        loading.value = true
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            const reponseObj = await res.json()
            if (reponseObj) {
                answer.value = reponseObj.answer
                image.value = reponseObj.image
            }
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

const userForm = reactive({
    name: 'John Wick',
    profile: {
        age: 25,
        address: {
            city: 'Bangkok',
            zipcode: '10110'
        }
    }
})

watch(userForm, (newVal) => {
    console.log('Form changed:', newVal)
    // เauto-save localStorage
    localStorage.setItem('userForm', JSON.stringify(newVal))
})

const todoId = ref(1)
const data = ref(null)

watch(todoId, async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    data.value = await response.json()
},
    { immediate: true }  // callback รันทันที
)
</script>

<template>
    <div class="col-12 card h-100 card-body">
        <p> Ask a yes/no question:
            <input v-model="question" :disabled="loading" />
        </p>
        <p>{{ answer }}</p>
        <img v-if="image" :src="image" class="img-fluid" style="max-width:30%">
    </div>

    <div class="p-3">
        <h3>Edit User</h3>
        <input v-model="userForm.name" placeholder="Name" />
        <input v-model="userForm.profile.age" type="number" placeholder="Age" />
        <input v-model="userForm.profile.address.city" placeholder="City" />
        <input v-model="userForm.profile.address.zipcode" placeholder="Zipcode" />
    </div>

    <div class="col-12 card h-100 card-body">
        <p> todoId: <input type="number" v-model="todoId" /></p>
        data: {{ data }}
    </div>

</template>