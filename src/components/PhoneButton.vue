<script setup>
    import phoneIcon from '../assets/icons/phone.svg'

    const copyToClipboard = () => {
        if(navigator.clipboard) {
            navigator.clipboard.writeText('6692639645').then(() => {
                alert('Se ha copiado')
            })
        } else {
            console.log('Navegador no compatible')
        }
    }

</script>

<template>

    <div @click="copyToClipboard" class="bg-zafre text-white font-semibold text-center max-w-[200px]  py-3 px-6 rounded-xl flex gap-3">
        <img class="size-5" :src="phoneIcon" alt="">
        <button>6692639645</button>
    </div>
</template>