<script>
	export let Name
	export let Price
	export let ImgSrc

	import { blackLayerisOpen, cartItems, currentProductImg, currentProductName, currentProductPrice, productViewerIsOpen } from "./sharedState"

	function openProductViewer () {
		$blackLayerisOpen = true
		$productViewerIsOpen = true
		$currentProductName = Name
		$currentProductPrice = Price
		$currentProductImg = ImgSrc
	}
</script>

<div class="productCard">
	<div class="imgContainer">
		<img src={ImgSrc} alt="">
	</div>
	<h3>{Name}</h3>
	<p>${Price}</p>
	<button on:click={openProductViewer}>Purchase</button>
</div>

<!-- just plain vanilla CSS -->
<style>
	.productCard {
		width: 15rem;
		height: 17.5rem;
		box-shadow: 0 0 1rem .1rem hsla(235, 79%, 13%, 0.1);
		transition: .25s;
		border-radius: .5rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.imgContainer {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: .25rem;
	}

	.imgContainer img {
		display: block;
		width: 100%;
		border-radius: .25rem;
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
</style>