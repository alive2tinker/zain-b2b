<template>
    <div class="rounded-xl p-4 relative bg-white shadow-0 text-white overflow-hidden h-[159px] md:h-[200px]" style="background-color:{{ background }}">
        <div class="mt-2">
            <slot name="icon"></slot>
        </div>
        <h5 class="absolute bottom-10 text-sm sm:text-lg font-bold">{{ title }}</h5>
        <h6 class="absolute bottom-6 font-light text-sm break-all">{{ subtitle }}</h6>
        <div class="absolute bottom-0 right-0 rtl:left-0">
            <slot name="pattern"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    title: String,
    subtitle: String,
    background: String,
})
</script>