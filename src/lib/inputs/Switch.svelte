<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";

    // events
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    // value
    export let value: boolean = false

    // disabled
    export let disabled: boolean = false

    // color
    import { getColor } from "$lib/assets/scripts/colors";
    import type { Colors, Depths } from "$lib/assets/scripts/colors";
    export let color: Colors = "accent"
    export let edepth: Depths = 1000
    export let hdepth: Depths = 700
    let ecolor = getColor(edepth, color)
    let hcolor = getColor(hdepth, color)
    export let vcolor: Colors = color
    export let vedepth: Depths = 1000
    export let vhdepth: Depths = 700
    let vecolor = getColor(vedepth, vcolor)
    let vhcolor = getColor(vhdepth, vcolor)
    let c: string = ecolor

    let hover = () => { disabled == false ? value == false ? c = hcolor : c = vhcolor : c = c } 
    let leave = () => { disabled == false ? value == false ? c = ecolor : c = vecolor : c = c }

    // theme
    import { theme as ctheme } from "../stores";
    export let theme: boolean = false
    $: if (theme == true) ctheme.subscribe((v) => v == 'light' ?  value = true : value = false)
    type ThemeIcon = "navigation_light" | "navigation_dark" | ""
    let ticon: ThemeIcon; 
    $: theme == true ? $ctheme == 'light' ? ticon = 'navigation_light' : ticon = 'navigation_dark' : ticon = ''

    // animation 
    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";
    let anim = (dur: number) => { return tweened(5, { duration: dur, easing: cubicInOut }) }
    let pos = { start: 5, end: 45 }
    let k = anim(400), s1 = anim(455), s2 = anim(510)

    // swithcing
    $: if (value == true) { k.set(pos.end); s1.set(pos.end); s2.set(pos.end) } else
    { k.set(pos.start); s1.set(pos.start); s2.set(pos.start) }
    const click = () => {
        if (disabled == true) return
        dispatch('')
        if (value == true) value = false; else value = true
        if (theme == true) { if ($ctheme == 'light') ctheme.set('dark'); else ctheme.set('light') }
    }

    // icon
    import type { IconsName } from "$lib/assets/scripts/icons";
    export let icon: IconsName = ""

</script>

<div
    class={`xl-ui-switch`}
    on:click={click}
    on:keypress={click}
    on:mouseenter={hover}
    on:mouseleave={leave}
    role="button"
    style="background: {c};"
    aria-disabled="{disabled}"
>
        <div
            class="xl-ui-switch-knob"
            style="left: {$s2}px;"
            data-active={value}
            aria-disabled="{disabled}"
        />
        <div
            class="xl-ui-switch-knob"
            style="left: {$s1}px;"
            data-active={value}
            aria-disabled="{disabled}"
        />
        <div
            class="xl-ui-switch-knob xl-ui-switch-knob-top"
            style="left: {$k}px;"
            data-active={value}
            aria-disabled="{disabled}"
        >
        <Icon name="{theme == false && icon != "" ? icon : ticon}" size="16px" color="dark" style="opacity: .5"/>
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

    *[aria-disabled="true"]:hover, *[aria-disabled="true"] {
        opacity: .5;
        cursor: not-allowed;
    }
</style>
