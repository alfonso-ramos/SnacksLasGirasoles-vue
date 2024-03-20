<template>
    <div class="bg-alabaster h-screen">
        <router-link to="/menu" class="absolute md:relative underline text-secondary ">
            <div class="flex first-letter:justify-center gap-2 pt-5 pl-7 w-fit ">
                <img class="size-6" src="../assets/icons/back-arrow.svg" alt="">
                Volver al menu
            </div>
        </router-link>
        <div class="md:flex md:gap-5 md:px-auto md:py-10 md:px-20">
            <img 
                :src="`/img/${snack.img}.webp`" :alt="snack.titulo"
                class="min-w-[367px] mx-auto max-w-[500px] object-contain"
            >
            <div class="bg-alabaster py-6 px-8 md:bg-white rounded-2xl md:w-[502px] md:h-[605px]">
                <h1 class="text-lg font-semibold md:text-xl">{{snack.titulo}}</h1>
                <p class="text-base md:font-base my-4">{{ snack.descripcion }}</p>
                <h2 class="text-lg font-semibold md:text-xl text-center">¡No te quedes con el antojo!</h2>
    
                <div class="flex flex-col items-center gap-6 my-6">
                    <PhoneButton @click="mostrar"/>
                    <WAButton />
                </div>
                <Alerta v-if="alerta.mostrar"/>
            </div>
        </div>
    </div>
</template>

<script>

    import { snacks } from '../data/menu';
    import { reactive } from 'vue'
    import Alerta from '../components/Alerta.vue'
    import PhoneButton from '../components/PhoneButton.vue';
    import WAButton from '../components/WAButton.vue';

    export default {
        setup() {
            const alerta = reactive({
                mostrar: false
            });

            const mostrar = () => {
                alerta.mostrar = true
                setTimeout(() => {
                    alerta.mostrar = false
                }, 3000);
            }

            return {
                alerta,
                mostrar
            }
        },
        computed: {
            snackId() {
                return parseInt(this.$route.params.id)
            },
            snack() {
                return snacks.find(snack => snack.id === this.snackId)
            }
        },
        components: {PhoneButton, WAButton, Alerta}
    }
</script>