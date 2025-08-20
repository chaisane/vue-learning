<script setup lang="ts">

function onAlert(msg: string) {
    alert(msg)
}

function onSubmit() {
    onAlert('Form submitted')
}
</script>

<template>
    <!-- Event Standard: click, submit etc.-->
    <!-- Event Modifiers: ทำให้เขียน event handling ง่ายขึ้น -->

    <!-- @click.stop กัน event ไม่ให้ส่งขึ้น parent -->
    <div @click="onAlert('Parent clicked')">
        Parent Div
        <button @click="onAlert('Button clicked')">Click Me</button>
        <button @click.stop="onAlert('Button clicked Only')">Click Me .stop</button>
    </div>

    <!-- ชั้นที่ 1 .capture จากนอกสุด ไป ในสุด -->
    <div @click="onAlert('Layer #1')" class="layer-grand">
        Layer #1

        <!-- ชั้นที่ 2 .self ทำงานเฉพาะคลิกตรงพื้นที่ตัวเอง -->
        <div @click="onAlert('Layer #2')" class="layer-parent">
            Layer #2

            <!-- ชั้นที่ 3 .stop กัน event ไม่ให้ส่งขึ้นลำดับถัดไป -->
            <div @click="onAlert('Layer #3')" class="layer-child">
                Layer #3
            </div>
        </div>
    </div>

    <button @click.once="onAlert('Pay Now')">One Click</button>

    <!-- @submit.prevent กัน reload หน้า -->
    <form @submit="onSubmit">
        <input :value="'Foo Bar'" />
        <button type="submit">Submit</button>
    </form>
    <form @submit.prevent="onSubmit">
        <input :value="'Foo Bar.prevent'" />
        <button type="submit">Submit</button>
    </form>


</template>

<style scoped>
.layer-grand {
    padding: 20px;
    background: #aaa;
}

.layer-parent {
    padding: 20px;
    background: #ccc;
}

.layer-child {
    padding: 20px;
    background: #eee;
}
</style>