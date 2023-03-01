<script>
    import Flex from "$lib/utils/Flex.svelte";
    import Main from "$lib/utils/Main.svelte";

</script>
<Main>
    <Flex style="width: 100%; height: 100%">
        <slot></slot>
    </Flex>
</Main>