<script setup>
  import { ref, computed } from 'vue'
	import Langding from './pages/Landing.vue'
	import Contacto from './pages/Contacto.vue'
	import Menu from './pages/Menu.vue'
	// import NotFound from './NotFound.vue'

	const routes = {
		'/': Langding,
		'/contacto': Contacto,
		'/menu': Menu,
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

