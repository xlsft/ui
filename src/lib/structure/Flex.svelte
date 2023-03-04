<script>
    import { onMount } from "svelte";

    export let style = "", width = "", height = "" // global exports
    export let x = false, y = false, bar = false // overflow exports
    export let direction = "row", justify = "center", align = "center", wrap = false, aligncont="center", gap = "25px" // flex exports

    let overflow; onMount(() => { if (x == true && y == false) { overflow.addEventListener('wheel',e=>{e.preventDefault();overflow.scrollBy({left: e.deltaY < 0 ? -30 : 30})})}})
</script>

<div 
    class={`xl-ui-flex`} 
    wrap={wrap}
    x={x} y={y} bar={bar} bind:this={overflow} 
    style={`
        height: ${height};
        width: ${width};
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        align-content: ${aligncont};
        gap: ${gap};
        ${style || ''};
    `}>
        <slot></slot>
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
        -ms-overflow-style: none
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

<!-- <script>
    import { onMount } from "svelte"
    import { vh } from "../stores";
    export let x = false, y = false, bar = false
    
    export let direction = "column", justify = "", align = "", wrap = "nowrap", aligncont="center", gap = "25px", style = "", height = "", width = ""
    onMount(() => {
        if (width == "") width = `${overflow.scrollWidth}px`
        if (height == "") height = `${overflow.scrollHeight}px`
        window.addEventListener('resize', function(event) {
            if (width == "") width = `${overflow.scrollWidth}px`
            if (height == "") height = `${overflow.scrollHeight}px`
        }, true);
    })
</script>
<div 
    class={`xl-ui-flex`} 
    x={x} y={y} bar={bar} bind:this={overflow} 
    style={`
        display: flex;  
        min-height: ${height};
        min-width: ${width}; 
        height: ${height};
        width: ${width}; 
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justify};
        align-items: ${align};
        align-content: ${aligncont};
        gap: ${gap}; 
        
        ${style || ''};
    `}>
        <slot></slot>
</div>

<style>
    div {
        overflow: hidden;
        flex: 1;
    }
    div[x="true"] {
        overflow-x: scroll;
    }
    div[y="true"] {
        overflow-y: scroll;
    }
    div[bar="false"] {
        scrollbar-width: none;
        -ms-overflow-style: none
    }
    div::-webkit-scrollbar[bar="false"] {
        display: none;
    }
</style> -->