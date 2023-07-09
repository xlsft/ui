<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();


    // ------------------ Preference ------------------

    type MIME = 'gif' | 'jpeg' | 'pjpeg' | 'png' | 'svg+xml' | 'tiff' | 'vnd.microsoft.icon' | 'vnd.wap.wbmp' | 'webp';
    interface Src { url: string, media: string, mime: MIME };
    /**
     * Sources array
     * ``` 
     *  <Image
     *      src={[
     *          { url: './something-land.jpeg', media: '(orientation: landscape)', mime: 'jpeg' },
     *          { url: './something-port.jpeg', media: '(orientation: portrait)', mime: 'jpeg' },
     *      ]}
     *  />
     * ```
     */
    export let src: Array<Src> = [{ url: '', media: '', mime: 'png' }];

    /**
     * Alt tag for image
     * ```
     * <Icon alt="image"/>
     * ```
     */
    export let alt = "";

    /**
     * Title for image
     * ```
     * <Icon title="image"/>
     * ```
     */
    export let title = "";

    type Crossorigin = "" | "anonymous" | "use-credentials" | null | undefined;
    /**
     * Cross-Origin Resource Sharing setting
     * ```
     * <Icon cors="anonymous"/>
     * ```
     */
    export let cors: Crossorigin = "anonymous";

    // ------------------ Apperance ------------------

    /**
     * Additional styles
     * ```
     * <Icon style="pointer-events: none;"/>
     * ```
     */
    export let style = "";

    /**
     * Set height for image
     * ```
     * <Icon height="100px"/>
     * ```
     */
    export let height = "";

    /**
     * Set width for image
     * ```
     * <Icon width="100px"/>
     * ```
     */
    export let width = "";

    /**
     * "object-fit: cover;" switch
     * ```
     * <Icon fit/>
     * ```
     */
    export let fit = false;

</script>

<!-- 
    @component 
    # ```Image``` 

    Element, that provides image with multiple sources and media tags

    Here is example usage with example params:

    ```
    <Image 
        src={[
            { url: './something-land.jpeg', media: '(orientation: landscape)', mime: 'jpeg' },
            { url: './something-port.jpeg', media: '(orientation: portrait)', mime: 'jpeg' },
        ]}
        alt="image"
        title="image"
        cors="anonymous"
        style="pointer-events: none;"
        height="100px"
        width="100px"
        fit
    />
    ```

    ```@xl-soft/ui```
-->

<picture
    class={`xl-ui-image-wrapper`}
    role="presentation"
    aria-atomic="true"
    aria-relevant="all"
    on:click={() => dispatch('click')}
    on:keydown={() => dispatch('click')}
    title={title}
>   
    {#each src as item}
        <source srcset={item.url} media={item.media} type="image/{item.mime}"/>
    {/each}         
    

    <img
        width={width}
        height={height}
        class={`xl-ui-image`}
        src={String(src[0].url)}
        alt={alt}
        data-fit={fit}
        decoding="async"
        crossorigin={cors}
        style={`
            background-position: center center;
            overflow:hidden;
            object-fit: cover;
            ${style}
        `}
    />
</picture>



<style>
    img[data-fit="true"] {
        object-fit: cover;
    }
    img[data-fit="false"] {
        object-fit: contain;
    }
</style>