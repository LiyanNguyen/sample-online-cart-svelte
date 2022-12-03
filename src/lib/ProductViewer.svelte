<script>
	import closeIcon from "../assets/close-icon.png"
  import { blackLayerisOpen, cartItems, currentProductImg, currentProductName, currentProductPrice, productViewerIsOpen } from "./sharedState";

	let quantity = 0
	let showError = false

	function add () {
		quantity++
	}

	function subtract () {
		if(quantity !== 0) {
			quantity--
		}
	}

	function closeProductViewer () {
		$blackLayerisOpen = false
		$productViewerIsOpen = false
	}

	function addToCart() {
		if(quantity === 0) {
			showError = true
		}
		else {
			$cartItems.push(
				{
					Name: $currentProductName,
					Price:$currentProductPrice,
					Quantity: quantity,
					ImgSrc: $currentProductImg
				})
			closeProductViewer()
			$cartItems = $cartItems
			// in svelte, methods that mutate arrays do not trigger reactivity
			// so we have to redeclare them
		}
	}
</script>

<div class="productViewer">
	<img src={closeIcon} alt="" class="closeIcon" on:click={closeProductViewer} on:keydown={closeProductViewer}>
	<div class="imgContainer">
		<img src={$currentProductImg} alt="">
	</div>
	<h3>{$currentProductName} ${$currentProductPrice}</h3>
	<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, impedit.</p>
	<div class="quantifier">
		<button on:click={subtract}>-</button>
		<input type="number" placeholder="0" bind:value={quantity}>
		<button on:click={add}>+</button>
	</div>
	<button on:click={addToCart}>Add To Cart</button>
	<p class="error" class:active={showError}>cannot be zero</p>
</div>

<style>
	.closeIcon {
		position: absolute;
		top: .5rem;
		right: .5rem;
		display: block;
		width: 1.5rem;
		cursor: pointer;
	}
	.productViewer {
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
		gap: 1rem;
	}

	.imgContainer {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: .25rem;
	}

	.imgContainer img {
		border-radius: .25rem;
	}

	.quantifier {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.quantifier button {
		font-weight: 700;
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
	}

	button:hover {
		background: var(--hover);
	}

	input {
		padding: .45rem 1rem;
		border-radius: .25rem;
		font: inherit;
		width: 10rem;
		border: .05rem solid var(--textColor);
		color: var(--textColor);
	}

	input[type=number]::-webkit-inner-spin-button, 
	input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
	}

	input[type=number] {
    -moz-appearance:textfield;
	}

	.error {
		color: red;
		display: none;
	}

	.error.active {
		display: block;
	}
</style>