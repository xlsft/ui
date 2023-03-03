<script>
    export let type = 'div'
    export let style = "", width = "max-content", height = "max-content", align = "left"
    
</script>

<svelte:element this={type} class="xl-id-text" style={`height: ${height}; width: ${width}; text-align: ${align};${style || ''}`}>
    <slot/>
</svelte:element>

<style>
    h1 {
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
        min-height: 43px;
        max-width: 100vw;
    }

    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        min-height: 28px;
        opacity: .5;
        max-width: 100vw;
    }

    h3 {
        font-weight: 200;
        font-size: 20px;
        line-height: 24px;
        min-height: 24px;
        opacity: .5;
        max-width: 100vw;
    }

    div {
        font-weight: 400;
        font-size: 15px;
        max-width: 100vw;
    }
</style>