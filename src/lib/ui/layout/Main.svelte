<script lang="ts">
    
    // ------------------ Imports ------------------

    import { theme as theme_store, accent as accent_store, getGlobals } from "$lib/core";
    import type { AccentColors, Theme } from "$lib/core";
    import { writable } from "svelte/store";
    import "$lib/core/fonts/font-faces.css";
    import { afterUpdate } from "svelte";
    
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

    // ------------------ Setup ------------------

    theme_store.set(theme);
    accent_store.set(accent);

    afterUpdate(() => {
        // if (theme == "system") {
        //     const system = window.matchMedia("(prefers-color-scheme: dark)");
        //     if (system.matches) theme_store.set("dark");
        //     else theme_store.set("light");
        //     window
        //         .matchMedia("(prefers-color-scheme: dark)")
        //         .addEventListener("change", (e) => {
        //             if (e.matches) theme_store.set("dark");
        //             else theme_store.set("light");
        //         });
        // };
    })


    
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
