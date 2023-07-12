<script>
    import { Flex, Main } from "$lib/ui"
</script>

<Main accent="violet" theme="dark">
    <Flex width="100%" height="100%" direction="column" y bar gap="50px">
        <slot></slot>
    </Flex>
</Main>