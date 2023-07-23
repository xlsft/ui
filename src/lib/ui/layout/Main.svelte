<script lang="ts">
    
    // ------------------ Imports ------------------

    import { theme as theme_store, accent as accent_store, getGlobals, roundness as roundness_store } from "$lib/core";
    import type { AccentColors, Theme } from "$lib/core";
    
    // ------------------ Apperance ------------------

    /**
     * Set theme for XL UI
     * ``` tsx
     *  <Main theme="system">
     *      ...
     *  <Main/>
     * ```
     * ```@xl-soft/ui```
     */
    export let theme: Theme = "system";

    /**
     * Set accent color for XL UI
     * ``` tsx
     *  <Main accent="blue">
     *      ...
     *  <Main/>
     * ```
     * ```@xl-soft/ui```
     */
    export let accent: AccentColors = "blue";

    /**
     * Set roundness in px for XL UI
     * ``` tsx
     *  <Main roundness="12px">
     *      ...
     *  <Main/>
     * ```
     * ```@xl-soft/ui```
     */
    export let roundness: string = "8px";

    // ------------------ Setup ------------------

    theme_store.set(theme);
    accent_store.set(accent);
    roundness_store.set(roundness)
    
</script>

<!-- 
    @component 
    # ```Main```
    
    Wrapper for XL UI, provides custom fonts, styles, colors, themes and many more

    Here is example usage with example params:

    ``` tsx
    <Main accent="green" theme="light">
        ...
    </Main>
    ```

    ```@xl-soft/ui```
-->

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</svelte:head>

<main
    class={`xl-ui`}
    data-theme={$theme_store}
    data-accent={$accent_store}
    style="transition: background-color 0.4s cubic-bezier(0,0,0,1) 0s;"
>
    <div
        class={`xl-ui-wrapper`}
        style={`
        height: 100dvh;
        min-height: 100dvh; 
        width: 100dvw;
        transition: background-color 0.4s cubic-bezier(0,0,0,1) 0s;;
    `}
    >
        <slot/>
    </div>
</main>

<svelte:element this="style">{$theme_store == 'dark' ? getGlobals() : getGlobals()}</svelte:element>


<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        user-select: none;
        flex-shrink: 0;
        transition: 0.4s cubic-bezier(0, 0, 0, 1) 0s;
        font-family: "Rubik";
    }

    :global(body) {
        margin: 0;
        transition: 0s;
        overflow: hidden;
    }

    :global(.xl-ui) {
        color: var(--theme-text-color);
        background-color: var(--theme-bg-color-1000);
        transition: 0.4s ease-in-out;
    }
</style>