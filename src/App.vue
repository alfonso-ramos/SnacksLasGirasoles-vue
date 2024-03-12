<script setup>
  import { ref, computed } from 'vue'
	import Langding from './pages/Landing.vue'
	import Contacto from './pages/Contacto.vue'
	import Menu from './pages/Menu.vue'
    import Elotes from '../src/pages/Menu/Elotes.vue';
	import Agridulce from '../src/pages/Menu/Agridulce.vue'
	import Tostitos from '../src/pages/Menu/Tostitos.vue'
	import Helado from '../src/pages/Menu/Helado.vue'
	import Caliente from '../src/pages/Menu/Caliente.vue'
	import Bebidas from '../src/pages/Menu/Bebidas.vue'
	import Postres from '../src/pages/Menu/Postres.vue'




	
	import NotFound from './pages/NotFound.vue'

	const routes = {
		'/': Langding,
		'/contacto': Contacto,
		'/menu': Menu,
		'/Elote': Elotes,
		'/Agridulce': Agridulce,
		'/Tostitos': Tostitos,
		'/Helado': Helado,
		'/Caliente': Caliente,
		'/Bebidas': Bebidas,
		'/Postres': Postres,
	}

	const currentPath = ref(window.location.hash)

	window.addEventListener('hashchange', () => {
		currentPath.value = window.location.hash
	})

	const currentView = computed(() => {
		return routes[currentPath.value.slice(1) || '/'] || NotFound
	})
</script>

<template>
	<component :is="currentView" />
</template>

