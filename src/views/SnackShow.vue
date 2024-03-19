<template>
    <div>
        <router-link to="/menu" class="absolute">Regresar</router-link>
        <img :src="`/img/${snack.img}.webp`" :alt="snack.titulo">
        <div>
            <h1>{{snack.titulo}}</h1>
            <p>{{ snack.descripcion }}</p>
            <h2>¡No te quedes con el antojo!</h2>

            <div class="flex flex-col items-center gap-6 my-6 md:flex-row md:justify-center">
                <PhoneButton @click="mostrar"/>
                <WAButton />
            </div>
            <Alerta v-if="alerta.mostrar"/>
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