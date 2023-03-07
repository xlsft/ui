<script>
    import { Flex, Switch, Button } from "../lib/index"
    import Icon from "../lib/media/Icon.svelte";
    import Text from "../lib/structure/Text.svelte";

    let valuesswitch = {
        disabled: false,
        transparent: false,
        icon: false,
        compact: false,
        theme: false,
        result: false
    }
    let valuesbutton = {
        disabled: false,
        transparent: false,
        icon: false,
        compact: false,
    }

</script>

<Text type="h1">Button</Text>

<Flex height="100px" direction="row" justify="space-between">
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesbutton.disabled}/>
        disabled
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesbutton.transparent}/>
        transparent
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesbutton.compact}/>
        compact
    </Flex>
    <Flex width="50px" height="100px" direction="column"/>
    <Flex height="100px" direction="column">
        <Button 
            disabled={valuesbutton.disabled}
            transparent={valuesbutton.transparent}
            compact={valuesbutton.compact}
            icon="navigation_settings"
            color="red"
        >
            Settings
        </Button>
        result
    </Flex>
</Flex>

<Text type="h1">Switch</Text>

<Flex height="100px" direction="row" justify="space-between">
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesswitch.disabled}/>
        disabled
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesswitch.transparent}/>
        transparent
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesswitch.icon}/>
        icon
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesswitch.compact}/>
        compact
    </Flex>
    <Flex height="100px" direction="column">
        <Switch bind:value={valuesswitch.theme}/>
        theme
    </Flex>
    <Flex width="50px" height="100px" direction="column"/>
    <Flex height="100px" direction="column">
        {#if valuesswitch.icon == true}
            <Switch 
                disabled={valuesswitch.disabled}
                transparent={valuesswitch.transparent}
                compact={valuesswitch.compact}
                theme={valuesswitch.theme}
                icon="auth_faceid"
                color="red"
                bind:value={valuesswitch.result}
            />
        {:else}
            <Switch 
                disabled={valuesswitch.disabled}
                transparent={valuesswitch.transparent}
                compact={valuesswitch.compact}
                theme={valuesswitch.theme}
                color="red"
                bind:value={valuesswitch.result}
            />
        {/if}
        {valuesswitch.result}
    </Flex>
</Flex>