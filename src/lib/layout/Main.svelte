<script lang="ts">
    import { theme as theme_store, vh, accent as accent_store } from "../stores";
    import "../assets/fonts/font-faces.css";
    import { getRoot, type AccentColors } from "$lib/assets/scripts/colors";
    

    // ------------------ Apperance ------------------

    type Theme = "system" | "light" | "dark";

    /**
     * Set theme for XL UI
     * ```
     *  <Main theme="system">
     *      ...
     *  <Main/>
     * ```
     */
    export let theme: Theme = "system";

    /**
     * Set accent color for XL UI
     * ```
     *  <Main accent="blue">
     *      ...
     *  <Main/>
     * ```
     */
    export let accent: AccentColors = "blue";

    // ------------------ Setup ------------------

    theme_store.set(theme);
    accent_store.set(accent);
    vh.set(window.innerHeight * 0.01);
    window.addEventListener("resize", () => vh.set(window.innerHeight * 0.01), true );
    if (theme == "system") {
        const system = window.matchMedia("(prefers-color-scheme: dark)");
        if (system.matches) theme_store.set("dark");
        else theme_store.set("light");
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                if (e.matches) theme_store.set("dark");
                else theme_store.set("light");
            });
    };
</script>

<!-- 
    @component 
    # ```Main```
    
    Wrapper for XL UI, provides custom fonts, styles, colors, themes and many more

    Here is example usage with example params:

    ```
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
        height: ${Number($vh) * 100}px;
        min-height: ${Number($vh) * 100}px; 
        width: 100vw;
        transition: background-color 0.4s cubic-bezier(0,0,0,1) 0s;;
    `}
    >
        <slot/>
    </div>
</main>

<svelte:element this="style">{$theme_store == 'dark' ? getRoot() : getRoot()}</svelte:element>

<style lang="scss">
    :global(.xl-ui) {
        color: var(--theme-text-color);
        background-color: var(--theme-bg-color-1000);
        transition: 0.4s ease-in-out;
    }

    :global(::-webkit-scrollbar) {
        width: 5px;
        height: 5px;
    }

    :global(::-webkit-scrollbar-track) {
        border-radius: 10px;
    }

    :global(::-webkit-scrollbar-thumb) {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
        background: rgba(255, 255, 255, 0.7);
    }

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

    :global(input[type='number']) {
        appearance:textfield;
    }
    :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
        -webkit-appearance: none;
    }
</style>

