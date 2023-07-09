<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";
    import { createEventDispatcher } from "svelte";
    import { getColor, type Colors, getOptimalTextColor } from "$lib/assets/scripts/colors";
    import Flex from "$lib/layout/Flex.svelte";
    const dispatch = createEventDispatcher();
    
    // ------------------ Apperance ------------------

    /**
     * Set width for component
     * ```
     * <Button width="300px"/>
     * ```
     */
    export let width = "300px";

    /**
     * Set height for component
     * ```
     * <Button height="50px"/>
     * ```
     */
    export let height = "40px";

    /**
     * Set text align
     * ```
     * <Button align="left"/>
     * ```
     */
    export let align: "left" | "center" | "right" = "center";

    /**
     * Set element color
     * ```
     * <Button border="red"/>
     * ```
     */
    export let color: Colors = 'accent'

    /**
     * Button placeholder
     * ```
     * <Button placeholder="E-mail"/>
     * ```
     */
    export let placeholder: string = ''

    // ------------------ Interaction ------------------

    /**
     * Disabled switch
     * ```
     * <Button disabled/>
     * ```
     */
    export let disabled = false


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
        color: ${getOptimalTextColor(color)}
    `}
>   
    {#if $$slots.prefix}
        <Flex width="16px" height="16px" style="opacity: .5; color: {getOptimalTextColor(color)}">
            <slot name="prefix"/> 
        </Flex>
    {/if}

    <span style="flex-grow: 1; color: {getOptimalTextColor(color)}; text-align: {align};">
        {placeholder}
    </span>

    {#if $$slots.postfix}
        <Flex width="16px" height="16px" style="opacity: .5; color: {getOptimalTextColor(color)}">
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