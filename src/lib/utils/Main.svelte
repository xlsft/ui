<script>
    // @ts-nocheck
    import "../../assets/fonts/font-faces.css"
    export let theme = 'dark'
    import { theme as color } from "./stores";
    color.set(theme)
    let vh = window.innerHeight * 0.01
    window.addEventListener('resize', function(event) {
        vh = window.innerHeight * 0.01
    }, true);
</script>

<main class={`xl-ui-wrapper`} style={`height: ${vh * 100}px; min-height: ${vh * 100}px; width: 100vw;`} theme={theme}>
    <slot></slot>
</main>

<style>

    :global(:root) {
        --neutral-1000: #000000;
        --neutral-900: #1a1a1a;
        --neutral-800: #333333;
        --neutral-700: #4d4d4d;
        --neutral-600: #666666;
        --neutral-500: #808080;
        --neutral-400: #999999;
        --neutral-300: #b3b3b3;
        --neutral-200: #cccccc;
        --neutral-100: #e6e6e6;
        --neutral-0: #ffffff;
        --cobalt-1000: #07090d;
        --cobalt-900: #0b0e14;
        --cobalt-800: #0e121b;
        --cobalt-700: #121721;
        --cobalt-600: #151c28;
        --cobalt-500: #19202e;
        --cobalt-400: #1d2535;
        --cobalt-300: #20293c;
        --cobalt-200: #242e42;
        --cobalt-100: #273249;
        --cobalt-0: #2b3750;
        --sky-1000: #8ea0c2;
        --sky-900: #8194bb;
        --sky-800: #7489b4;
        --sky-700: #677ead;
        --sky-600: #5973a6;
        --sky-500: #526a98;
        --sky-400: #4b608b;
        --sky-300: #44577e;
        --sky-200: #3d4e71;
        --sky-100: #354464;
        --sky-0: #2e3b56;
        --red-1000: #d92626;
        --red-900: #dd3c3c;
        --red-800: #e15151;
        --red-700: #e46767;
        --red-600: #e87d7d;
        --orange-1000: #d98026;
        --orange-900: #dd8c3c;
        --orange-800: #e19951;
        --orange-700: #e4a667;
        --orange-600: #e8b27d;
        --lime-1000: #7fd926;
        --lime-900: #8cdd3c;
        --lime-800: #99e151;
        --lime-700: #a6e467;
        --lime-600: #b2e87d;
        --green-1000: #26d962;
        --green-900: #3cdd71;
        --green-800: #51e181;
        --green-700: #67e491;
        --green-600: #7de8a1;
        --cyan-1000: #26d99d;
        --cyan-900: #3cdda7;
        --cyan-800: #51e1b1;
        --cyan-700: #67e4bb;
        --cyan-600: #7de8c4;
        --blue-1000: #2662d9;
        --blue-900: #3c71dd;
        --blue-800: #5181e1;
        --blue-700: #6791e4;
        --blue-600: #7da1e8;
        --royal-1000: #2626d9;
        --royal-900: #3c3cdd;
        --royal-800: #5151e1;
        --royal-700: #6767e4;
        --royal-600: #7d7de8;
        --violet-1000: #6226d9;
        --violet-900: #713cdd;
        --violet-800: #8151e1;
        --violet-700: #9167e4;
        --violet-600: #a17de8;
        --purple-1000: #9d26d9;
        --purple-900: #a73cdd;
        --purple-800: #b151e1;
        --purple-700: #bb67e4;
        --purple-600: #c47de8;
        --pink-1000: #d926d9;
        --pink-900: #dd3cdd;
        --pink-800: #e151e1;
        --pink-700: #e467e4;
        --pink-600: #e87de8;
    }

    :global(body) {
        margin: 0;
        font-family: "Rubik";
        overflow: hidden;
    }

    :global(main) {
        padding: 50px;
    }

    :global(h1) {
        font-weight: 400;
        font-size: 36px;
        line-height: 43px;
    }

    :global(h2) {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        opacity: .5;
    }
    

    :global(*) {
        box-sizing: border-box;
        margin: 0;
        user-select: none;
    }

    :global(.xl-ui-wrapper[theme="dark"]) {
        --theme-text-color: var(--neutral-0);
        --theme-bg-color-1000: var(--cobalt-1000);
        --theme-bg-color-900: var(--cobalt-900);
        --theme-bg-color-800: var(--cobalt-800);
        --theme-bg-color-700: var(--cobalt-700);
        --theme-bg-color-600: var(--cobalt-600);
        --theme-bg-color-500: var(--cobalt-500);
        --theme-bg-color-400: var(--cobalt-400);
        --theme-bg-color-300: var(--cobalt-300);
        --theme-bg-color-200: var(--cobalt-200);
        --theme-bg-color-100: var(--cobalt-100);
        --theme-bg-color-0: var(--cobalt-0);

        color: var(--theme-text-color);
        background-color: var(--theme-bg-color-1000);
    }
</style>