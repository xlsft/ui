<script>
    export let src = "", alt = "", style = "",
    height = "", width = "",
    fill = false, lazy = false,
    crossorigin = "anonymous"
</script>

<img
    class={`xl-ui-image`} 
    src={src}
    alt={alt}
    style={`
        background-position: center center;
        pointer-events: none; 
        overflow:hidden; 
        height:${height}; 
        width: ${width}; 
        ${style}
    `}
    loading={lazy == true ? "" : "lazy"}
    {fill}
    decoding="async"
    {crossorigin}
/>

<style>
    img[fill="true"] {
        background-size: cover;
    }
    img[fill="false"] {
        background-size: contain;
    }
</style>