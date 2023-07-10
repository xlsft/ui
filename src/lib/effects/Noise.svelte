<script lang="ts">
    import array_random from "$lib/assets/scripts/random";
    import array_shuffle from "$lib/assets/scripts/shuffle";
    import { theme } from "$lib/stores";
    import { onDestroy } from "svelte";


    let values: Array<Number>
    $: values = $theme == "light" ? [ 100,200,300,400 ] : [ 400,500,600,700 ]
    let pixels: Array<Number> = []
    
    function gen() {    
        let shuffled = []
        for (let i = 0; i < columns * rows; i++) {
            shuffled.push(array_random(values))
        }
        pixels = array_shuffle(shuffled)
    }

    export let columns = 8
    export let rows = 3
    export let block_size = 7
    export let interval = 1
    export let style = ''

    let generate: any
    $: generate = setInterval(gen, interval * 1000)
    $: columns, gen()
    $: rows, gen()
    onDestroy(() => clearInterval(generate))
</script>

<div 
    class={`xl-ui-effect-noise`} 
    style ={`
        display: grid; 
        grid-template-columns: ${`${block_size}px `.repeat(columns)}; 
        grid-template-rows: ${`${block_size}px `.repeat(rows)};
        border-radius: 4px;
        pointer-events: none;
        overflow:hidden;
        ${style}
    `}
>
    {#each pixels as pixel}
        <div 
            class={`xl-ui-effect-noise-pixel`} 
            style={`
                transition: ${interval* 2}s;
                pointer-events: none;
                background: var(--${$theme == 'light' ? 'neutral' : 'cobalt'}-${pixel});
            `}
        />
    {/each}
</div>