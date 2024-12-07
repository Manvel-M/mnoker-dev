import Lenis from 'lenis';
document.addEventListener('DOMContentLoaded', function () {
	const lenis = new Lenis({
		duration: 1.2,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
	});
	lenis.on('scroll', (e) => {
		console.log(e.animatedScroll);
	});
});
