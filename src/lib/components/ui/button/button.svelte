<script lang="ts" module>
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const buttonVariants = cva(
		'inline-flex justify-center text-nowrap items-center cursor-pointer transition-color duration-150 disabled:bg-opacity-50',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-fg ring ring-primary hover:bg-primary/80',
					outlined: 'bg-primary/10 ring ring-primary/40 hover:bg-primary/20 hover:ring-primary/70'
				},
				size: {
					default: 'h-10 py-5 px-4',
					sm: 'h-8 py-4 px-2 text-sm',
					lg: 'h-12 py-5 px-8'
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
		}
	);
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
	import { cn } from '$lib/utils';
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

<button class={cn(buttonVariants({ variant, size, rounded, className }))} {...rest}
	>{@render children?.()}</button
>
