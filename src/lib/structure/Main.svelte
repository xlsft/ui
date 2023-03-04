<script>
    // @ts-nocheck
    import "../../assets/fonts/font-faces.css"
    export let theme = 'system'
    import { theme as color, vh, accent } from "../stores";
    import { setContext } from 'svelte';
    color.set(theme)
    accent.set('sky')
    vh.set(window.innerHeight * 0.01)
    window.addEventListener('resize', function(event) {
        vh.set(window.innerHeight * 0.01)
    }, true);

    if (theme == "system") {
        const system = window.matchMedia("(prefers-color-scheme: dark)");
        if (system.matches) color.set('dark'); else color.set('light')
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (e.matches) color.set('dark'); else color.set('light')
        })
    }
</script>

<main class={`xl-ui`} theme={$color} accent={$accent} style="transition: background-color 0.7s ease-in-out;">
    <div class={`xl-ui-wrapper`} style={`
    height: ${$vh * 100}px;
    min-height: ${$vh * 100}px; 
    width: 100vw;
    transition: background-color 0.7s ease-in-out;
    `}>
        <slot></slot>
    </div>
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
    
    :global(::-webkit-scrollbar) {
        width: 5px;
        height: 5px;
    }
    
    :global(::-webkit-scrollbar-track) {
        border-radius: 10px;
    }
    
    :global(::-webkit-scrollbar-thumb) {
        background:rgba(255, 255, 255, 0.5); 
        border-radius: 10px;
    }
    
    :global(::-webkit-scrollbar-thumb:hover) {
        background:rgba(255, 255, 255, 0.7); 
    }

    :global(::selection) {
        background: var(--neutral-700);
    }

    :global(*) {
        box-sizing: border-box;
        margin: 0;
        user-select: none;
        flex-shrink: 0;
        transition: .4s ease-in-out;
        font-family: "Rubik";
    }

    /* ----------------light theme---------------- */

    :global(.xl-ui[theme="dark"]) {
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
        transition: .4s ease-in-out;
    }

    /* -------------------------------------------*/



    /* ----------------light theme---------------- */

    :global(.xl-ui[theme="light"]) {
        --theme-text-color: var(--neutral-1000);
        --theme-bg-color-1000: var(--neutral-0);
        --theme-bg-color-900: var(--sky-900);
        --theme-bg-color-800: var(--sky-800);
        --theme-bg-color-700: var(--sky-700);
        --theme-bg-color-600: var(--sky-600);
        --theme-bg-color-500: var(--sky-500);
        --theme-bg-color-400: var(--sky-400);
        --theme-bg-color-300: var(--sky-300);
        --theme-bg-color-200: var(--sky-200);
        --theme-bg-color-100: var(--sky-100);
        --theme-bg-color-0: var(--sky-0);
        color: var(--theme-text-color);
        background-color: var(--theme-bg-color-1000);
        transition: .4s ease-in-out;
    }

    /* -------------------------------------------*/
    

    
    /* ----------------red theme---------------- */
    
    :global(.xl-ui[accent="red"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--red-1000);
        --theme-accent-color-900: var(--red-900);
        --theme-accent-color-800: var(--red-800);
        --theme-accent-color-700: var(--red-700);
        --theme-accent-color-600: var(--red-600);
    }
    :global(.xl-ui[accent="red"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--red-1000);
        --theme-accent-color-900: var(--red-900);
        --theme-accent-color-800: var(--red-800);
        --theme-accent-color-700: var(--red-700);
        --theme-accent-color-600: var(--red-600);
    }

    /* -------------------------------------------*/


    
    /* ----------------orange theme---------------- */
    
    :global(.xl-ui[accent="orange"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--orange-1000);
        --theme-accent-color-900: var(--orange-900);
        --theme-accent-color-800: var(--orange-800);
        --theme-accent-color-700: var(--orange-700);
        --theme-accent-color-600: var(--orange-600);
    }
    :global(.xl-ui[accent="orange"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--orange-600);
        --theme-accent-color-900: var(--orange-700);
        --theme-accent-color-800: var(--orange-800);
        --theme-accent-color-700: var(--orange-900);
        --theme-accent-color-600: var(--orange-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------lime theme---------------- */
    
    :global(.xl-ui[accent="lime"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--lime-1000);
        --theme-accent-color-900: var(--lime-900);
        --theme-accent-color-800: var(--lime-800);
        --theme-accent-color-700: var(--lime-700);
        --theme-accent-color-600: var(--lime-600);
    }
    :global(.xl-ui[accent="lime"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--lime-600);
        --theme-accent-color-900: var(--lime-700);
        --theme-accent-color-800: var(--lime-800);
        --theme-accent-color-700: var(--lime-900);
        --theme-accent-color-600: var(--lime-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------green theme---------------- */
    
    :global(.xl-ui[accent="green"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-1000);
        --theme-accent-color-1000: var(--green-1000);
        --theme-accent-color-900: var(--green-900);
        --theme-accent-color-800: var(--green-800);
        --theme-accent-color-700: var(--green-700);
        --theme-accent-color-600: var(--green-600);
    }
    :global(.xl-ui[accent="green"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-1000);
        --theme-accent-color-1000: var(--green-600);
        --theme-accent-color-900: var(--green-700);
        --theme-accent-color-800: var(--green-800);
        --theme-accent-color-700: var(--green-900);
        --theme-accent-color-600: var(--green-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------cyan theme---------------- */
    
    :global(.xl-ui[accent="cyan"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-1000);
        --theme-accent-color-1000: var(--cyan-1000);
        --theme-accent-color-900: var(--cyan-900);
        --theme-accent-color-800: var(--cyan-800);
        --theme-accent-color-700: var(--cyan-700);
        --theme-accent-color-600: var(--cyan-600);
    }
    :global(.xl-ui[accent="cyan"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-1000);
        --theme-accent-color-1000: var(--cyan-600);
        --theme-accent-color-900: var(--cyan-700);
        --theme-accent-color-800: var(--cyan-800);
        --theme-accent-color-700: var(--cyan-900);
        --theme-accent-color-600: var(--cyan-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------blue theme---------------- */
    
    :global(.xl-ui[accent="blue"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--blue-1000);
        --theme-accent-color-900: var(--blue-900);
        --theme-accent-color-800: var(--blue-800);
        --theme-accent-color-700: var(--blue-700);
        --theme-accent-color-600: var(--blue-600);
    }
    :global(.xl-ui[accent="blue"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--blue-600);
        --theme-accent-color-900: var(--blue-700);
        --theme-accent-color-800: var(--blue-800);
        --theme-accent-color-700: var(--blue-900);
        --theme-accent-color-600: var(--blue-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------royal theme---------------- */
    
    :global(.xl-ui[accent="royal"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--royal-1000);
        --theme-accent-color-900: var(--royal-900);
        --theme-accent-color-800: var(--royal-800);
        --theme-accent-color-700: var(--royal-700);
        --theme-accent-color-600: var(--royal-600);
    }
    :global(.xl-ui[accent="royal"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--royal-600);
        --theme-accent-color-900: var(--royal-700);
        --theme-accent-color-800: var(--royal-800);
        --theme-accent-color-700: var(--royal-900);
        --theme-accent-color-600: var(--royal-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------violet theme---------------- */
    
    :global(.xl-ui[accent="violet"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--violet-1000);
        --theme-accent-color-900: var(--violet-900);
        --theme-accent-color-800: var(--violet-800);
        --theme-accent-color-700: var(--violet-700);
        --theme-accent-color-600: var(--violet-600);
    }
    :global(.xl-ui[accent="violet"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--violet-600);
        --theme-accent-color-900: var(--violet-700);
        --theme-accent-color-800: var(--violet-800);
        --theme-accent-color-700: var(--violet-900);
        --theme-accent-color-600: var(--violet-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------purple theme---------------- */
    
    :global(.xl-ui[accent="purple"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--purple-1000);
        --theme-accent-color-900: var(--purple-900);
        --theme-accent-color-800: var(--purple-800);
        --theme-accent-color-700: var(--purple-700);
        --theme-accent-color-600: var(--purple-600);
    }
    :global(.xl-ui[accent="purple"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--purple-600);
        --theme-accent-color-900: var(--purple-700);
        --theme-accent-color-800: var(--purple-800);
        --theme-accent-color-700: var(--purple-900);
        --theme-accent-color-600: var(--purple-1000);
    }

    /* -------------------------------------------*/


    
    /* ----------------pink theme---------------- */
    
    :global(.xl-ui[accent="pink"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--pink-1000);
        --theme-accent-color-900: var(--pink-900);
        --theme-accent-color-800: var(--pink-800);
        --theme-accent-color-700: var(--pink-700);
        --theme-accent-color-600: var(--pink-600);
    }
    :global(.xl-ui[accent="pink"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--pink-600);
        --theme-accent-color-900: var(--pink-700);
        --theme-accent-color-800: var(--pink-800);
        --theme-accent-color-700: var(--pink-900);
        --theme-accent-color-600: var(--pink-1000);
    }

    /* -------------------------------------------*/


        
    /* ----------------sky theme---------------- */
    
    :global(.xl-ui[accent="sky"][theme="dark"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--sky-600);
        --theme-accent-color-900: var(--sky-700);
        --theme-accent-color-800: var(--sky-800);
        --theme-accent-color-700: var(--sky-900);
        --theme-accent-color-600: var(--sky-1000);
    }
    :global(.xl-ui[accent="sky"][theme="light"]) {
        --theme-accent-text-color: var(--neutral-0);
        --theme-accent-color-1000: var(--sky-600);
        --theme-accent-color-900: var(--sky-700);
        --theme-accent-color-800: var(--sky-800);
        --theme-accent-color-700: var(--sky-900);
        --theme-accent-color-600: var(--sky-1000);
    }

    /* -------------------------------------------*/


    :global(body) {
        margin: 0;
        transition: 0s;
        overflow: hidden;
    }
</style>