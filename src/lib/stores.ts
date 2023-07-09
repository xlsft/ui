import { writable } from "svelte/store";

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

export let vh = writable()
