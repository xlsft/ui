<script lang="ts">
    import { getColor, type Colors, type Depths } from "$lib/assets/scripts/colors";
    import type { IconCategories, IconList, IconSets } from "$lib/assets/scripts/icons";
    import { theme, accent } from "$lib/stores";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // ------------------ Preference ------------------

    /**
     * Icon set
     * ```
     * <Icon set="line"/>
     * ```
     */
    export let set: IconSets = "line";

    /**
     * Icon category
     * ```
     * <Icon category="alerts"/>
     * ```
     */
    export let category: IconCategories = "alerts";

    /**
     * Icon name
     * ```
     * <Icon name="ok"/>
     * ```
     */
    export let name: IconList = "ok";
    
    // ------------------ Apperance ------------------

    /**
     * Set size for icon
     * ```
     * <Icon size={50}/>
     * ```
     */
    export let size = 24;

    /**
     * Set main color for icon
     * ```
     * <Switch color="accent"/>
     * ```
     */
    export let color: Colors = "theme";

    /**
     * Set main color depth for icon
     * ```
     * <Switch depth={1000}/>
     * ```
     */
    export let depth: Depths = 1000;

    /**
     * Fill switch
     * ```
     * <Icon fill/>
     * ```
     */
    export let fill = false;

    /**
     * Set fill color for icon
     * ```
     * <Switch fill_color="green"/>
     * ```
     */
    export let fill_color: Colors = "accent";

    /**
     * Set fill color depth for icon
     * ```
     * <Switch fill_depth={1000}/>
     * ```
     */
    export let fill_depth: Depths = 1000;

    type Rotate = 0 | 90 | 180 | 270 | 360;
    /**
     * Set angle for icon
     * ```
     * <Switch rotate={180}/>
     * ```
     */
    export let rotate: Rotate = 0;

    let element_color: string; 

    $: if ($theme == 'dark' && color == 'theme') element_color = getColor(0, 'neutral');
    $: if ($theme == 'light' && color == 'theme') element_color = getColor(1000, 'neutral');
    if (color != 'theme') element_color = getColor(1000, 'neutral');

    $: color != 'theme' ? element_color = getColor(depth, color) : null;
    // @ts-ignore
    let accent_color: Colors = $accent;

    // ------------------ Animation ------------------
    
    /**
     * Set opacity from 0 to 1
     * ```
     * <Switch opacity={1}/>
     * ```
     */
    export let opacity = 1;

    /**
     * Set start opacity on animation from 0 to 1
     * ```
     * <Switch opacity_start={0}/>
     * ```
     */
    export let opacity_start = 0;

    const load = tweened(opacity_start, {
        duration: 1000,
        easing: cubicOut,
    });

    onMount(() => load.set(opacity));

    // ------------------ Interaction ------------------

    /**
     * Button effect switch
     * ```
     * <Icon button/>
     * ```
     */
    export let button = false;

    /**
     * Disabled effect switch
     * ```
     * <Icon disabled/>
     * ```
     */
    export let disabled = false;

    let click = () => (disabled == false ? dispatch("click") : "");

</script>

<!-- 
    @component 
    # ```Icon```

    Element, that provides svg interactive icons from official API

    Here is example usage with example params:

    ```
    <Icon 
        set="line"
        category="alerts"
        name="ok"
        size={50}
        color="green"
        depth={1000}
        fill
        fill_color="green"
        fill_depth={1000}
        rotate={180}
        opacity={1}
        opacity_start={0}
        button
        disabled
        on:click={() => {}}
    />
    ```

    ```@xl-soft/ui```
-->

<div
    class="xl-ui-icon-wrapper"
    style="width: {size}px; height: {size}px;"
    data-button={button}
    data-disabled={disabled}
    role="presentation"
    aria-atomic="true"
    aria-relevant="all"
    on:click={click}
    on:keydown={click}
>
    <img
        class={`xl-ui-icon`}
        src={`https://xluiassets.deno.dev/icons/${set}/${category}/${name}?color=${
            color == 'theme' ?
                $theme == 'dark' ? getColor(0, 'neutral') : getColor(1000, 'neutral')
                :
                getColor(depth, color)
            }&fill=${
                fill == true
                    ? fill_color == "accent"
                        ? getColor(fill_depth, accent_color)
                        : getColor(fill_depth, fill_color)
                    : "none"
            }&size=${size}&rotate=${rotate}`
        }
        alt={name}
        style={`
            ${
                button == true
                    ? "pointer-events: all; "
                    : "pointer-events: none;"
            }
            opacity: ${$load};
        `}
        decoding="async"
    />
</div>

<style>
    .xl-ui-icon-wrapper[data-disabled="true"] {
        opacity: 0.5;
        pointer-events: none;
        cursor: not-allowed;
    }
    .xl-ui-icon-wrapper:hover[data-button="true"][data-disabled="false"] {
        opacity: 0.5;
        cursor: pointer;
    }
</style>
