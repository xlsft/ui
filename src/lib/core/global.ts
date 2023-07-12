import { theme_store, accent_store } from "$lib/core";
import { getColor } from "$lib/colors";
import a from "./style/a";
import meta from "./style/meta";
import root from "./style/root";
/**
 * # ```getGlobals()```
 * 
 * Returns global css variables
 * 
 * ```ts
 * let root = getGlobals()
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export function getGlobals(): string {
    return root() + a() + meta()
}