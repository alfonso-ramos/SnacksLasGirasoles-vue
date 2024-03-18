<script setup>
import SnackCard from '../../components/SnackCard.vue';
import { ref } from 'vue';

import { snacks } from '../../data/menu';
import { filterCategory, snacksFilter } from '../../utils/FilterCategory';

const categoriaUnica = Array.from(new Set(snacks.map(snack => snack.categoria)));
const menuList = ref(filterCategory('Caliente'));

</script>

<template>
    <nav>
        <ul class="flex overflow-scroll gap-2 cursor-pointer">
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
        <SnackCard v-for="snack in snacksFilter" :snack="snack" />

    </div>
</template>