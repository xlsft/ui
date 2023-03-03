<!-- <script>
    import { setContext } from 'svelte';
    export let value
    export let placeholder = 'placeholder'
    export let opened = false

    export let disabled = false, style = "", compact = false, color = "accent", width = "", height = ""

    import { createEventDispatcher } from 'svelte';
    import Flex from '../../structure/Flex.svelte';
    const dispatch = createEventDispatcher();


    function open() {
        if (opened == true) { opened = false; return }
        if (opened == false) { opened = true; dispatch('open'); return }
    }

    setContext('select', {
        select: (select) => {
            value = select
            placeholder = select
        }
    });
    setContext('open', {
        open: () => open()
    });

</script>

<div class="xl-ui-select" style="width: {width}; height: {height}; {style}" color={color} {compact} {disabled}>
    <div class="xl-ui-select-dropdown" opened={opened}>
        <div class="xl-ui-select-dropdown-placeholder" style="width: 100%; height: {height}">{placeholder}</div>
        <div class="xl-ui-select-dropdown-content">
            <slot/>
        </div>
    </div>
    {placeholder}
    <div class="xl-ui-select-button" on:click={open} on:keypress={open}>
        <svg class="xl-ui-select-button-icon" opened={opened} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="16" width="16"><path d="M.5,3.85,6.65,10a.48.48,0,0,0,.7,0L13.5,3.85" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
</div>


<style>
    .xl-ui-select-button-icon[opened="true"] {
        transform: rotate(180deg);
        transition: .3s;
    }
    .xl-ui-select-button-icon[opened="false"] {
        transform: rotate(0deg);
        transition: .3s;
    }
    .xl-ui-select-dropdown-placeholder {
        font-size: 15px;
        position: absolute;
        top: 0px;
        background-color: var(--theme-accent-color-1000);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10 !important;
    }
    .xl-ui-select-dropdown[opened="false"] {
        padding: 0px 15px 15px;
        z-index: 9;
        visibility: hidden;
        opacity: 0;
    }
    .xl-ui-select-dropdown[opened="true"] {
        padding: 55px 15px 15px;
        opacity: 1;
    }

    .xl-ui-select-dropdown-content {
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
        height: 100%;
        max-height: 275px;
    }

    .xl-ui-select-dropdown {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        border-radius: 10px;
        background-color: var(--theme-accent-color-700);
        position: absolute;
        top: 0px;
        max-height: 275px;
    }
    .xl-ui-select-button:hover {
        background-color: var(--theme-accent-color-900);
    }
    .xl-ui-select-button {
        background-color: var(--theme-accent-color-1000);
        border-radius: 10px;
        aspect-ratio: 1 / 1;
        height: 100%;
        right: 0px;
        top: 0px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 11 !important;
    }
    .xl-ui-select {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style> -->