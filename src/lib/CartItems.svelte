<script>
  import { each } from "svelte/internal";
	import closeIcon from "../assets/close-icon.png"
  import { blackLayerisOpen, cartItemIsOpen, cartItems, currentProductImg } from "./sharedState";

	function closeCartItem () {
    $blackLayerisOpen = false
    $cartItemIsOpen = false
  }

	let grandTotal = 0

	$:$cartItems.forEach(item => {
		grandTotal += item.Price * item.Quantity
	})

	function checkOut () {
		closeCartItem()
		alert("This is just a sample online cart\nNo purchase will actually be made")
	}
</script>

<div class="cartItem">
	{#if $cartItems.length === 0}
		<h2>Your cart is empty</h2>
		<p>Purchase items and add them to cart</p>
		<button on:click={closeCartItem}>OK</button>
	{:else}
		<img src={closeIcon} alt="" class="closeIcon" on:click={closeCartItem} on:keydown={closeCartItem}>
		<h2>Your Cart</h2>
		{#each $cartItems as item, idx}
			<div class="currentCart">
				<img src={item.ImgSrc} alt="">
				<p>{item.Name} - ${item.Price} x {item.Quantity}<br>${item.Price * item.Quantity}</p>
				<button class="removeButton" on:click={() => {$cartItems.splice(idx,1); $cartItems =$cartItems; grandTotal=0}}>x</button>
			</div>
		{/each}
		<div class="line"></div>
		<p class="total">Total: <span>${grandTotal}</span></p>
		<div class="line"></div>
		<button on:click={checkOut}>Check Out</button>
	{/if}
</div>

<style>
	.cartItem {
		width: 20rem;
		height: max-content;
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

	.closeIcon {
		position: absolute;
		top: .5rem;
		right: .5rem;
		display: block;
		width: 1.5rem;
		cursor: pointer;
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

	.removeButton {
		padding: .25rem .5rem;
		background-color: #B21807;
		margin-left: auto;
		border-radius: .5rem;
	}


	.currentCart {
		display: flex;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	.currentCart img {
		display: block;
		width: 3rem;
		border-radius: .25rem;
	}

	.line {
		height: 0.1rem;
		width: 100%;
		background-color: var(--mainColor);
	}

	.total {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-weight: 700;
	}
</style>