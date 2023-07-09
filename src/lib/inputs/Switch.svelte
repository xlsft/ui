<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";
    import { createEventDispatcher } from "svelte";
    import { getColor } from "$lib/assets/scripts/colors";
    import type { Colors, Depths } from "$lib/assets/scripts/colors";
    import { theme as theme_store } from "../stores";

    
    // ------------------ Apperance ------------------

    /**
     * Set color for component
     * ```
     * <Switch color="red"/>
     * ```
     */
    export let color: Colors = "accent";
    
    /**
     * Set depth for component color
     * ```
     * <Switch depth={1000}/>
     * ```
     */
    export let depth: Depths = 1000;
    
    /**
     * Set depth for component color on hover
     * ```
     * <Switch depth_hover={900}/>
     * ```
     */
    export let depth_hover: Depths = 700;

    /**
     * Set color for active component
     * ```
     * <Switch active_color="green"/>
     * ```
     */
    export let active_color: Colors = color;
    
    /**
     * Set depth for active component color
     * ```
     * <Switch active_depth={1000}/>
     * ```
     */
    export let active_depth: Depths = 1000;
    
    /**
     * Set depth for active component color on hover
     * ```
     * <Switch active_depth_hover={900}/>
     * ```
     */
    export let active_depth_hover: Depths = 700;

    let element_color = getColor(depth, color);
    let element_hover_color = getColor(depth_hover, color);
    let element_active_color = getColor(active_depth, active_color);
    let element_active_hover_color = getColor(active_depth_hover, active_color);
    let element_color_value: string = element_color;
    let element_theme: any; theme_store.subscribe((v) => element_theme = v);

    // ------------------ Animation ------------------

    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";
    import type { IconList } from "$lib/assets/scripts/icons";
    let anim = (dur: number) => { return tweened(5, { duration: dur, easing: cubicInOut }) };
    let base_pos = { start: 5, end: 45 };
    let knob_pos = anim(400), knob_shadow_1_pos = anim(455), knob_shadow_2_pos = anim(510);

    // ------------------ Interaction ------------------

    /**
     * Value of switch
     * ```
     * <Switch value={true}/>
     *
     * <!-- or -->
     *
     * <script>
     *     let value = true
     * <script/>
     *
     * <Switch bind:value/>
     * ```
     */
    export let value: boolean = false;

    /**
     * Disabled feature switch
     * ```
     * <Switch disabled/>
     * ```
     */
    export let disabled: boolean = false;

    /**
     * Theme switcher (dark, light)
     * ```
     * <Switch theme/>
     * ```
     * @return {HTMLElement} param
     */
     export let theme: boolean = false;

    const dispatch = createEventDispatcher();
    $: if (value == true) {
        knob_pos.set(base_pos.end);
        knob_shadow_1_pos.set(base_pos.end);
        knob_shadow_2_pos.set(base_pos.end);
    } else {
        knob_pos.set(base_pos.start);
        knob_shadow_1_pos.set(base_pos.start);
        knob_shadow_2_pos.set(base_pos.start);
    }
    const click = () => {
        if (disabled == true) return;
        dispatch("click");
        if (value == true) value = false;
        else value = true;
        if (theme == true) {
            if ($theme_store == "light") theme_store.set("dark");
            else theme_store.set("light");
        }
    };

    const hover = () => {
        disabled == false
            ? value == false
                ? (element_color_value = element_hover_color)
                : (element_color_value = element_active_hover_color)
            : (element_color_value = element_color_value);
    };
    const leave = () => {
        disabled == false
            ? value == false
                ? (element_color_value = element_color)
                : (element_color_value = element_active_color)
            : (element_color_value = element_color_value);
    };

</script>

<!-- 
    @component 
    # ```Switch```

    Input switch element. Can be used as theme switcher, or other boolean state

    Here is example usage with example params:

    ```
    <Switch
        color="red"
        depth={1000}
        depth_hover={900}
        active_color="green"
        active_depth={1000}
        active_depth_hover={900}
        bind:value
        disabled
        theme
        on:click={() => {}}
    >
        ...
    </Switch>
    ```

    ```@xl-soft/ui```
-->

<div
    class={`xl-ui-switch`}
    on:click={click}
    on:keypress={click}
    on:mouseenter={hover}
    on:mouseleave={leave}
    role="presentation"
    aria-atomic="true"
    aria-relevant="all"
    style="background: {element_color_value};"
    data-disabled={disabled}
>
    <div
        class="xl-ui-switch-knob"
        style="left: {$knob_shadow_2_pos}px;"
        data-active={value}
        data-disabled={disabled}
    />
    <div
        class="xl-ui-switch-knob"
        style="left: {$knob_shadow_1_pos}px;"
        data-active={value}
        data-disabled={disabled}
    />
    <div
        class="xl-ui-switch-knob xl-ui-switch-knob-top"
        style="left: {$knob_pos}px;"
        data-active={value}
        data-disabled={disabled}
    >
        {#if theme == true}
            <Icon
                category="theme"
                color="neutral"
                depth={1000}
                name={element_theme}
                opacity={0.5}
                size={24}
            />
        {:else}
            <slot/>
        {/if}
    </div>
</div>

<style>
    .xl-ui-switch {
        height: 40px;
        width: 80px;
        border-radius: 20px;
        position: relative;
        cursor: pointer;
    }

    .xl-ui-switch-knob {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: var(--neutral-0);
        position: absolute;
        top: 5px;
        cursor: pointer;
    }

    .xl-ui-switch-knob-top {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .xl-ui-switch-knob[data-active="false"] {
        transform: rotate(0deg);
    }

    .xl-ui-switch-knob[data-active="true"] {
        transform: rotate(360deg);
    }

    *[data-disabled="true"]:hover,
    *[data-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
