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

function toTitleDate(d: Date) {
  return d.toDateString();
}

function formatDate(d: Date) {
  return d.toLocaleDateString();
}

const date = new Date();
</script>

<template>
  <!-- #Text Interpolation-->
  <span>Message: {{ msg }}</span>
  <hr />

  <!--#Raw HTML-->
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <hr />

  <!--#Attribute Bindings ใช้ได้กับ attribute ใด ๆ เช่น :src, :href, :class, :style-->
  <div v-bind:id="dynamicId">ID Elememt</div>
  <div :id="dynamicId">ID Elememt Shorthand</div>
  <div :id>ID Elememt Same-name Shorthand</div>
  <hr />

  <!--#Boolean Attributes-->
  <button :disabled="isButtonDisabled">Button</button>
  <br />
  <button :disabled>Button Same-name Shorthand</button>
  <hr />

  <!--#Dynamically Binding Multiple Attributes -->
  <div v-bind="objectOfAttrs">Dynamically Binding Multiple Attributes</div>
  <hr />

  <!--#Using JavaScript Expressions-->
  <p>{{ number + 1 }}</p>

  <p>{{ isButtonDisabled ? "ButtonDisabled: YES" : "ButtonDisabled: NO" }}</p>

  <p>{{ message.split("").reverse().join("") }}</p>

  <div :id="`list-${id}`">
    {{ `Using "${id}" JavaScript Expression` }}
  </div>

  <!-- ❌ Statement (คำสั่งประกาศตัวแปร) 
  {{ var a = 1 }}
  -->

  <!-- ❌ Flow control (if, for, while) 
   {{ if (ok) { return message } }}
  -->
  <hr />

  <!--#Calling Functions-->
  <time :title="toTitleDate(date)" :datetime="date.toISOString()">
    {{ formatDate(date) }}
  </time>
  <hr />
  <!-- #Restricted Globals Access -->
  <p>globalProperties: {{ $appName }}</p>
  <hr />
  <!--#Directives -->
</template>

<style scoped></style>
