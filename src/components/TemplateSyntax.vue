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
  class: 'wrapper',
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
  <!-- Text Interpolation-->
  <span>Message: {{ msg }}</span>
  <hr />

  <!--Raw HTML-->
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <hr />

  <!--Attribute Bindings ใช้ได้กับ attribute ใด ๆ เช่น :src, :href, :class, :style-->
  <div v-bind:id="dynamicId">ID Elememt</div>
  <div :id="dynamicId">ID Elememt Shorthand</div>
  <div :id>ID Elememt Same-name Shorthand</div>
  <hr />

  <!--Boolean Attributes-->
  <button :disabled="isButtonDisabled">Button</button>
  <br />
  <button :disabled>Button Same-name Shorthand</button>
  <hr />

  <!--Dynamically Binding Multiple Attributes -->
  <div v-bind="objectOfAttrs">Dynamically Binding Multiple Attributes</div>
  <hr />

  <!--Using JavaScript Expressions-->
  <p>{{ number + 1 }}</p>

  <p>{{ isButtonDisabled ? "ButtonDisabled: YES" : "ButtonDisabled: NO" }}</p>

  <p>{{ message.split("").reverse().join("") }}</p>

  <div :id="`list-${id}`">
    {{ `Using "${id}" JavaScript Expression` }}
  </div>
  <hr />

  <!--Calling Functions-->
  <time :title="toTitleDate(date)" :datetime="date.toISOString()">
    {{ formatDate(date) }}
  </time>
  <hr />

  <!-- Restricted Globals Access -->
  <p>globalProperties: {{ $appName }}</p>
  <hr />

  <!--Directives -->
  <p v-if="seen">Now you see me</p>
  <ul v-for="name of names">
    <li>{{ name }}</li>
  </ul>
  <hr>

  <!--Arguments-->
  <a :href="url">Click link</a>
  <div style="margin-top: 10px">
        <!-- v-on:click -->
        <button @click="onAlert('OK On Click!!!')">On Click</button>
  </div>
  <button @[eventName]="onAlert('OK On eventName!!!')" style="margin-top: 10px">
    On eventName
  </button>

</template>

<style scoped></style>
