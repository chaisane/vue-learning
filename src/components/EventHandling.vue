<script setup lang="ts">
import { ref } from 'vue';


function onAlert(msg: string) {
    alert(msg)
}

function onSubmit() {
    onAlert('Form submitted')
}
</script>

<template>
    <!-- Event Standard: click, submit, blur, keyup, input อื่นๆ -->
    <!-- Event Modifiers: ทำให้เขียน event handling ง่ายขึ้น -->

    <!-- @click.stop > กัน event ไม่ให้ส่งขึ้น parent -->
    <div @click="onAlert('Parent clicked')">
        Parent Div
        <button @click="onAlert('Button clicked')">Click Me</button>
        <button @click.stop="onAlert('Button clicked')">Click Me .stop</button>
    </div>

    <button @click.once="onAlert('once clicked')">Once clicked</button>


    <!-- @submit.prevent > กัน reload หน้า -->
    <form @submit="onSubmit">
        <input :value="'Foo Bar'" />
        <button type="submit">Submit</button>
    </form>
    <form @submit.prevent="onSubmit">
        <input :value="'Foo Bar.prevent'" />
        <button type="submit">Submit</button>
    </form>

    <!-- ชั้นที่ 1 -->
    <div @click="onAlert('Layer #1')" style="padding:20px; background:#ccc">
        Grand (เทา)

        <!-- ชั้นที่ 2 -->
        <div @click.self="onAlert('Layer #2')" style="padding:20px; background:#aaa; margin-top:10px">
            Parent (เทาเข้ม / มี .self)

            <!-- ชั้นที่ 3 -->
            <button @click.stop="onAlert('Layer #3')" style="margin-top:10px">
                Child (มี .stop)
            </button>
        </div>
    </div>
</template>