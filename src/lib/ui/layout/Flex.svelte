<script lang="ts">

    // ------------------ Imports ------------------
    
    import { onMount } from "svelte";
    import type { FlexDirection, FlexWrap, JustifyContent, AlignItems, AlignContent } from "$lib/core";

    // ------------------ Attributes ------------------

    /**
     * Additional styles
     * ``` tsx
     *  <Flex style="pointer-events: none;">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let style: string = "";

    /**
     * Set width for flex container
     * ``` tsx
     *  <Flex width="100%">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let width: string = "";

    /**
     * Set height for flex container
     * ``` tsx
     *  <Flex height="100%">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let height: string = "";
        
    // ------------------ Attributes (overflow) ------------------

    /**
     * Switch for overflow-x
     * ``` tsx
     *  <Flex x>
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let x: boolean = false;

    /**
     * Switch for overflow-y
     * ``` tsx
     *  <Flex y>
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let y: boolean = false;

    /**
     * Switch for scrollbar visibility
     * ``` tsx
     *  <Flex bar>
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let bar: boolean = false;

    // ------------------ Attributes (flex) ------------------

    /**
     * "flex-direction" flex property
     * ``` tsx
     *  <Flex direction="row">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let direction: FlexDirection = "row";

    /**
     * "justify-content" flex property
     * ``` tsx
     *  <Flex justify="center">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let justify: JustifyContent = "center";

    /**
     * "align-items" flex property
     * ``` tsx
     *  <Flex align="center">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let align: AlignItems = "center";

    /**
     * "flex-wrap" flex property
     * ``` tsx
     *  <Flex wrap="nowrap">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let wrap: FlexWrap = "nowrap";

    /**
     * "align-content" flex property
     * ``` tsx
     *  <Flex align_content="center">
     *      ...
     *  <Flex/>
     * ```
     * ```@xl-soft/ui```
     */
    export let align_content: AlignContent = "center";

    /**
     * "gap" flex property
     * ``` tsx
     *  <Flex gap="25px">
     *      ...
     *  </Flex>
     * ```
     * ```@xl-soft/ui```
     */
    export let gap: string = "25px";

    // ------------------ Setup ------------------

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

<!-- 
    @component 
    # ```Flex```

    Universal flex-container with pre-setup flex properties

    Here is example usage with example params:

    ``` tsx
    <Flex 
        style="pointer-events: none;"
        width="100%"
        height="100%"
        direction="row"
        justify="center"
        align="center"
        wrap="nowrap"
        gap="25px"
        align_content="center"
        x y bar
    >
        ...
    </Flex>
    ```

    ```@xl-soft/ui```
-->

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
        align-content: ${align_content};
        flex-wrap: ${wrap};
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
