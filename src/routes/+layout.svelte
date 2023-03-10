<script>
    import Flex from "$lib/structure/Flex.svelte";
    import Main from "$lib/structure/Main.svelte";
</script>

<Main>
    <Flex width="100%" height="100%" direction="column" y bar>
        <slot></slot>
    </Flex>
</Main>