import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Action } from 'svelte/action';

// CSS TW CLASS MERGE
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// INTERSECTION OBSERVER
type InViewProps = Action<
	HTMLDivElement,
	IntersectionObserverInit | undefined,
	{ onenterView: (e: CustomEvent) => void; onexitView: (e: CustomEvent) => void }
>;

export const inView: InViewProps = (
	element,
	options = { root: null, rootMargin: '0px', threshold: 0.5 }
) => {
	if (!element) throw new Error('Element is required for inView');

	const observer: IntersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const enterView = entry.isIntersecting ? 'enterView' : 'exitView';
			entry.target.dispatchEvent(new CustomEvent(enterView));
		});
	}, options);

	observer.observe(element);

	return {
		destroy() {
			observer.unobserve(element);
		}
	};
};
