<!-- Child.vue -->
<script setup lang="ts">
import { useTemplateRef } from 'vue';

const childTextRef = useTemplateRef('childTextRef')

// Expose the ref and any other data/methods you want
defineExpose({ childTextRef });

</script>

<template>
    <div class="p-3">
        <div class="form-floating">
            <textarea ref="childTextRef" class="form-control" style="height: 100px"></textarea>
            <label for="floatingTextarea2">Child Component Comments</label>
        </div>
    </div>
</template>