<script lang="ts">
    import Icon from "$lib/media/Icon.svelte";
    import OutClick from "svelte-outclick";

    // events
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();

    // value
    /**
     * Value of input
     * @param {any} value
     * ```
     * <Input value={123} type="number"/>
     *
     * <!-- or -->
     *
     * <script>
     *     let value = 123
     * <script/>
     *
     * <Input bind:value={value} type="number"/>
     * ```
     * @return {string} value
     */
    export let value: any = "";
    /**
     * Set placeholder for input
     * @param {string} step
     * ```
     * <Input placeholder="URL"/>
     * ```
     * @return {string} param
     */
    export let placeholder: string;
    type InputTypes =
        | "email"
        | "month"
        | "number"
        | "password"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week"
        | "";
    /**
     * Set type for input
     * @param {InputTypes} step
     * ```
     * <Input type="number"/>
     * ```
     * @return {InputTypes} param
     */
    export let type: InputTypes = "text";
    /**
     * Set step for input[type="number"]
     * @param {number} step
     * ```
     * <Input step={10}/>
     * ```
     * @return {number} param
     */
    export let step: number | undefined = undefined;
    /**
     * Set min value for input[type="number"]
     * @param {number} min
     * ```
     * <Input min={15}/>
     * ```
     * @return {number} param
     */
    export let min: number | undefined = undefined;
    /**
     * Set max value for input[type="number"]
     * @param {number} max
     * ```
     * <Input max={15}/>
     * ```
     * @return {number} param
     */
    export let max: number | undefined = undefined;
    /**
     * Set minlength for input
     * @param {number} minlength
     * ```
     * <Input minlength={15}/>
     * ```
     * @return {number} param
     */
    export let minlength: number | undefined = undefined;
    /**
     * Set maxlength for input
     * @param {number} maxlength
     * ```
     * <Input maxlength={15}/>
     * ```
     * @return {number} param
     */
    export let maxlength: number | undefined = undefined;
    /**
     * Set regexp pattern
     * @param {RegExp} pattern
     * ```
     * <Input pattern={\d[0-9]}/>
     * ```
     * @return {RegExp} regexp
     */
    export let pattern: RegExp = /./gm;

    /**
     * Set prefix in the start of input
     * @param {string} prefix
     * ```
     * <Input prefix="@"/>
     * ```
     * @return {HTMLElement} element
     */
    export let prefix: string = "";
    /**
     * Set postfix in the end of input
     * @param {string} postfix
     * ```
     * <Input postfix="gmail.com"/>
     * ```
     * @return {HTMLElement} element
     */
    export let postfix: string = "";

    /**
     * Disabled feature switch
     * ```
     * <Input disabled/>
     * ```
     * @return {HTMLElement} param
     */
    export let disabled = false;

    /**
     * Readonly feature switch
     * ```
     * <Input readonly/>
     * ```
     * @return {HTMLElement} param
     */
    export let readonly = false;
    disabled == true ? (readonly = true) : (readonly = readonly);

    // apperance
    /**
     * Provide custom styles for component
     * @param {string} style
     * ```
     * <Input style="opacity: .5"/>
     * ```
     * @return {string} style
     */
    export let style: string = "";

    import { getColor } from "$lib/assets/scripts/colors";
    import type { Colors, Depths } from "$lib/assets/scripts/colors";
    /**
     * Set color for component
     * @param {Color} color
     * ```
     * <Input color="red"/>
     * ```
     * @return {Color} color
     */
    export let color: Colors = "accent";

    /**
     * Set depth for component color
     * @param {Depths} color_depth
     * ```
     * <Input color_depth={1000}/>
     * ```
     * @return {Depths} color depth
     */
    export let color_depth: Depths = 1000;

    /**
     * Set depth for component color on hover
     * @param {Depths} color_depth_hover
     * ```
     * <Input color_depth_hover={900}/>
     * ```
     * @return {Depths} color depth
     */
    export let color_depth_hover: Depths = 700;
    let ecolor = getColor(color_depth, color);
    let hcolor = getColor(color_depth_hover, color);
    let c: string = ecolor;

    let hover = () => {
        disabled == false && readonly == false ? (c = hcolor) : (c = c);
    };
    let leave = () => {
        disabled == false && readonly == false ? (c = ecolor) : (c = c);
    };

    /**
     * Set width of component
     * @param {string} width
     * ```
     * <Input width="400px"/>
     * ```
     * @return {string} style
     */
    export let width: string = "max-content";

    /**
     * Set height of component
     * @param {string} height
     * ```
     * <Input height="50px"/>
     * ```
     * @return {string} style
     */
    export let height: string = "max-content";

    type InputAlign = "left" | "right" | "center";
    /**
     * Set text align for input
     * @param {InputAlign} input_align
     * ```
     * <Input input_align="left"/>
     * ```
     * @return {InputAlign} style
     */
    export let input_align: InputAlign = "center";

    /**
     * Provide custom styles for input
     * @param {string} input_style
     * ```
     * <Input input_style="opacity: .5"/>
     * ```
     * @return {string} style
     */
    export let input_style: string = "";

    /**
     * Set green outline for valid input, red for valid input, and nothing for nothing
     * @param {boolean} valid
     * ```
     * <Input valid="false"/>
     *
     * <!-- or -->
     *
     * <Input valid/>
     * ```
     * @return {HTMLElement} style
     */
    export let valid: boolean | string;

    /**
     * Set color for outline
     * @param {Color} outline_color
     * ```
     * <Input outline_color="red"/>
     * ```
     * @return {Color} color
     */
    export let outline_color: Colors = "";
    let focus = () => {
        disabled == false && readonly == false && outline_color != ""
            ? (oc = ocolor)
            : (oc = oc);
    };
    let blur = () => {
        disabled == false && readonly == false && outline_color != ""
            ? (oc = "hsla(0,0,0,0)")
            : (oc = oc);
    };
    let ocolor = getColor(1000, outline_color);
    let oc: string;
    /**
     * Set color for text
     * @param {Color} text_color
     * ```
     * <Input text_color="red"/>
     * ```
     * @return {Color} color
     */
    export let text_color: Colors = "";

    /**
     * Set depth for text color
     * @param {Depths} text_color_depth
     * ```
     * <Input text_color_depth={900}/>
     * ```
     * @return {Depths} color depth
     */
    export let text_color_depth: Depths = 1000;
    let tcolor = getColor(text_color_depth, text_color);

    /**
     * Copy feature switch
     * ```
     * <Input hide/>
     * ```
     * @return {boolean} color
     */
    export let hide: boolean = false;

    type IconColors = "dark" | "light" | "auto" | "autoinv";
    /**
     * Set color for `copy` and `hide/show` icons
     * @param {IconColors} copy_title_time
     * ```
     * <Input icon_color="dark"/>
     * ```
     * @return {IconColors} color
     */
    export let icon_color: IconColors = "auto";

    /**
     * Compact input switch
     * ```
     * <Input compact/>
     * ```
     * @return {HTMLElement} compact
     */
    export let compact: boolean = false;

    // interaction
    let click = () => (disabled == false ? dispatch("click") : () => {});
    let input = () => (disabled == false ? dispatch("input") : () => {});
    type VisibilityIcon = "" | "edit_hidden" | "edit_view";
    let vicon: VisibilityIcon = "edit_view";
    let vtype: InputTypes;
    hide == true ? (vtype = type) : (vtype = "");
    let visibility = () => {
        if (disabled == true) return;
        vicon == "edit_view" ? (vicon = "edit_hidden") : (vicon = "edit_view");
        type == vtype ? (type = "password") : (type = vtype);
    };
    hide == true ? visibility() : () => {};
    /**
     * Copy feature switch
     * ```
     * <Input copy/>
     * ```
     * @return {HTMLElement} icon
     */
    export let copy: boolean = false;

    /**
     * Text for copy tooltip
     * @param {string} copy_tooltip
     * ```
     * <Input copy_tooltip="Copied!"/>
     * ```
     * @return {string} text
     */
    export let copy_tooltip: string = "Copied!";

    /**
     * Timeout for copy tooltip
     * @param {number} copy_tooltip_time
     * ```
     * <Input copy_tooltip_time={2000}/>
     * ```
     * @return {number} ms
     */
    export let copy_tooltip_time: number = 2000;
    let copytitleval: string = "";

    let inputel: HTMLElement;
    let time: any;
    let copyvalue = () => {
        if (time) clearTimeout(time);
        time = setTimeout(() => (copytitleval = ""), copy_tooltip_time);
        navigator.clipboard.writeText(value);
        copytitleval = copy_tooltip;
    };

    /**
     * Required feature switch
     * ```
     * <Input required/>
     * ```
     * @return {HTMLElement} param
     */

    export let required: boolean = false;

    let inputTest = () => {
        if (required == false) return;
        if (value && value.match(pattern)) valid = "";
        else valid = false;
    };

    export let tooltip: string = "";

    import { fade } from "svelte/transition";
</script>

<OutClick on:outclick={blur}>
    <div
        aria-disabled={disabled}
        class={`xl-ui-input`}
        data-compact={compact}
        data-state={valid}
        style="
            width: {width}; 
            height: {height}; 
            outline: 2px solid {oc};
            background: {c}; 
            {style}
        "
        bind:this={inputel}
        on:click={focus}
        on:keypress={focus}
        on:mouseenter={hover}
        on:mouseleave={leave}
    >
        {#if prefix}
            <span
                class={`xl-ui-input-prefix`}
                data-hide={hide}
                data-prefix={prefix != "" ? true : false}
                style="color: {tcolor}"
            >
                {prefix}
            </span>
        {/if}

        {#if copytitleval}
            <div
                transition:fade={{ duration: 250 }}
                class="xl-ui-input-tooltip"
                data-compact={compact}
                style="
                top: -25px;
                left: 0px;
                background-color: #ffffff00;
                color: {tcolor};
                transition: 0s;"
            >
                {copytitleval}
            </div>
        {/if}

        {#if tooltip}
            <div
                class="xl-ui-input-tooltip"
                data-compact={compact}
                style="
                    top: -25px;
                    right: 0px;
                    background-color: #ffffff00;
                    color: {tcolor};
                    transition: 0s;"
            >
                {tooltip}
            </div>
        {/if}
        <input
            bind:value
            style="text-align: {input_align}; color: {tcolor}; {input_style}"
            placeholder="{placeholder}{required == true ? '*' : ''}"
            disabled={readonly}
            data-valid={valid}
            data-hide={hide}
            data-prefix={prefix != "" ? true : false}
            data-postfix={postfix != "" ? true : false}
            data-readonly={readonly}
            {step}
            {min}
            {max}
            {minlength}
            {maxlength}
            pattern={`${pattern}`}
            {required}
            {...{ type }}
            on:input={() => {
                input();
                inputTest();
            }}
            on:click={click}
        />

        {#if postfix}
            <span
                class={`xl-ui-input-postfix`}
                data-hide={hide}
                style="color: {tcolor}"
                data-postfix={postfix != "" ? true : false}
            >
                {postfix}
            </span>
        {/if}
        {#if hide == true}
            <div
                class={`xl-ui-input-button`}
                on:click={visibility}
                on:keypress={visibility}
            >
                <Icon name={vicon} color={icon_color} size="17px" />
            </div>
        {/if}
        {#if copy == true}
            <div
                class={`xl-ui-input-button`}
                on:click={copyvalue}
                on:keypress={copyvalue}
            >
                <Icon name="edit_clone" color={icon_color} size="17px" />
            </div>
        {/if}
    </div>
</OutClick>

<style>
    .xl-ui-input[data-compact="true"] {
        --padding-rl: 10px;
        --padding-tb: 5px;
        gap: 2px;
    }

    .xl-ui-input {
        --padding-rl: 25px;
        --padding-tb: 9px;
        border-radius: 10px;
        cursor: text;
        padding: var(--padding-tb) var(--padding-rl);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    input {
        outline: none;
        border: none;
        text-align: center;
        box-sizing: border-box;
        font-family: Rubik;
        font-size: 15px;
        background-color: transparent;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
        flex-shrink: 1;
    }

    .xl-ui-input-prefix,
    .xl-ui-input-postfix {
        opacity: 0.5;
        line-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
    }

    .xl-ui-input-button:hover {
        opacity: 0.5;
    }

    .xl-ui-input-button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: min-content;
    }

    .xl-ui-input[data-state="true"] {
        outline: 2px solid var(--green-1000);
    }

    .xl-ui-input[data-state="false"] {
        outline: 2px solid var(--red-1000);
    }

    input:disabled {
        cursor: not-allowed;
    }
    input:disabled[data-readonly="true"] {
        cursor: text;
        user-select: text;
    }

    *[aria-disabled="true"]:hover,
    *[aria-disabled="true"] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .xl-ui-input-tooltip {
        font-size: 10px;
        opacity: 0.3;
        position: absolute;
        padding: 5px 0px;
        border-radius: 10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>
