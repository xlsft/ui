<script>
    import { createEventDispatcher } from "svelte";
    import Icon from "../../media/Icon.svelte";
    const dispatch = createEventDispatcher()
    export let disabled = false, style = "", compact = false, transparent = false, color = "accent", width = "max-content", height = "max-content", icon = ""

    function click() {
        if (disabled == false) dispatch('click')
    }
</script>


<div 
    class={`xl-ui-button`} 
    on:click={click} on:keypress={click} role="button"
    style={`width: ${width}; height: ${height}; ${style || ''}`} 
    {disabled}
    compact={`${compact || false}`}
    color={color}
    transparent={`${transparent || false}`}
>   
    {#if icon}
        {#if transparent == true}
            <Icon icon={icon}/>
        {:else}
            <Icon icon={icon} noinvert/>
        {/if}
    {/if}
    <slot/>
</div>


<style>
    .xl-ui-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 10px 25px;
        border-radius: 10px;
        text-align: center; 
        cursor: pointer;
        font-family: Rubik;
        font-size: 15px;
        gap: 15px;
    }

    .xl-ui-button[compact="true"] {
        padding: 5px 10px;
        gap: 10px;
    }

    .xl-ui-button {
        transition: .4s ease-in-out;
    }

    .xl-ui-button:hover {
        transition: .4s ease-in-out;
    }

    /* ----------------accent---------------- */
    
    .xl-ui-button[color="accent"] {
        color: var(--theme-accent-text-color);
        background-color: var(--theme-accent-color-1000);
    }
    .xl-ui-button[color="accent"]:hover {
        background-color: var(--theme-accent-color-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------cobalt---------------- */
    
    .xl-ui-button[color="cobalt"] {
        color: var(--neutral-0);
        background-color: var(--cobalt-1000);
    }
    .xl-ui-button[color="cobalt"]:hover {
        background-color: var(--cobalt-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------sky---------------- */
    
    .xl-ui-button[color="sky"] {
        color: var(--neutral-1000);
        background-color: var(--sky-1000);
    }
    .xl-ui-button[color="sky"]:hover {
        background-color: var(--sky-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------red---------------- */
    
    .xl-ui-button[color="red"] {
        color: var(--neutral-0);
        background-color: var(--red-1000);
    }
    .xl-ui-button[color="red"]:hover {
        background-color: var(--red-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------orange---------------- */
    
    .xl-ui-button[color="orange"] {
        color: var(--neutral-0);
        background-color: var(--orange-1000);
    }
    .xl-ui-button[color="orange"]:hover {
        background-color: var(--orange-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------lime---------------- */
    
    .xl-ui-button[color="lime"] {
        color: var(--neutral-1000);
        background-color: var(--lime-1000);
    }
    .xl-ui-button[color="lime"]:hover {
        background-color: var(--lime-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------green---------------- */
    
    .xl-ui-button[color="green"] {
        color: var(--neutral-1000);
        background-color: var(--green-1000);
    }
    .xl-ui-button[color="green"]:hover {
        background-color: var(--green-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------cyan---------------- */
    
    .xl-ui-button[color="cyan"] {
        color: var(--neutral-1000);
        background-color: var(--cyan-1000);
    }
    .xl-ui-button[color="cyan"]:hover {
        background-color: var(--cyan-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------blue---------------- */
    
    .xl-ui-button[color="blue"] {
        color: var(--neutral-0);
        background-color: var(--blue-1000);
    }
    .xl-ui-button[color="blue"]:hover {
        background-color: var(--blue-700);
    }

    /* -------------------------------------------*/



    /* ----------------royal---------------- */
    
    .xl-ui-button[color="royal"] {
        color: var(--neutral-0);
        background-color: var(--royal-1000);
    }
    .xl-ui-button[color="royal"]:hover {
        background-color: var(--royal-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------violet---------------- */

    .xl-ui-button[color="violet"] {
        color: var(--neutral-0);
        background-color: var(--violet-1000);
    }
    .xl-ui-button[color="violet"]:hover {
        background-color: var(--violet-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------purple---------------- */
    
    .xl-ui-button[color="purple"] {
        color: var(--neutral-0);
        background-color: var(--purple-1000);
    }
    .xl-ui-button[color="purple"]:hover {
        background-color: var(--purple-700);
    }

    /* -------------------------------------------*/



    /* ----------------pink---------------- */

    .xl-ui-button[color="pink"] {
        color: var(--neutral-0);
        background-color: var(--pink-1000);
    }
    .xl-ui-button[color="pink"]:hover {
        background-color: var(--pink-700);
    }

    /* -------------------------------------------*/

    .xl-ui-button[disabled="true"] {
        background-color: var(--neutral-700);
        color: var(--neutral-300);
        cursor: not-allowed;
    }
    .xl-ui-button[disabled="true"]:hover {
        background-color: var(--neutral-700);
        color: var(--neutral-300);
        cursor: not-allowed;
    }

    /* ----------------transparent---------------- */

    .xl-ui-button[transparent="true"] {
        background-color: #ffffff00;
        color: var(--theme-text-color);
        border: 2px solid var(--theme-text-color);
    }
    .xl-ui-button[transparent="true"]:hover {
        background-color: #ffffff00;
        color: var(--theme-text-color);
        border: 2px solid var(--theme-text-color);
        opacity: .5;
    }
    .xl-ui-button[disabled="true"][transparent="true"] {
        background-color: #ffffff00;
        color: var(--theme-text-color);
        border: 2px solid var(--theme-text-color);
        opacity: .3;
        cursor: not-allowed;
    }
    .xl-ui-button[disabled="true"][transparent="true"]:hover {
        background-color: #ffffff00;
        color: var(--theme-text-color);
        border: 2px solid var(--theme-text-color);
        opacity: .3;
        cursor: not-allowed;
    }

    /* -------------------------------------------*/
</style>