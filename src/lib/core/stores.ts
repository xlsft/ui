import { writable } from "svelte/store"

/**
 * # ```$theme```
 * 
 * Global theme variable with ```Theme``` type
 * 
 * ```ts
 * let theme_color = $theme === 'dark' ? // 'rgb(255,255,255)'
 *      getColor(0, 'neutral')
 *      : 
 *      getColor(1000, 'neutral') 
 * let theme_string: Theme = 'light'
 * theme.set(theme_string)
 * let theme_color = $theme === 'dark' ? // 'rgb(0,0,0)'
 *      getColor(0, 'neutral')
 *      : 
 *      getColor(1000, 'neutral') 
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export let theme = writable()

/**
 * # ```$accent```
 * 
 * Global accent variable with ```AccentColors``` type
 * 
 * ```ts
 * console.log($accent) // 'red'
 * let accent_color_string: AccentColors = 'blue'
 * accent.set(accent_color_string)
 * console.log($accent) // 'blue'
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export let accent = writable()

/**
 * # ```theme_store```
 * 
 * Dynamic subscribed variable for `$theme`
 * 
 * ```ts
 * $: console.log(theme_store)
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export let theme_store: any
theme.subscribe((v) => theme_store = v)

/**
 * # ```accent_store```
 * 
 * Dynamic subscribed variable for `$accent`
 * 
 * ```ts
 * $: console.log(accent_store)
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export let accent_store: any
accent.subscribe((v) => accent_store = v)