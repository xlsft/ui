<script>
    export let direction = "column", justify = "center", align = "center", wrap = "nowrap", aligncont="center", gap = "25px"
    let flex = `
    display: flex; 
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
	align-items: ${align};
    align-content: ${aligncont};
    gap: ${gap};
    `

    export let style
</script>

<div class={`xl-ui-flex`} style={`${flex}${style || ''}`}>
    <slot></slot>
</div>