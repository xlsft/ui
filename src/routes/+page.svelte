<script>
    import Image from "$lib/utils/Image.svelte";
    import * as icon from "../assets/icons/icons"
    import Flex from "../lib/utils/Flex.svelte";
</script>

<Flex direction="row" style="width: 100%;" wrap="wrap" gap="100px">
    <Flex align="flex-start">
        <h1>Пробуем офигенный заголовок</h1>
        <h2>И офигенный подзаголовок</h2>
    </Flex>
    <Flex>
        <Image src="{icon.animated_loader_icon}" size="20px"/>
    </Flex>
</Flex>
