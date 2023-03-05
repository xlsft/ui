<script>
    import { Flex, Switch, Button } from "../lib/index"
    import Text from "../lib/structure/Text.svelte";

    let values = {
        disabled: false,
        transparent: false,
        icon: false,
        compact: false,
        theme: false,
        result: false
    }
</script>

<Flex width="650px" height="100px" direction="row" justify="space-between" gap="0px">
    <Flex width="100px" height="100px" direction="column">
        <Switch bind:value={values.disabled}/>
        disabled
    </Flex>
    <Flex width="100px" height="100px" direction="column">
        <Switch bind:value={values.transparent}/>
        transparent
    </Flex>
    <Flex width="100px" height="100px" direction="column">
        <Switch bind:value={values.icon}/>
        icon
    </Flex>
    <Flex width="100px" height="100px" direction="column">
        <Switch bind:value={values.compact}/>
        compact
    </Flex>
    <Flex width="100px" height="100px" direction="column">
        <Switch bind:value={values.theme}/>
        theme
    </Flex>
    <Flex width="50px" height="100px" direction="column"/>
    <Flex width="100px" height="100px" direction="column">
        {#if values.icon == true}
            <Switch 
                disabled={values.disabled}
                transparent={values.transparent}
                compact={values.compact}
                theme={values.theme}
                icon="auth_faceid"
                color="red"
                bind:value={values.result}
            />
        {:else}
            <Switch 
                disabled={values.disabled}
                transparent={values.transparent}
                compact={values.compact}
                theme={values.theme}
                color="red"
                bind:value={values.result}
            />
        {/if}
        {values.result}
    </Flex>
</Flex>