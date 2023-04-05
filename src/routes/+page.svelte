<script lang="ts">
    import { ImageDrop, Input } from "$lib/index";
    let value: string = ''
    let valid: string | boolean = ''
</script>

<ImageDrop accept={['svg']} multiple capture/>