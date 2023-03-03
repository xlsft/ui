<script>
    export let src = "", style = "",
    height = "", width = "",
    fill = false, repeat = false
</script>

<div 
    class={`xl-ui-image`} 
    style={`
        background-image: url('${src}');
        background-position: center center;
        pointer-events: none; 
        overflow:hidden; 
        height:${height}; 
        width: ${width}; 
        ${style || ''}
    `}
    fill={fill || false}
    repeat={repeat || false}
/>

<style>
    div[fill="true"] {
        background-size: cover;
    }
    div[fill="false"] {
        background-size: contain;
    }
    div[repeat="true"] {
        background-repeat: repeat;
    }
    div[repeat="false"] {
        background-repeat: no-repeat;
    }
</style>