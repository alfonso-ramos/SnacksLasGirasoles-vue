<script setup>
// import Navigation from '../components/Navigation.astro';
import SnackCard from '../components/SnackCard.vue';
import { ref, onMounted } from 'vue';

import { snacks} from '../data/menu';
import { filterCategory, snacksFilter } from '../utils/FilterCategory';

const categoriaUnica = Array.from(new Set(snacks.map(snack => snack.categoria)));


const snack = ref({})
const menuList = ref(filterCategory(null));

// const renderMenu = () => {
//     console.warn(snacksFilter);
//     menuList.value.innerHTML =
//         snacksFilter
//             .map(
//                 (snack) => `
//                 <div class="w-[358px] h-20 flex justify-between gap-4 rounded-lg my-3 mx-auto p-4 shadow-md">
//                     <div>
//                     <h3 class="text-base font-semibold text-[#1C1A0D]">${snack.titulo}</h3>
//                     <p class="text-[#9C8F4A]">$ ${snack.precio}</p>
//                     </div>
//                     <img class="w-24 h-[56px]" src=${snack.img} alt="">
//                 </div>
//                 `
//             )
//             .join('') + '</div>';
// };

// onMounted(() => {
//     renderMenu();
// })

</script>

<template>
    <nav>
        <ul class="flex overflow-scroll gap-2 cursor-pointer">
            <li id="allCategory" class="w-[83.5px] h-[53px] text-base font-semibold py-3 px-5"
                @click="filterCategory(null)">
                Todos
            </li>
            <li v-for="categoria in categoriaUnica" :key="categoria"
                class="w-[83.5px] h-[53px] text-base font-semibold py-3 px-5 selectedCategory"
                @click="filterCategory(categoria)">
                {{ categoria }}
            </li>
        </ul>
    </nav>

    <div class="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
        <div >
            <SnackCard 
                v-for="snack in snacksFilter" 
                :snack="snack"
            />
        </div>
    </div>

</template>
