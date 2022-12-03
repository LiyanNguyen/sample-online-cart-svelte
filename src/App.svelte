<script>
  // imported components
  import ProductCard from "./lib/ProductCard.svelte";
  import ProductViewer from "./lib/ProductViewer.svelte";
  import CartItems from "./lib/CartItems.svelte";
  

  // images for product - static in this sample project
  import blackShoes from "./assets/black-shoes.png"
  import redShoes from "./assets/red-shoes.png"
  import greenShoes from "./assets/green-shoes.png"
  import blueShoes from "./assets/blue-shoes.png"
  import whiteShoes from "./assets/white-shoes.png"

  // imported variable from shared state
  import { cartItems, blackLayerisOpen, productViewerIsOpen, cartItemIsOpen } from "./lib/sharedState";
  
  // sample items, normally you would fetch this from backend, including image data
  let items = [
    {Name: "Black Shoes", Price: 45, ImgSrc: blackShoes},
    {Name: "Red Shoes", Price: 43, ImgSrc: redShoes},
    {Name: "Green Shoes", Price: 38, ImgSrc: greenShoes},
    {Name: "Blue Shoes", Price: 40, ImgSrc: blueShoes},
    {Name: "White Shoes", Price: 41, ImgSrc: whiteShoes},
  ]

  function closeAllHoverComponents () {
    $productViewerIsOpen = false
    $blackLayerisOpen = false
    $cartItemIsOpen = false
  }

  function openCart () {
    $cartItemIsOpen = true
    $blackLayerisOpen = true
  }
</script>


{#if $cartItemIsOpen}
  <CartItems/>
{/if}
{#if $productViewerIsOpen}
  <ProductViewer/>
{/if}
<div class="blackLayer" class:active={$blackLayerisOpen} on:keydown={closeAllHoverComponents} on:click={closeAllHoverComponents}></div>
<nav>
  <div>
    <h1>Sample Shopping Cart</h1>
    <i>(for 1bit.com)</i>
  </div>
  <div on:click={openCart} on:keydown={openCart}>
    My Cart: <span>{$cartItems.length}</span>
  </div>
</nav>
<main>
  <!-- loop through the array and render a component for each item in array -->
  {#each items as item}
    <!-- pass on the properties required by the child component  -->
    <ProductCard Name={item.Name} Price={item.Price} ImgSrc={item.ImgSrc}/>
  {/each}
</main>

<!-- just plain vanilla CSS -->
<style>
  .blackLayer.active {
    min-height: 100vh;
    min-width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
  }
  nav {
    display: flex;
    height: 4.5rem;
    box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.2);
    align-items: center;
    padding-inline: 2rem;
    position: fixed;
    background-color: #fff;
    width: 100%;
  }

  nav div:first-child {
    margin-left: auto;
    text-align: center;
  }

  nav div:nth-child(2) {
    margin-left: auto;
    font-weight: 700;
    cursor: pointer;
  }

  nav div:nth-child(2):hover {
    color: var(--mainColor);
  }

  nav div:nth-child(2) span {
    background-color: var(--mainColor);
    padding:  .25rem .5rem;
    border-radius: .25rem;
    color: #fff;
  }

  main {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding-top: 6.5rem;
  }

  @media screen and (max-width: 450px) {
    nav div:first-child {
      margin-left: initial;
      text-align: center;
    }
    h1 {
      font-size: 1rem;
    }
  }
</style>