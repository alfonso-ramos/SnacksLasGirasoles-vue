<script setup>
import { ref } from 'vue';

import { snacks } from '../../data/menu';
import { filterCategory, snacksFilter } from '../../utils/FilterCategory';

const categoriaUnica = Array.from(new Set(snacks.map(snack => snack.categoria)));
const menuList = ref(filterCategory('Tostitos'));

</script>

<template>
    <img class="size-24 mx-auto" src="../../../public/img/logo.png" alt="">
    <nav>
        <ul class="flex overflow-scroll md:overflow-hidden gap-2 cursor-pointer md:justify-center text-[#9C8F4A]">
            <li id="allCategory" class="w-[83.5px] h-[53px] text-base font-semibold py-3 px-5"
                @click="filterCategory(null)">
                <router-link to="/menu">Todos</router-link>
            </li>
            <li v-for="categoria in categoriaUnica" :key="categoria"
                class="w-[83.5px] h-[53px] text-base font-semibold py-3 px-5 selectedCategory">
                <router-link :to="'/'+categoria">
                    {{ categoria }}
                </router-link>
            </li>
        </ul>
    </nav>

    <div class="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
        <router-link 
            class="w-[358px] h-20 flex justify-between gap-4 rounded-lg my-3 mx-auto p-4 shadow-md"
            v-for="snack in snacksFilter"
            :key="snack.id"
            :to="{name: 'snacks.show', params:{id:snack.id}}"
        >
            <div>
                <h3 class="text-base font-semibold text-[#1C1A0D]">{{snack.titulo}}</h3>
                <p class="text-[#9C8F4A]">$ {{ snack.precio }}</p>
            </div>
            <img class="w-24 h-[56px] object-contain" :src="`/img/${ snack.img}.webp`" :alt="snack.titulo">
        </router-link>

    </div>
</template>