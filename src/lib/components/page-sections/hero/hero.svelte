<script lang="ts">
	import { Combo } from '$lib/assets';
	import { Button } from '$lib/components/ui/button';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	let scroll = $state(0);
	let height = $state(0);
	let scrollPercent = $derived(Math.min((scroll / height) * 100, 100));
	$effect(() => {
		const lenis = new Lenis();
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
	});
</script>

<svelte:window bind:scrollY={scroll} bind:innerHeight={height} />

<!-- <section
	class=" text-gray-900 bg-primary-fg h-screen w-full parallax main"
	style="--scroll: {scrollPercent}"
>
	<div class="text-primary">
		{height}
		{scroll}
		{scrollPercent}
	</div>
	<div class="flex container justify-center max-lg:flex-col flex-wrap items-center mx-auto h-full">
		<div class="flex-1 flex justify-evenly items-center flex-col gap-10 h-full">
			<div class="w-85 lg:w-116 left">
				<h1 class="text-4xl lg:text-5xl">I'M MANVEL, YOUR PARTNER IN WEB DEVELOPMENT</h1>
				<p class="tracking-widest">Creating Seamless, Scalable Solutions for the Digital World.</p>
			</div>
			<div class="flex min-lg:gap-10 shrink btns">
				<Button class="btn-left" variant="outlined" size="lg">VIEW MY WORK</Button>
				<Button size="lg">GET IN TOUCH</Button>
			</div>
		</div>
		<div class="flex-1 flex justify-center items-center right">
			<Combo class="min-w-[300px]" />
		</div>
	</div>
</section> -->
<section class="h-screen w-full bg-primary-fg text-primary-bg"></section>

<style>
	.parallax {
		position: sticky;
		top: 0;
		overflow: hidden;
		translate: 0 calc(-1% * (max(var(--scroll), 10) - 10) * 100 / 70);
		--background-opacity: calc(100% - 1% * (min(var(--scroll), 60)) * 100 / 60);
		/* (oldVal - oldMin) * newRange / oldRange + newMin */
		/* var(--scroll) = oldVal
		25 = minMin
		100 = newRange
		75 = oldRange
		0 = newMin */
	}
	.btns,
	.left,
	.right {
		opacity: var(--background-opacity);
		transform: translateY(calc(-1% * (max(var(--scroll), 0)) * 100 / 20));
	}
	/* .btn-left {
		position: sticky;
		translate: 0 calc(-1% * (max(var(--scroll), 20)) * 100 / 20);
	}
	.parallax .left {
		position: sticky;
		translate: 0 calc(-1% * (max(var(--scroll), 25) - 25) * 100 / 75);
	}
	.right {
		position: sticky;
		translate: 0 calc(-1% * (max(var(--scroll), 0)) * 100 / 40);
		transform: translateX(calc(1% * (max(var(--scroll), 0)) * 100 / 60));
	} */

	.main {
		background-color: rgb(240, 240, 255, var(--background-opacity));
	}
</style>
