// this file is where we manage the shared state between components
// components can then subscribe to these states
import { readable, writable } from "svelte/store"

export const cartItems = writable([])
export let blackLayerisOpen = writable(false)
export let productViewerIsOpen = writable(false)
export let cartItemIsOpen = writable(false)

export let currentProductName = writable("")
export let currentProductPrice = writable(0)
export let currentProductImg = writable("")
