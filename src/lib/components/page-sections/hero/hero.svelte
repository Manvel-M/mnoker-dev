<script>
	import { Button } from '$lib/components/ui/button';
</script>

<section>
	<div class="left">
		<div class="intro">
			<h1>I'M MANVEL, YOUR PARTNER IN WEB DEVELOPMENT</h1>
			<p>Creating Seamless, Scalable Solutions for the Digital World.</p>
		</div>
		<div class="action">
			<Button variant="outlined" size="lg">VIEW MY WORK</Button><Button size="lg"
				>GET IN TOUCH</Button
			>
		</div>
	</div>
	<div></div>
</section>

<style>
	section {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.left {
		display: flex;
		flex-direction: column;
		gap: 8rem;
		width: 440px;
	}
	.intro h1 {
		line-height: 3.7rem;
		margin-bottom: 1rem;
		letter-spacing: 1px;
	}
	.intro p {
		font-size: 1.6rem;
		letter-spacing: 3px;
	}
	.action {
		display: flex;
		justify-content: center;
		gap: 3rem;
	}

	@media screen and (max-width: 1000px) {
		section {
			flex-direction: column;
		}
	}
</style>
