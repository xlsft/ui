<script lang="ts">
    import { onMount } from "svelte";

    // flex types
    type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
    type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
    type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
    type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    type AlignContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";


    // global exports
    export let style: string = "",
        width: string = "",
        height: string = ""; 
        
    // overflow exports
    export let x: boolean = false,
        y: boolean = false,
        bar: boolean = false;

    // flex exports
    export let direction: FlexDirection = "row",
        justify: JustifyContent = "center",
        align: AlignItems = "center",
        wrap: FlexWrap = "nowrap",
        aligncont: AlignContent = "center",
        gap: string = "25px"; // flex exports


    let overflow: HTMLElement;

    onMount(() => {
        if (x == true && y == false && overflow) {
            overflow.addEventListener("wheel", (e: WheelEvent) => {
                e.preventDefault();
                overflow.scrollBy({ left: e.deltaY < 0 ? -30 : 30 });
            });
        }
    });
</script>

<div
    class={`xl-ui-flex`}
    data-x-overflow={x}
    data-y-overflow={y}
    data-bar-overflow={bar}
    bind:this={overflow}
    style={`
        height: ${height};
        width: ${width};
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        align-content: ${aligncont};
        flex-wrap: ${wrap}
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
    div[data-x-overflow="true"] {
        overflow-x: scroll;
    }
    div[data-y-overflow="true"] {
        overflow-y: scroll;
    }
    div[data-bar-overflow="false"] {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    div::-webkit-scrollbar[data-bar-overflow="false"] {
        display: none;
    }
</style>
