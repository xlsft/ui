<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    type Crossorigin = "" | "anonymous" | "use-credentials" | null | undefined

    // properties
    export let src = ""
    export let alt = ""
    export let style = ""
    export let height = ""
    export let width = ""
    export let fill = false
    export let lazy = false
    export let crossorigin: Crossorigin = "anonymous"

</script>

<img
    class={`xl-ui-image`} 
    src={src}
    alt={alt}
    style={`
        background-position: center center;
        pointer-events: none; 
        overflow:hidden; 
        height:${height}; 
        width: ${width}; 
        ${style}
    `}
    loading={lazy == true ? "eager" : "lazy"}
    data-fill={fill}
    decoding="async"
    crossorigin="{crossorigin}"
    on:click={() => dispatch('click')}
    on:keypress={() => dispatch('click')}
/>

<style>
    img[data-fill="true"] {
        background-size: cover;
    }
    img[data-fill="false"] {
        background-size: contain;
    }
</style>