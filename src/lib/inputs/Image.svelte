<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";

    /**
     * Accept extensions array
     * @param {Array<String>} copy_tooltip
     * ```
     * <ImageDrop accept={['svg']}/>
     * ```
     * @return {HTMLElement} param
     */
    export let accept: Array<String> = ["png", "jpg", "jpeg"];
    let acceptString: Array<String> = [];
    accept.forEach((ext) => acceptString.push(`.${ext}`));

    /**
     * Multiple file switch
     * ```
     * <ImageDrop multiple/>
     * ```
     * @return {HTMLElement} param
     */
    export let multiple: boolean = false;

    /**
     * Capture switch
     * ### !!! WORKS ONLY ON MOBILE !!!
     * ```
     * <ImageDrop capture/>
     * ```
     * @return {HTMLElement} param
     */
    export let capture: boolean = false;

    /**
     * Set width of component
     * @param {string} width
     * ```
     * <ImageDrop width="400px"/>
     * ```
     * @return {string} style
     */
    export let width: string = "300px";

    /**
     * Set height of component
     * @param {string} height
     * ```
     * <ImageDrop height="50px"/>
     * ```
     * @return {string} style
     */
    export let height: string = "100px";

    /**
     * Provide custom styles for component
     * @param {string} style
     * ```
     * <ImageDrop style="opacity: .5"/>
     * ```
     * @return {string} style
     */
    export let style: string = "";


</script>

<div class="xl-ui-input-image" style="width:{width};height:{height};{style}">
    <Icon name="edit_picture" size="30px"/>
    <div class="xl-ui-input-image-extensions">{acceptString.join(",")}</div>
    <input type="file" accept={acceptString.join(",")} {multiple} {capture} style="display: none"/>
</div>

<style>
    .xl-ui-input-image-extensions {
        font-size: 10px;
        opacity: 0.3;
        position: absolute;
        top: -25px;
        right: 0px;
    }

    .xl-ui-input-image {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        outline: 2px dashed black;
        flex-direction: column;
        position: relative;
    }
</style>
