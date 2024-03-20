<template>
    <div class="bg-alabaster h-screen">
        <router-link to="/menu" class="absolute md:relative underline text-secondary">
            <div class="flex first justify-center gap-2 relative mt-5 ml-7 p-1 rounded-xl w-fit opacity-50 hover:opacity-100 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300 md:opacity-100">
                <img class="size-6" src="../assets/icons/back-arrow.svg" alt="Flecha atras, regresar al menu">
                Volver al menu
            </div>
        </router-link>
        <div class="md:flex md:gap-8 md:px-auto md:py-10 md:px-20 md:justify-center">
            <img 
                :src="`/img/${snack.img}.webp`" :alt="snack.titulo"
                class="min-w-full max-h-[350px] mx-auto md:mx-0 w-screen max-w-[300px] object-contain md:min-w-[300px]"
            >
            <div class="bg-alabaster w-screen py-6 px-8 md:bg-white rounded-2xl md:w-[282px]">
                <h1 class="text-lg font-semibold md:text-lg">{{snack.titulo}}</h1>
                <p class="text-base md:font-base my-4">{{ snack.descripcion }}</p>
                <h2 class="text-lg font-semibold md:text-lg text-center">¡No te quedes con el antojo!</h2>
    
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