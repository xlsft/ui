<script>
    export let src, alt, style, size = "20px"
</script>

<div class={`xl-ui-icon`} style={`height:${size};${style || ''}`}>
    <img src={src} alt={alt} style="height: 100%; pointer-events: none;">
</div>