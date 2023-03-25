<script lang="ts">
    import { getIconBase64, type IconsName } from "$lib/assets/scripts/icons";
    import { theme } from "$lib/stores";
    export let name: IconsName = ''
    export let size = "20px"
    export let style = ""
    type IconsColor = "dark" | "light" | "auto" | "autoinv"
    export let color: IconsColor = "auto"
</script>

<img
    class={`xl-ui-icon`}
    src={getIconBase64(name)}
    alt={name}
    style={`
            height: ${size}; 
            pointer-events: none; 
            ${style}
        `}
    data-color={color}
    data-theme={$theme}
    decoding="async"
/>

<style>
    .xl-ui-icon[data-color="dark"] {
        filter: invert(100%);
    }
    .xl-ui-icon[data-color="light"] {
        filter: invert(0%);
    }
    .xl-ui-icon[data-color="auto"][data-theme="light"] {
        filter: invert(100%);
    }
    .xl-ui-icon[data-color="auto"][data-theme="dark"] {
        filter: invert(0%);
    }
    .xl-ui-icon[data-color="autoinv"][data-theme="light"] {
        filter: invert(0%);
    }
    .xl-ui-icon[data-color="autoinv"][data-theme="dark"] {
        filter: invert(100%);
    }
</style>
