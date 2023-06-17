<script lang="ts">
    import { ImageDrop, Input } from "$lib/index";
    let value: string = "";
    let valid: string | boolean = "";
</script>

<Input type="text" copy bind:value bind:valid />

<ImageDrop accept={["svg"]} multiple capture />
