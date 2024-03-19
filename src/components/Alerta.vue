
<script setup>

    import { computed } from 'vue';
    
    const props = defineProps({
        alerta: {
            type: Object,
            required: true,
        },
    })

    const isError = computed(() => {
        return props.alerta.tipo === 'error'
    })
</script>

<template>
    <div 
        class="bg-[#26D366] text-white text-center p-3 uppercase font-bold mb-3 rounded-md"
    >
        Copiado en el portapapeles
    </div>
</template>