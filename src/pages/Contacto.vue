<script setup>
    import {reactive} from 'vue'

    import PhoneButton from '../components/PhoneButton.vue';
    import WAButton from '../components/WAButton.vue';
    import Alerta from '../components/Alerta.vue'

    const alerta = reactive({
        mostrar: false
    })

    const mostrar = () => {
        
        alerta.mostrar = true
        setTimeout(() => {
            Object.assign(alerta, {
                mostrar: false
            })
        }, 3000);
    }
</script>
<template>
    <div class="bg-[#FCFAF7] pb-10">
        <header class="bg-zafre flex justify-evenly mt-10 p-4"> 
            <div class="bg-primary font-semibold text-center min-w-[157px] max-w-10 py-3 px-6 rounded-xl">
                <router-link to="/menu">Menu digital</router-link>
            </div>
        </header>
        <div>
            <img class="my-6 mx-auto size-[229px]" src="/img/logo.webp" alt="">
            <h1 class="text-xl font-semibold text-center mx-10 mb-7">¡No te quedes con el anotojo!</h1>
            <p class="text-base font-semibold text-center">Visitanos en:  Girasoles 4722, Ricardo Flores Magón, 82190 Mazatlán, Sin.</p>

            <iframe class="mx-auto my-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.9653069141164!2d-106.3833319!3d23.244349500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53c11033aa1b%3A0xbfaf831c2303595d!2sGirasoles%20Snaks!5e0!3m2!1ses-419!2smx!4v1709740019361!5m2!1ses-419!2smx" width="329" height="233" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
            <p class="text-base font-semibold text-center">Tambien nos puedes contactar por telefono o Whatsapp</p>
    
            <div class="flex flex-col items-center gap-6 my-6 md:flex-row md:justify-center">
                <PhoneButton @click="mostrar" />
                <WAButton />
            </div>
            <Alerta v-if="alerta.mostrar"/>
        </div>
    </div>
</template>


