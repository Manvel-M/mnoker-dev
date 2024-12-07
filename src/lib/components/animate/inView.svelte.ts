import type { Action } from 'svelte/action';

type ViewportPorps = Action<
	HTMLDivElement,
	IntersectionObserverInit | undefined,
	{ onenterViewport: (e: CustomEvent) => void; onexitViewport: (e: CustomEvent) => void }
>;

export const inView: ViewportPorps = (
	element,
	options = { root: null, rootMargin: '0px', threshold: 0.5 }
) => {
	const observer: IntersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const enterView = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(enterView));
		});
	}, options);

	if (observer) {
		$effect(() => {
			observer.observe(element);

			return () => {
				observer.unobserve(element);
			};
		});
	}
	return {
		destroy() {
			observer.unobserve(element);
		}
	};
};
