<script>
    import { theme as currenttheme } from "../../stores";
    import { createEventDispatcher } from "svelte";
    import Icon from "../../media/Icon.svelte";
    const dispatch = createEventDispatcher()
    export let 
    disabled = false, value = false,
    transparent = false, color = "accent", icon = "", compact = false,
    theme = false
    import { tweened } from 'svelte/motion';
    import { cubicInOut } from 'svelte/easing';
    let size = "14px"
    let pos = tweened(5, {
		duration: 400,
		easing: cubicInOut
	})
    let posshadow = tweened(5, {
		duration: 455,
		easing: cubicInOut
	})
    let posshadow2 = tweened(5, {
		duration: 510,
		easing: cubicInOut
	})

    let p = {
        start: 5,
        end: 45
    }

    if (compact == true) p = { start: 0, end: 0 }

    if (value == true) pos.set(p.end); else pos.set(p.start)
    if (value == true) posshadow.set(p.end); else posshadow.set(p.start)
    if (value == true) posshadow2.set(p.end); else posshadow2.set(p.start)


    if (theme == true) () => {
            if ($currenttheme == "dark") { value = true; pos.set(p.end); posshadow.set(p.end); posshadow2.set(p.end); return }
            if ($currenttheme == "light") { value = false; pos.set(p.start); posshadow.set(p.start); posshadow2.set(p.start); return }
    }

    function change() {
        if (disabled == false) {
            dispatch('input')
            if (theme == true) {
                if ($currenttheme == "dark") { value = true; pos.set(p.end); posshadow.set(p.end); posshadow2.set(p.end); currenttheme.set('light'); return }
                if ($currenttheme == "light") { value = false; pos.set(p.start); posshadow.set(p.start); posshadow2.set(p.start); currenttheme.set('dark'); return }
            }

            if (value == true) { value = false; pos.set(p.start); posshadow.set(p.start); posshadow2.set(p.start); return }
            if (value == false) { value = true; pos.set(p.end); posshadow.set(p.end); posshadow2.set(p.end); return }
        }
    }
    $: console.log('icon: ', icon)
</script>

<!-- смена темы без иконки не отображает иконку вшитую -->

<div 
    class={`xl-ui-switch`} 
    on:click={change} on:keypress={change} role="button"
    {disabled}
    color={color}
    transparent={transparent}
    compact={compact}
    active={value}
    theme={$currenttheme}
    themechanger={theme}
>
    {#if compact == false}
        <div class={`xl-ui-switch-knob-shadow`} style="left: {$posshadow}px;" transparent={transparent} compact={compact} themechanger={theme}/>
        <div class={`xl-ui-switch-knob-shadow`} style="left: {$posshadow2}px;" transparent={transparent} compact={compact} themechanger={theme}/>
        <div class={`xl-ui-switch-knob`} style="left: {$pos}px;" active={value} transparent={transparent} compact={compact} themechanger={theme}>
            {#if icon || theme == true}
                {#if theme == true}
                    {#if transparent == false}
                        {#if $currenttheme == "light"}
                            <Icon icon="navigation_light" invert size={size} style="opacity: 0.5"/>
                        {:else}
                            <Icon icon="navigation_dark" invert size={size} style="opacity: 0.5"/>
                        {/if}
                    {:else}
                        {#if $currenttheme == "light"}
                            <Icon icon="navigation_light" size={size}/>
                        {:else}
                            <Icon icon="navigation_dark" size={size} style="opacity: 0.5"/>
                        {/if}
                    {/if}
                {:else}
                    {#if transparent == false}
                        <Icon icon={icon} invert size={size} style="opacity: 0.5"/>
                    {:else}
                        <Icon icon={icon} size={size}/>
                    {/if}
                {/if}
            {/if}
        </div>
    {:else}
        {#if icon || theme == true}
            {#if theme == true}
                {#if transparent == false}
                    {#if $currenttheme == "light"}
                        <Icon icon="navigation_light" invert size={size} style="opacity: 0.5"/>
                    {:else}
                        <Icon icon="navigation_dark" invert size={size} style="opacity: 0.5"/>
                    {/if}
                {:else}
                    {#if $currenttheme == "light"}
                        <Icon icon="navigation_light" size={size}/>
                    {:else}
                        <Icon icon="navigation_dark" size={size} style="opacity: 0.5"/>
                    {/if}
                {/if}
            {:else}
                {#if transparent == false}
                    <Icon icon={icon} invert size={size} style="opacity: 0.5"/>
                {:else}
                    <Icon icon={icon} size={size}/>
                {/if}
            {/if}
        {/if}
    {/if}

</div>



<style>
    .xl-ui-switch-knob[active="false"] {
        transform: rotate(0deg);
    }

    .xl-ui-switch-knob[active="true"] {
        transform: rotate(360deg);
    }

    .xl-ui-switch-knob {
        height: 30px;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--neutral-0);
        position: absolute;
        top: 5px;
        cursor: pointer;
    }

    .xl-ui-switch-knob-shadow {
        height: 30px;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        background-color: var(--neutral-0);
        position: absolute;
        top: 5px;
        cursor: pointer;
    }

    .xl-ui-switch {
        height: 40px;
        width: 80px;
        border-radius: 20px;
        position: relative;
        cursor: pointer;
    }


    /* ----------------accent---------------- */
    
    .xl-ui-switch[color="accent"] {
        background-color: var(--theme-accent-color-1000);
    }
    .xl-ui-switch[color="accent"]:hover {
        background-color: var(--theme-accent-color-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------cobalt---------------- */
    
    .xl-ui-switch[color="cobalt"] {
        background-color: var(--cobalt-1000);
    }
    .xl-ui-switch[color="cobalt"]:hover {
        background-color: var(--cobalt-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------sky---------------- */
    
    .xl-ui-switch[color="sky"] {
        background-color: var(--sky-1000);
    }
    .xl-ui-switch[color="sky"]:hover {
        background-color: var(--sky-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------red---------------- */
    
    .xl-ui-switch[color="red"] {
        background-color: var(--red-1000);
    }
    .xl-ui-switch[color="red"]:hover {
        background-color: var(--red-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------orange---------------- */
    
    .xl-ui-switch[color="orange"] {
        background-color: var(--orange-1000);
    }
    .xl-ui-switch[color="orange"]:hover {
        background-color: var(--orange-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------lime---------------- */
    
    .xl-ui-switch[color="lime"] {
        background-color: var(--lime-1000);
    }
    .xl-ui-switch[color="lime"]:hover {
        background-color: var(--lime-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------green---------------- */
    
    .xl-ui-switch[color="green"] {
        background-color: var(--green-1000);
    }
    .xl-ui-switch[color="green"]:hover {
        background-color: var(--green-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------cyan---------------- */
    
    .xl-ui-switch[color="cyan"] {
        background-color: var(--cyan-1000);
    }
    .xl-ui-switch[color="cyan"]:hover {
        background-color: var(--cyan-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------blue---------------- */
    
    .xl-ui-switch[color="blue"] {
        background-color: var(--blue-1000);
    }
    .xl-ui-switch[color="blue"]:hover {
        background-color: var(--blue-700);
    }

    /* -------------------------------------------*/



    /* ----------------royal---------------- */
    
    .xl-ui-switch[color="royal"] {
        background-color: var(--royal-1000);
    }
    .xl-ui-switch[color="royal"]:hover {
        background-color: var(--royal-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------violet---------------- */

    .xl-ui-switch[color="violet"] {
        background-color: var(--violet-1000);
    }
    .xl-ui-switch[color="violet"]:hover {
        background-color: var(--violet-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------purple---------------- */
    
    .xl-ui-switch[color="purple"] {
        background-color: var(--purple-1000);
    }
    .xl-ui-switch[color="purple"]:hover {
        background-color: var(--purple-700);
    }

    /* -------------------------------------------*/



    /* ----------------pink---------------- */

    .xl-ui-switch[color="pink"] {
        background-color: var(--pink-1000);
    }
    .xl-ui-switch[color="pink"]:hover {
        background-color: var(--pink-700);
    }

    /* -------------------------------------------*/

    .xl-ui-switch[disabled="true"] {
        background-color: var(--neutral-700);
        cursor: not-allowed;
    }

    .xl-ui-switch-knob[disabled="true"] {
        cursor: not-allowed;
    }

    .xl-ui-switch[disabled="true"]:hover {
        background-color: var(--neutral-700);
        cursor: not-allowed;
    }

    /* ----------------transparent---------------- */

    .xl-ui-switch[transparent="true"] {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
    }
    .xl-ui-switch[transparent="true"]:hover {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
        opacity: .5;
    }
    .xl-ui-switch[disabled="true"][transparent="true"] {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
        opacity: .3;
        cursor: not-allowed;
    }
    .xl-ui-switch[disabled="true"][transparent="true"]:hover {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
        opacity: .3;
        cursor: not-allowed;
    }

    .xl-ui-switch-knob[transparent="true"] {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
        top: 4px;
        width: 28px;
        height: 28px;
    }

    .xl-ui-switch-knob[transparent="true"][compact="false"]:hover {
        background-color: #ffffff00;
        border: 2px solid var(--theme-text-color);
        opacity: .3;
    }

    .xl-ui-switch-knob-shadow[transparent="true"][compact="false"] {
        display: none;
    }

    /* -------------------------------------------*/

    .xl-ui-switch[compact="true"] {
        height: 30px;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--neutral-0);
    }

    .xl-ui-switch[compact="true"]:hover {
        background-color: var(--neutral-0);
        opacity: .5;
        
    }

    .xl-ui-switch[compact="true"][active="true"] {
        background-color: var(--green-1000);
    }

    .xl-ui-switch[compact="true"][theme="light"] {
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch[compact="true"][theme="light"][themechanger="true"] {
        background-color: var(--orange-1000);
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch[compact="true"][transparent="true"] {
        background-color: #ffffff00;
    }

    .xl-ui-switch[compact="true"][theme="light"][themechanger="true"][transparent="true"] {
        background-color: var(--orange-1000);
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch[compact="true"][active="true"][transparent="true"] {
        background-color: var(--green-1000);
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch[compact="true"][disabled="true"] {
        opacity: .3;
    }

    .xl-ui-switch-knob[active="true"][transparent="true"] {
        background-color: var(--green-1000);
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch-knob[active="true"][transparent="true"]:hover {
        background-color: var(--green-1000);
        border: 2px solid var(--theme-text-color);
    }

    .xl-ui-switch-knob[active="true"][themechanger="true"][transparent="true"] {
        background-color: var(--orange-1000);
        border: 2px solid var(--theme-text-color);
    }
</style>