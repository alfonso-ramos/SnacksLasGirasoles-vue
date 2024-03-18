
<script setup>
        const props = defineProps({
            snack:{
                type: Object,
                required: true
            }
        })
</script>

<template>
    <a href="" id="snackCard" class="w-[358px] h-20 flex justify-between gap-4 rounded-lg my-3 mx-auto p-4 shadow-md">
        <div>
            <h3 class="text-base font-semibold text-[#1C1A0D]">{{ snack.titulo }}</h3>
            <p class="text-[#9C8F4A]">$ {{ snack.precio }}</p>
        </div>
        <img class="w-24 h-[56px] object-contain" :src="'/img/'+ snack.img+ '.webp'" :alt="snack.titulo">
    </a>
</template>