<script setup lang="ts">
const msg = 'HelloWorld';
const rawHtml =
    'Using text interpolation: <span style="color: red">This should be red.</span>';
const dynamicId = 'myID';
const id = 'myID';
const isButtonDisabled = true;
const disabled = true;
const objectOfAttrs = {
    id: 'container',
    class: 'text-white-50 bg-green',
    style: 'background-color:green',
};
const number = 0;
const message = 'Using JavaScript Expressions';
const seen: boolean = true;
const names = ['A', 'B', 'C'];
const url: string = 'https://vuejs.org/';
const eventName = 'click';

function toTitleDate(d: Date) {
    return d.toDateString();
}

function formatDate(d: Date) {
    return d.toLocaleDateString();
}

const date = new Date();

function onAlert(ok: string) {
    alert(ok);
}

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Template Syntax</h5>
            <p class="card-text">ไวยากรณ์ที่ใช้ใน {{ '<template>' }} เช่น การ bind ค่า, แสดงตัวแปร</p>
        </div>
    </div>
    <div class="col-12 card h-100 card-body">
        <!-- Text Interpolation-->
        <span>Message: {{ msg }}</span>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Raw HTML-->
        <p>Using text interpolation: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Attribute Bindings ใช้ได้กับ attribute ใด ๆ เช่น :src, :href, :class, :style-->
        <div v-bind:id="dynamicId">ID Elememt</div>
        <div :id="dynamicId">ID Elememt Shorthand</div>
        <div :id>ID Elememt Same-name Shorthand</div>
    </div>

    <div class="col-3 card h-100 card-body">
        <!--Boolean Attributes-->
        <button :disabled="isButtonDisabled" type="button" class="btn btn-info">Button</button>
        <br />
        <button :disabled type="button" class="btn btn-info">Button Same-name Shorthand</button>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Dynamically Binding Multiple Attributes -->
        <div v-bind="objectOfAttrs">Dynamically Binding Multiple Attributes</div>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Using JavaScript Expressions-->
        <p>{{ number + 1 }}</p>

        <p>{{ isButtonDisabled ? "ButtonDisabled: YES" : "ButtonDisabled: NO" }}</p>

        <p>{{ message.split("").reverse().join("") }}</p>

        <div :id="`list-${id}`">
            {{ `Using "${id}" JavaScript Expression` }}
        </div>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Calling Functions-->
        <time :title="toTitleDate(date)" :datetime="date.toISOString()">
            {{ formatDate(date) }}
        </time>
    </div>


    <div class="col-12 card h-100 card-body">
        <!-- Restricted Globals Access -->
        <p>globalProperties: {{ $appName }}</p>
    </div>


    <div class="col-12 card h-100 card-body">
        <!--Directives -->
        <p v-if="seen">Now you see me</p>
        <ul v-for="name of names">
            <li>{{ name }}</li>
        </ul>
    </div>

    <div class="col-12 card h-100 card-body">
        <!--Arguments-->
        <a :href="url">Click link</a>
        <div style="margin-top: 10px">
            <!-- v-on:click -->
            <button @click="onAlert('OK On Click!!!')" type="button" class="btn btn-primary">
                On @Click
            </button>
        </div>
        <div style="margin-top: 10px">
            <button @[eventName]="onAlert('OK On eventName!!!')" type="button" class="btn btn-primary">
                On @[eventName]
            </button>
        </div>
    </div>
</template>

<style scoped></style>