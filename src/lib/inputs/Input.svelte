<script>
    import { createEventDispatcher } from "svelte";
    import Icon from "../media/Icon.svelte";
    const dispatch = createEventDispatcher()
    export let value = "", disabled = false, style = "", color = "accent", compact = false, placeholder = "", type = "text", state = "default", hide = false

    function input() {
        if (disabled == false) dispatch('input')
    }
    function click() {
        if (disabled == false) dispatch('click')
    }
    let pwd = {type: 'password', icon: 'edit_hidden', state: false}
    
    
    function changePasswordType() {
        if (pwd.type == 'password')  {
            type = 'text'
            pwd.type = 'text'
            pwd.icon = 'edit_hidden'
            return
        }
        if (pwd.type == 'text')  {
            type = 'password'
            pwd.type = 'password'
            pwd.icon = 'edit_view'
            return
        }
    }
    $: console.log(type)
</script>

<div class={`xl-ui-input`} style="">
    {#if hide == true}
    <div class={`xl-ui-input-button`} on:click={changePasswordType} on:keypress={changePasswordType}>
        <Icon icon={pwd.icon} />
    </div>
    {/if}
    <input
        style={style}
        {compact}
        {color}
        {disabled}
        {placeholder}
        {state}
        {...{ type }}
        bind:value={value}
        on:input={input}
        on:click={click}
    >

</div>

<style>
    .xl-ui-input-button:hover {
        opacity: .5;
    }

    .xl-ui-input-button {
        height: 100%;
        position: absolute;
        right: 0px;
        top: 0px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    
    input[state="true"] {
        outline: 2px solid var(--green-1000);
    }

    input[state="false"] {
        outline: 2px solid var(--red-1000);
    }

    input[state="default"] {
        outline: none;
    }

    .xl-ui-input {
        position: relative;
        width: max-content;
        height: max-content;
    }
    
    input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        outline: none; 
        border: none;
        text-align: center; 
        box-sizing: border-box;
        font-family: Rubik;
        font-size: 15px;
        cursor: pointer;
        padding: 9px 25px;
    }

    input:focus {
        outline: 2px solid var(--theme-accent-color-800);
    }

    /* ----------------accent---------------- */
    
    input[color="accent"] {
        color: var(--theme-accent-text-color);
        background-color: var(--theme-accent-color-1000);
    }
    input[color="accent"]:hover {
        background-color: var(--theme-accent-color-700);
    }
    
    /* -------------------------------------------*/

    /* ----------------neutral---------------- */
    
    input[color="neutral"] {
        color: var(--neutral-1000);
        background-color: var(--neutral-200);
    }
    input[color="neutral"]:hover {
        background-color: var(--cobalt-700);
    }
    
    /* -------------------------------------------*/

    /* ----------------cobalt---------------- */
    
    input[color="cobalt"] {
        color: var(--neutral-0);
        background-color: var(--cobalt-900);
    }
    input[color="cobalt"]:hover {
        background-color: var(--cobalt-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------sky---------------- */
    
    input[color="sky"] {
        color: var(--neutral-1000);
        background-color: var(--sky-1000);
    }
    input[color="sky"]:hover {
        background-color: var(--sky-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------red---------------- */
    
    input[color="red"] {
        color: var(--neutral-0);
        background-color: var(--red-1000);
    }
    input[color="red"]:hover {
        background-color: var(--red-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------orange---------------- */
    
    input[color="orange"] {
        color: var(--neutral-0);
        background-color: var(--orange-1000);
    }
    input[color="orange"]:hover {
        background-color: var(--orange-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------lime---------------- */
    
    input[color="lime"] {
        color: var(--neutral-1000);
        background-color: var(--lime-1000);
    }
    input[color="lime"]:hover {
        background-color: var(--lime-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------green---------------- */
    
    input[color="green"] {
        color: var(--neutral-1000);
        background-color: var(--green-1000);
    }
    input[color="green"]:hover {
        background-color: var(--green-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------cyan---------------- */
    
    input[color="cyan"] {
        color: var(--neutral-1000);
        background-color: var(--cyan-1000);
    }
    input[color="cyan"]:hover {
        background-color: var(--cyan-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------blue---------------- */
    
    input[color="blue"] {
        color: var(--neutral-0);
        background-color: var(--blue-1000);
    }
    input[color="blue"]:hover {
        background-color: var(--blue-700);
    }

    /* -------------------------------------------*/



    /* ----------------royal---------------- */
    
    input[color="royal"] {
        color: var(--neutral-0);
        background-color: var(--royal-1000);
    }
    input[color="royal"]:hover {
        background-color: var(--royal-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------violet---------------- */

    input[color="violet"] {
        color: var(--neutral-0);
        background-color: var(--violet-1000);
    }
    input[color="violet"]:hover {
        background-color: var(--violet-700);
    }
    
    /* -------------------------------------------*/



    /* ----------------purple---------------- */
    
    input[color="purple"] {
        color: var(--neutral-0);
        background-color: var(--purple-1000);
    }
    input[color="purple"]:hover {
        background-color: var(--purple-700);
    }

    /* -------------------------------------------*/



    /* ----------------pink---------------- */

    input[color="pink"] {
        color: var(--neutral-0);
        background-color: var(--pink-1000);
    }
    input[color="pink"]:hover {
        background-color: var(--pink-700);
    }

    /* -------------------------------------------*/

    input:disabled {
        background-color: var(--neutral-700);
        color: var(--neutral-300);
        cursor: not-allowed;
    }

    input:disabled:hover {
        background-color: var(--neutral-700);
        color: var(--neutral-300);
        cursor: not-allowed;
    }
</style>