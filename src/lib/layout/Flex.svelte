<script>
    import { onMount } from "svelte";

    export let style = "",
        width = "",
        height = ""; // global exports
    export let x = false,
        y = false,
        bar = false; // overflow exports
    export let direction = "row",
        justify = "center",
        align = "center",
        wrap = false,
        aligncont = "center",
        gap = "25px"; // flex exports

    let overflow;
    onMount(() => {
        if (x == true && y == false) {
            overflow.addEventListener("wheel", (e) => {
                e.preventDefault();
                overflow.scrollBy({ left: e.deltaY < 0 ? -30 : 30 });
            });
        }
    });
</script>

<div
    class={`xl-ui-flex`}
    {wrap}
    {x}
    {y}
    {bar}
    bind:this={overflow}
    style={`
        height: ${height};
        width: ${width};
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        align-content: ${aligncont};
        gap: ${gap};
        ${style};
    `}
>
    <slot />
</div>

<style>
    div {
        overflow: hidden;
    }
    div[x="true"] {
        overflow-x: scroll;
    }
    div[y="true"] {
        overflow-y: scroll;
    }
    div[bar="false"] {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    div::-webkit-scrollbar[bar="false"] {
        display: none;
    }
    div[wrap="true"] {
        flex-wrap: wrap;
    }
    div[wrap="false"] {
        flex-wrap: nowrap;
    }
</style>
