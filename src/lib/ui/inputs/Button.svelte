<script lang="ts">

    // ------------------ Imports ------------------
    
    import { createEventDispatcher } from "svelte";
    import { getColor, getTextColor } from "$lib/colors";
    import type { Align, Colors } from "$lib/core";
    import { Flex } from "$lib/ui";
    const dispatch = createEventDispatcher();
    
    // ------------------ Apperance ------------------

    /**
     * Set width for component
     * ``` tsx
     * <Button width="300px"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let width = "300px";

    /**
     * Set height for component
     * ``` tsx
     * <Button height="50px"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let height = "40px";

    /**
     * Set text align
     * ``` tsx
     * <Button align="left"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let align: Align = "center";

    /**
     * Set element color
     * ``` tsx
     * <Button border="red"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let color: Colors = 'accent'

    /**
     * Button placeholder
     * ``` tsx
     * <Button placeholder="E-mail"/>
     * ```
     * ```@xl-soft/ui```
     */
    export let placeholder: string = ''

    // ------------------ Interaction ------------------

    /**
     * Disabled switch
     * ``` tsx
     * <Button disabled/>
     * ```
     * ```@xl-soft/ui```
     */
    export let disabled = false

    // ------------------ Setup ------------------

    let element_color: string = getColor(1000, color)

    const click = () => disabled == false ? dispatch("click") : null;
    const hover = () => disabled == false ? element_color = getColor(800, color) : null;
    const leave = () => disabled == false ? element_color = getColor(1000, color) : null;
</script>

<!-- 
    @component 
    # ```Input```

    Input element. Can be used as text, number, password, date or other input

    Here is example usage with example params:

    ``` tsx
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
    class={`xl-ui-button`}
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
        color: ${getTextColor(color)}
    `}
>   
    {#if $$slots.prefix}
        <Flex width="16px" height="16px" style="opacity: .5; color: {getTextColor(color)}">
            <slot name="prefix"/> 
        </Flex>
    {/if}

    <span style="flex-grow: 1; color: {getTextColor(color)}; text-align: {align};">
        {placeholder}
    </span>

    {#if $$slots.postfix}
        <Flex width="16px" height="16px" style="opacity: .5; color: {getTextColor(color)}">
            <slot name="postfix"/> 
        </Flex>
    {/if}
</div>


<style>
    .xl-ui-button {
        border-radius: 8px;
        padding: 10px 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
    }

    .xl-ui-button-placeholder {
        padding: 0px;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 16px;
    }

    .xl-ui-button[data-disabled="true"] {
        cursor: not-allowed;
    }
</style>