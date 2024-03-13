<script setup>
	import LandingLayout from '../layouts/LandingLayout.vue'
</script>
<template>
	<LandingLayout>

		<main>
			<header class="bg-alabaster flex justify-evenly p-4 mt-10"> 
				<div class="bg-primary font-semibold text-center min-w-[157px] max-w-10 py-3 px-6 rounded-xl">
					<a href="#/menu">Menu digital</a>
				</div>
				<div class="bg-zafre font-semibold text-white text-center min-w-[157px] max-w-10 py-3 px-6 rounded-xl">
					<a href="#/contacto">Contactanos</a>
				</div>
			</header>
			<div class="mx-4 mt-10 md:mt-20">
				<img class="mx-auto"  src="/img/logo.webp" alt="">
			</div>
			<div class="relative overflow-hidden">
				<img class="relative right-40 -bottom-10 xl:h-[600px]" src="/img/MangoCrema.webp" alt="">
				<img class="absolute left-2/4 bottom-0 xl:left-3/4 xl:h-[600px]" src="/img/churroLoco.webp" alt="">
			</div>
		</main>
	</LandingLayout>
</template>


<!-- <style scoped>
	main{
		background: linear-gradient(to bottom right, #011638 0%, #011638 50%, #f1c40f 50%, #f1c40f 100%);
	}
</style> -->