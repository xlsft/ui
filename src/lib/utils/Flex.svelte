<script lang="ts">
    export let width = "100%", heigth = "100%", direction = "column", justify = "center", align = "center", wrap = "nowrap", aligncont="center", gap = "10px"
    let flex = `
    width: ${width}; 
    height: ${heigth}; 
    display: flex; 
    flex-direction: ${direction}
    flex-wrap: ${wrap};
    justify-content: ${justify};
	align-items: ${align};
    align-content: ${aligncont};
    gap: ${gap}
    `
</script>

<div class="xl-ui-flex" style="{flex}">
    <slot></slot>
</div>

