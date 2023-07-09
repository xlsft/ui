<script>
    import { Flex, Main } from "../lib/index"
</script>

<Main accent="violet" theme="dark">
    <Flex width="100%" height="100%" direction="column" y bar gap="20px">
        <slot></slot>
    </Flex>
</Main>