<script>
  import { blackLayerisOpen, cartItemIsOpen, cartItems } from "./sharedState";

	function closeCartItem () {
    $blackLayerisOpen = false
    $cartItemIsOpen = false
  }

</script>

<div class="cartItem">
	{#if $cartItems.length === 0}
		<h2>Your cart is empty</h2>
		<p>Purchase items and add them to cart</p>
		<button on:click={closeCartItem}>OK</button>
	{/if}
</div>

<style>
	.cartItem {
		width: 20rem;
		height: 20rem;
		background-color: white;
		position: fixed;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
		border-radius: .5rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	button {
		padding: .5rem 1rem;
		border-radius: .25rem;
		border: none;
		cursor: pointer;
		color: #fff;
		font: inherit;
		background-color: var(--mainColor);
		transition: 0.25s;
		font-weight: 700;
	}

	button:hover {
		background: var(--hover);
	}
</style>