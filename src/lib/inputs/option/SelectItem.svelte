<!-- <script>
    export let value
    import { getContext } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const { open } = getContext('open');
    const { select } = getContext('select');
</script>

<div class="select-dropdown-option" on:click={() => {open(); select(value); dispatch('input')}} on:keypress={() => {open(); select(value); dispatch('input')}}>
    {value}
</div>

<style>
    .select-dropdown-option:hover {
        background-color: var(--dark-blue-10);
    }
    .select-dropdown-option {
        width: 100%;
        min-height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--dark-blue-5);
    }
</style> -->