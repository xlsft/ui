<script>
    import Flex from "$lib/structure/Flex.svelte";
    import Main from "$lib/structure/Main.svelte";
</script>

<Main accent="sky">
    <Flex width="100%" height="100%" y bar>
        <slot></slot>
    </Flex>
</Main>