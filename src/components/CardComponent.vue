<template>
    <div class="rounded-xl p-4 relative bg-white shadow-0 text-white overflow-hidden h-[148px] md:h-[170px]" style="background-color:{{ background }}">
        <slot name="icon"></slot>
        <h5 class="absolute bottom-9 text-sm sm:text-xl CairoBold">{{ title }}</h5>
        <h6 class="absolute bottom-4 font-light CairoLight text-sm">{{ subtitle }}</h6>
        <div class="absolute bottom-0 right-0 rtl:left-0">
            <slot name="pattern"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    subtitle: String,
    background: String,
})
</script>