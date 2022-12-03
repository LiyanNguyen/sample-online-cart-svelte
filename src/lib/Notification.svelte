<script>
  import { notificationIsOpen } from "./sharedState";
</script>

<div class="notificationCard" class:active={$notificationIsOpen}>
	<h2>Item added to cart ▲</h2>
</div>

<style>
	.notificationCard {
		width: max-content;
		height: max-content;
		padding: 1rem 2rem;
		border-radius: .5rem;
		position: fixed;
		top: 5rem;
		right: -20rem;
		background-color: white;
		box-shadow: 0 0 1rem .1rem hsla(235, 79%, 13%, 0.1);
		border: .1rem solid var(--mainColor);
		transition: 0.5s;
	}

	.notificationCard.active {
		right: 2rem;
	}
</style>