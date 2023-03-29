<script lang="ts">
    // events
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    /**
     * Disabled feature switch
     * ```
     * <Button disabled/>
     * ```
     * @return {HTMLElement} param
     */
    export let disabled = false;

    // apperance

    /**
     * Provide custom styles for component
     * @param {string} style
     * ```
     * <Button style="opacity: .5"/>
     * ```
     * @return {string} style
     */
    export let style: string;

    import { getColor } from "$lib/assets/scripts/colors";
    import type { Colors, Depths } from "$lib/assets/scripts/colors";

    /**
     * Set color for component
     * @param {Color} color
     * ```
     * <Button color="red"/>
     * ```
     * @return {Color} color
     */
    export let color: Colors = "accent";

    /**
     * Set depth for component color
     * @param {Depths} color_depth
     * ```
     * <Button color_depth="1000"/>
     * ```
     * @return {Depths} color depth
     */
    export let color_depth: Depths = 1000;

    /**
     * Set depth for component color on hover
     * @param {Depths} color_depth_hover
     * ```
     * <Button color_depth_hover="900"/>
     * ```
     * @return {Depths} color depth
     */
    export let color_depth_hover: Depths = 700;
    let ecolor = getColor(color_depth, color);
    let hcolor = getColor(color_depth_hover, color);

    /**
     * Set width of component
     * @param {string} width
     * ```
     * <Button width="400px"/>
     * ```
     * @return {string} style
     */
    export let width = "max-content";

    /**
     * Set height of component
     * @param {string} height
     * ```
     * <Button height="50px"/>
     * ```
     * @return {string} style
     */
    export let height = "max-content";
    let c: string = ecolor;

    let hover = () => {
        disabled == false ? (c = hcolor) : (c = c);
    };
    let leave = () => {
        disabled == false ? (c = ecolor) : (c = c);
    };

    // interaction
    let click = () => (disabled == false ? dispatch("click") : "");
</script>

<div
    class={`xl-ui-button`}
    on:click={click}
    on:keypress={click}
    on:mouseenter={hover}
    on:mouseleave={leave}
    role="button"
    style="width: {width}; height: {height}; background: {c};{style}"
    aria-disabled={disabled}
>
    <slot />
</div>

<style>
    .xl-ui-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px 25px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
        font-family: Rubik;
        font-size: 15px;
        gap: 15px;
    }

    *[aria-disabled="true"]:hover,
    *[aria-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
