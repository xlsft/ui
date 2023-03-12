<script>
    import { Flex, Main } from "../lib/index"
</script>

<Main accent="sky">
    <Flex width="100%" height="100%" direction="column" y bar>
        <slot></slot>
    </Flex>
</Main>