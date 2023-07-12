import type { Colors, Depths } from "$lib/core";
import { accent_store, theme_store } from "$lib/core";
import list from "./list";
/**
 * # ```getColor()```
 * 
 * Returns RGB color based on UI system
 * 
 * ```ts
 * let color = getColor(1000, 'accent')
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export function getColor(depth: Depths = 1000, name: Colors = 'accent'): string {
    if (name == 'accent') name = accent_store
    if (name == 'theme') { depth = theme_store == 'dark' ? 0 : 1000; name = 'neutral' }
    // @ts-ignore
    let color = list[name][`c${depth}`]
    return `rgb(${color[0]},${color[1]},${color[2]})`
}

/**
 * # ```getTextColor()```
 * 
 * Returns optimal pair color for text
 * 
 * ```ts
 * let text_color = getTextColor('red')
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export function getTextColor(color: Colors): string {
    let current = color == 'accent' ? accent_store : color
    // @ts-ignore
    let text_color = list[current].text
    return `rgb(${text_color[0]},${text_color[1]},${text_color[2]})`
}