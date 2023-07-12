<script lang="ts">

    // ------------------ Imports ------------------

    import { theme } from "$lib/core";
    import { onDestroy } from "svelte";

    // ------------------ Setup ------------------

    function array_random(list: Array<any>): any {
        return list[Math.floor((Math.random()*list.length))];
    }

    function array_shuffle(array: Array<any>) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function gen() {    
        let shuffled = []
        for (let i = 0; i < columns * rows; i++) {
            shuffled.push(array_random(values))
        }
        pixels = array_shuffle(shuffled)
    }

    // ------------------ Animation ------------------

    let pixels: Array<Number>
    let values: Array<Number>
    let generate: any
    $: values = $theme == "light" ? [ 100,200,300,400 ] : [ 400,500,600,700 ]
    $: generate = setInterval(gen, interval * 1000)
    $: columns, gen()
    $: rows, gen()
    onDestroy(() => clearInterval(generate))
    
    // ------------------ Attributes ------------------

    /**
     * Amount of columns in noise
     * ``` tsx
     * <Noise columns={30}/>
     * ```
     * ```@xl-soft/ui```
     */
    export let columns = 8

    /**
     * Amount of rows in noise
     * ``` tsx
     * <Noise rows={4}/>
     * ```
     * ```@xl-soft/ui```
     */
    export let rows = 3

    /**
     * Single pixel size (width, height) in pixels
     * ``` tsx
     * <Noise pixel={10}/>
     * ```
     * ```@xl-soft/ui```
     */
    export let pixel = 7

    /**
     * Animation interval
     * ``` tsx
     * <Noise interval={2}/>
     * ```
     * ```@xl-soft/ui```
     */
    export let interval = 1

    /**
     * Style attribute
     * ``` tsx
     * <Noise style="width: 400px;"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let style = ''

</script>

<!-- 
    @component 
    # ```Noise```

    Noise block. Can be used in censoring and hiding things

    Here is example usage with example params:

    ``` tsx
    <Noise
        columns={30}
        rows={4}
        pixel={10}
        interval={2}
        style="width: 400px;"
    />
    ```

    ```@xl-soft/ui```
-->

<div 
    class={`xl-ui-effect-noise`} 
    style ={`
        display: grid; 
        grid-template-columns: ${`${pixel}px `.repeat(columns)}; 
        grid-template-rows: ${`${pixel}px `.repeat(rows)};
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