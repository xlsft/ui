<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";
    import { createEventDispatcher, onMount } from "svelte";
    import { getColor, type Colors } from "$lib/assets/scripts/colors";
    import Flex from "$lib/layout/Flex.svelte";
    import Noise from "$lib/effects/Noise.svelte";
    import { text } from "@sveltejs/kit";
    import measureText from "$lib/assets/scripts/measureText";
    import { blur as blurred } from 'svelte/transition';
    import { expoInOut } from "svelte/easing";
    import { tweened } from 'svelte/motion';



    const dispatch = createEventDispatcher();
    type InputTypes = "email" | "number" | "password" | "tel" | "text" | "url"
    
    // ------------------ Apperance ------------------

    /**
     * Set width for component
     * ```
     * <Input width="300px"/>
     * ```
     */
    export let width = "300px";

    /**
     * Set height for component
     * ```
     * <Input height="50px"/>
     * ```
     */
    export let height = "40px";

    /**
     * Set text align
     * ```
     * <Input align="left"/>
     * ```
     */
    export let align: "left" | "center" | "right" = "left";

    /**
     * Set border color
     * ```
     * <Input border="red"/>
     * ```
     */
    export let border: Colors = ''

    /**
     * Input placeholder
     * ```
     * <Input placeholder="E-mail"/>
     * ```
     */
     export let placeholder: string = ''

    // ------------------ Interaction ------------------

    /**
     * Disabled switch
     * ```
     * <Input disabled/>
     * ```
     */
    export let disabled = false

    /**
     * Value of input
     * ```
     * <Input bind:value/>
     * ```
     */
     export let value: string = ''

    /**
     * Set type for input
     * ```
     * <Input type="number"/>
     * ```
     */
    export let type: InputTypes = "text";


    let element: HTMLElement, size: any = { width: 0, heigth: 0 }, input_element: HTMLElement, input_size: any = { width: 0 }
    let element_color: string = 'var(--theme-bg-color-900)'
    let border_color: string = 'rgba(0,0,0,0)';
    let hidden = type == 'password' ? true : false;
    let hidden_width: number = measureText(value)
    let hidden_columns = Math.round(hidden_width / 7) + 3
    let hidden_width_animation = tweened(0, { duration: 50, easing: expoInOut });

    onMount(() => { 
        size.width = element.offsetWidth - (type == 'password' ? 26 : 0) - ($$slots.prefix ? 26 : 0) - ($$slots.postfix ? 26 : 0);
        size.height = element.offsetHeight - 20
        input_size.width = input_element.offsetWidth
        if (disabled == false && type == 'number') hidden_width_animation.set(hidden_width)
    })

    const element_type = (node: any): any => { node.type = type == 'password' ? hidden == false ? 'text' : `text` : type}
    const click = () => disabled == false ? dispatch("click") : null;
    const input = () => { if (disabled == false) { dispatch("input"); hidden_width_animation.set(hidden == true ? measureText(value) : 0)} }
    const focus = () => disabled == false ? border_color = getColor(1000, 'accent') : null;
    const blur = () => disabled == false ? border_color = 'rgba(0,0,0,0)' : null;
    const hover = () => disabled == false ? element_color = 'var(--theme-bg-color-800)' : null;
    const leave = () => disabled == false ? element_color = 'var(--theme-bg-color-900)' : null;
    const hide = () => { if (hidden == false) { hidden = true; hidden_width_animation.set(hidden_width) } else { hidden = false; hidden_width_animation.set(0) } }
    
</script>

<!-- 
    @component 
    # ```Input```

    Input element. Can be used as text, number, password, date or other input

    Here is example usage with example params:

    ```
    <Input
        type="number"
        width="300px"
        height="50px"
        align="left"
        border="red"
        placeholder="E-mail"
        disabled
        bind:value
        on:click={() => {}}
        on:input={() => {}}
    >
        <Icon slot="prefix"/>
        <Icon slot="postfix"/>
    </Input>
    ```

    ```@xl-soft/ui```
-->
<div 
    class={`xl-ui-input`}
    bind:this={element}
    on:click={click}
    on:keypress={click}
    on:mouseenter={hover}
    on:mouseleave={leave}
    role="presentation"
    aria-atomic="true"
    aria-relevant="all"
    data-disabled={disabled}
    style={`                
        background: ${disabled == false ? element_color : 'var(--theme-disabled)'};
        width: ${width};
        height: ${height};
        border: 2px solid ${disabled == false ? border ? border : border_color : 'rgba(0,0,0,0)'}
    `}
>   
    {#if $$slots.prefix}
        <Flex width="16px" height="16px" style="opacity: .5;">
            <slot name="prefix"/> 
        </Flex>
    {/if}

    <input
        bind:this={input_element}
        bind:value={value}
        on:click={focus}
        on:input={() => { input(); hidden_width = measureText(value) }}
        on:blur={blur}
        use:element_type
        data-hidden={value ? hidden : false}
        style={`text-align: ${align};`}
        {placeholder}
        {disabled}
    />
    
    <div 
        class={`xl-ui-input-hidden`} 
        style={`
            position: absolute; 
            pointer-events:none;
            top: 50%; 
            left: ${$$slots.prefix ? '51px' : '25px'};  
            transform: translate(0%,-50%);
            width: ${$hidden_width_animation}px;
            max-width: ${input_size.width}px;
            height: ${size.height}px;
            border-radius: 4px;
            overflow: hidden;
        `}
    >
        <Noise 
            columns={hidden_columns} 
            style={`
                position: absolute; 
                pointer-events:none;
                width: ${$hidden_width_animation}px;
                max-width: ${input_size.width}px;
                height: ${size.height}px;
                top: 50%; 
                left: 0px; 
                transform: translate(0%,-50%);
            `}
            
        />
    </div>
    
    {#if $$slots.postfix}
        <Flex width="16px" height="16px" style="opacity: .5;">
            <slot name="postfix"/> 
        </Flex>
    {/if}

    {#if type == 'password'}
        <Flex width="16px" height="16px">
            <Icon button={!disabled} on:click={hide} opacity={disabled ? 0.5 : 1} category="auth" name={hidden == true ? 'hidden' : 'showed'}/>
        </Flex>
    {/if}
</div>

<style>
    .xl-ui-input {
        border-radius: 8px;
        padding: 10px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        position: relative;
    }

    .xl-ui-input > input, input:active {
        border: none;
        outline: none;
        background: rgba(0, 0, 0, 0);
        border-radius: 8px;
        padding: 0px;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 16px;
        color: var(--theme-text-color)
    }

    .xl-ui-input > input[data-hidden="true"] {
        caret-color: transparent;
        color: transparent;
    }

    .xl-ui-input > input[data-hidden="true"]::selection {
        background: transparent;
    }

    .xl-ui-input[data-disabled="true"], input:disabled {
        cursor: not-allowed;
    }

</style>