<script setup lang="ts">
import { ref } from 'vue'

function onAlert(msg: string) {
    alert(msg)
}

function onSubmit() {
    onAlert('Form submitted')
}

const btnMsg = ref('One Click')

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Event Handling</h5>
            <p class="card-text">การจัดการ event เช่น @click, @input</p>
        </div>
    </div>
    <!-- Event Standard: click, submit etc.-->
    <!-- Event Modifiers: ทำให้เขียน event handling ง่ายขึ้น -->

    <!-- @click.stop กัน event ไม่ให้ส่งขึ้น parent -->
    <div class="col-12 card h-100 card-body">
        <div @click="onAlert('Parent clicked')" class="p-3 mb-2 bg-secondary text-white">
            <h3>Parent Div</h3>
            <button @click="onAlert('Button clicked')" class="btn btn-warning">Click Me</button>&nbsp;
            <button @click.stop="onAlert('Button clicked Only')" class="btn btn-success">Click Me .stop</button>
        </div>
    </div>

    <div class="col-12 card h-100 card-body">
        <!-- ชั้นที่ 1 .capture จากนอกสุด ไป ในสุด -->
        <div @click="onAlert('Layer #1')" class="layer-grand rounded">
            Layer #1

            <!-- ชั้นที่ 2 .self ทำงานเฉพาะคลิกตรงพื้นที่ตัวเอง -->
            <div @click="onAlert('Layer #2')" class="layer-parent rounded">
                Layer #2

                <!-- ชั้นที่ 3 .stop กัน event ไม่ให้ส่งขึ้นลำดับถัดไป -->
                <div @click="onAlert('Layer #3')" class="layer-child rounded">
                    Layer #3
                </div>
            </div>
        </div>
    </div>

    <div class="col-4 card h-100 card-body">
        <button @click.once="onAlert('Pay Now'), btnMsg = 'Lock Click'" class="btn btn-info">{{ btnMsg }}</button>
    </div>

    <!-- @submit.prevent กัน reload หน้า -->
    <div class="col-4 card h-100 card-body">
        <h4>Form</h4>
        <form @submit="onSubmit">
            <div class="input-group mb-3">
                <input type="text" class="form-control" :value="'reload'">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
        <form @submit.prevent="onSubmit">
            <div class="input-group mb-3">
                <input type="text" class="form-control" :value="'not reload'">
                <button type="submit" class="btn btn-primary">Submit.prevent</button>
            </div>
        </form>
    </div>

</template>

<style scoped>
.layer-grand {
    padding: 20px;
    background: #aaa;
    cursor: pointer;
}

.layer-parent {
    padding: 20px;
    background: #ccc;
    cursor: pointer;
}

.layer-child {
    padding: 20px;
    background: #eee;
    cursor: pointer;
}
</style>