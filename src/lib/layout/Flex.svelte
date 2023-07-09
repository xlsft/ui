<script lang="ts">
    import { onMount } from "svelte";

    // ------------------ Types ------------------

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

    // ------------------ Preferences ------------------

    /**
     * Additional styles
     * ```
     *  <Flex style="pointer-events: none;">
     *      ...
     *  <Flex/>
     * ```
     */
    export let style: string = "";

    /**
     * Set width for flex container
     * ```
     *  <Flex width="100%">
     *      ...
     *  <Flex/>
     * ```
     */
    export let width: string = "";

    /**
     * Set height for flex container
     * ```
     *  <Flex height="100%">
     *      ...
     *  <Flex/>
     * ```
     */
    export let height: string = "";
        
    // ------------------ Overflow ------------------

    /**
     * Switch for overflow-x
     * ```
     *  <Flex x>
     *      ...
     *  <Flex/>
     * ```
     */
    export let x: boolean = false;

    /**
     * Switch for overflow-y
     * ```
     *  <Flex y>
     *      ...
     *  <Flex/>
     * ```
     */
    export let y: boolean = false;

    /**
     * Switch for scrollbar visibility
     * ```
     *  <Flex bar>
     *      ...
     *  <Flex/>
     * ```
     */
    export let bar: boolean = false;

    let overflow: HTMLElement;

    onMount(() => {
        if (x == true && y == false && overflow) {
            overflow.addEventListener("wheel", (e: WheelEvent) => {
                e.preventDefault();
                overflow.scrollBy({ left: e.deltaY < 0 ? -30 : 30 });
            });
        }
    });

    // ------------------ Flex ------------------

    /**
     * "flex-direction" flex property
     * ```
     *  <Flex direction="row">
     *      ...
     *  <Flex/>
     * ```
     */
    export let direction: FlexDirection = "row";

    /**
     * "justify-content" flex property
     * ```
     *  <Flex justify="center">
     *      ...
     *  <Flex/>
     * ```
     */
    export let justify: JustifyContent = "center";

    /**
     * "align-items" flex property
     * ```
     *  <Flex align="center">
     *      ...
     *  <Flex/>
     * ```
     */
    export let align: AlignItems = "center";

    /**
     * "flex-wrap" flex property
     * ```
     *  <Flex wrap="nowrap">
     *      ...
     *  <Flex/>
     * ```
     */
    export let wrap: FlexWrap = "nowrap";

    /**
     * "align-content" flex property
     * ```
     *  <Flex align_content="center">
     *      ...
     *  <Flex/>
     * ```
     */
    export let align_content: AlignContent = "center";

    /**
     * "gap" flex property
     * ```
     *  <Flex gap="25px">
     *      ...
     *  </Flex>
     * ```
     */
    export let gap: string = "25px";

</script>

<!-- 
    @component 
    # ```Flex```

    Universal flex-container with pre-setup flex properties

    Here is example usage with example params:

    ```
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
