<script>
	import { Animate } from '$lib/components/animate';
</script>

<section class="flex flex-col h-screen w-full justify-evenly items-center overflow-hidden">
	<h1 class="text-5xl">Skills</h1>
	<div class="flex items-center justify-center gap-10">
		<Animate variant="left" repeat>
			<div class="w-30 h-30 bg-red-500 flex items-center justify-center">left</div>
		</Animate>
		<Animate variant="fade" repeat>
			<div class="w-30 h-30 bg-red-500"></div>
		</Animate>
		<Animate variant="scale" repeat>
			<div class="w-30 h-30 bg-red-500"></div>
		</Animate>
		<Animate variant="top" repeat>
			<div class="w-30 h-30 bg-red-500"></div>
		</Animate>
		<Animate variant="bottom" repeat>
			<div class="w-30 h-30 bg-red-500"></div>
		</Animate>
		<Animate variant="right" repeat>
			<div class="w-30 h-30 bg-red-500"></div>
		</Animate>
	</div>
</section>
