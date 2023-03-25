<script lang="ts">
    // events
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // disabled
    export let disabled = false

    // apperance
    export let style = false
    import { getColor } from "$lib/assets/scripts/colors";
    import type { Colors, Depths } from "$lib/assets/scripts/colors";
    export let color: Colors = "accent"
    export let edepth: Depths = 1000
    export let hdepth: Depths = 700
    let ecolor = getColor(edepth, color)
    let hcolor = getColor(hdepth, color)
    export let width = "max-content"
    export let height = "max-content"
    let c: string = ecolor

    let hover = () => { disabled == false ? c = hcolor : c = c } 
    let leave = () => { disabled == false ? c = ecolor : c = c }

    // click
    let click = () => disabled == false ? dispatch("click") : ''
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

    *[aria-disabled="true"]:hover, *[aria-disabled="true"] {
        opacity: .5;
        cursor: not-allowed;
    }
</style>
