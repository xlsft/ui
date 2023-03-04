<script>
    export let disabled = false, style = "", compact = false, transparent = false, color = "blue", width = "max-content", height = "max-content"

    import Button from "./Button.svelte";
    import Icon from "../../media/Icon.svelte";
    import { theme } from "../../stores";
    function change() {
        if ($theme == "dark") { theme.set('light'); return }
        if ($theme == "light") { theme.set('dark'); return }
    }
</script>
<Button on:click={change} {disabled} compact={compact} width={width} height={height} style={style} transparent={transparent} color={color}>
    {#if transparent == false}
        {#if $theme == "light"}
            <Icon icon="navigation_dark" noinvert/>
        {:else}
            <Icon icon="navigation_light" noinvert/>
        {/if}
    {:else}
        {#if $theme == "light"}
            <Icon icon="navigation_dark"/>
        {:else}
            <Icon icon="navigation_light"/>
        {/if}
    {/if}
    <slot/>
</Button>