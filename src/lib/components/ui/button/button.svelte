<script lang="ts" module>
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const buttonVariants = cva('default-style', {
		variants: {
			variant: {
				default: 'variant-default',
				outlined: 'variant-outlined'
			},
			size: {
				default: 'size-default',
				sm: 'size-sm',
				lg: 'size-lg'
			},
			rounded: {
				sm: 'rounded-sm',
				md: 'rounded-md',
				lg: 'rounded-lg'
			}
		},

		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});
	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];
	export type ButtonRounded = VariantProps<typeof buttonVariants>['rounded'];

	export type ButtonProps = HTMLButtonAttributes & {
		variant?: ButtonVariant;
		size?: ButtonSize;
		rounded?: ButtonRounded;
	};
</script>

<script lang="ts">
	let {
		class: className,
		type = 'button',
		variant = 'default',
		size = 'default',
		rounded,
		children,
		...rest
	}: ButtonProps = $props();
</script>

<button class={buttonVariants({ variant, size, rounded, className })} {...rest}
	>{@render children?.()}</button
>

<style>
	.default-style {
		transition-duration: 200ms;
		cursor: pointer;
	}
	.variant-default {
		background-color: hsl(var(--orange), 0.7);
		color: hsl(var(--primary-fg));
		border: 1px solid hsl(var(--orange));
		box-shadow: 0 0 8px hsl(var(--orange), 0.2);
	}
	.variant-default:hover {
		background-color: hsl(var(--orange), 0.9);
		box-shadow: 0 0 8px hsl(var(--orange), 0.4);
	}
	.variant-outlined {
		background-color: hsl(var(--orange), 0.1);
		color: hsl(var(--primary-fg));
		border: 1px solid hsl(var(--orange), 0.5);
		box-shadow: 0 0 8px hsl(var(--orange), 0.4);
	}
	.variant-outlined:hover {
		background-color: hsl(var(--orange), 0.2);
		border: 1px solid hsl(var(--orange), 0.8);
		box-shadow: 0 0 8px hsl(var(--orange), 0.8);
	}
	.size-default {
		height: 3rem;
		padding: 0.2rem 1.2rem;
	}
	.size-sm {
		height: 2rem;
		padding: 0.2rem 1.2rem;
		font-size: 1.4rem;
	}
	.size-lg {
		height: 4rem;
		padding: 0.4rem 2rem;
	}
	.rounded-sm {
		border-radius: 3px;
	}
	.rounded-md {
		border-radius: 5px;
	}
	.rounded-lg {
		border-radius: 7px;
	}
</style>
