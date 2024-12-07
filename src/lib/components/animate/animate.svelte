<script lang="ts">
	import { inView } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';
	import './animate.css';

	type AnimateProps = HTMLAttributes<HTMLDivElement> & {
		variant?: 'left' | 'right' | 'top' | 'bottom' | 'fade' | 'scale';
		duration?: number;
		delay?: number;
		repeat?: boolean;
	};

	let {
		class: className,
		variant = 'fade',
		duration = 1,
		delay = 0.2,
		repeat = false,
		children,
		...rest
	}: AnimateProps = $props();

	let animationPlayedOnce = $state(false);
	let enterAnimation = $state<boolean>(false);

	function handleEnterAnimation() {
		if (!repeat && animationPlayedOnce) return;
		enterAnimation = true;
		animationPlayedOnce = true;
	}
	function handleExitAnimation() {
		if (!repeat) return;
		enterAnimation = false;
	}
</script>

<div use:inView onenterView={handleEnterAnimation} onexitView={handleExitAnimation}>
	<div
		class={enterAnimation ? `enter-${variant}` : `exit-${variant}`}
		class:enter-animation={enterAnimation}
		class:exit-animation={!enterAnimation}
		style="--duration: {duration}s; --delay: {delay}s"
		{...rest}
	>
		{@render children?.()}
	</div>
</div>
