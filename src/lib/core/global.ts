import { theme_store, accent_store } from "$lib/core";
import { getColor } from "$lib/colors";
/**
 * # ```getGlobals()```
 * 
 * Returns global css variables
 * 
 * ```ts
 * let root = getGlobals()
 * ```
 * 
 * ```@xl-soft/ui/core```
 */
export function getGlobals(): string {
    return `
    :root {
        --neutral-1000: ${getColor(1000, "neutral")};
        --neutral-900: ${getColor(900, "neutral")};
        --neutral-800: ${getColor(800, "neutral")};
        --neutral-700: ${getColor(700, "neutral")};
        --neutral-600: ${getColor(600, "neutral")};
        --neutral-500: ${getColor(500, "neutral")};
        --neutral-400: ${getColor(400, "neutral")};
        --neutral-300: ${getColor(300, "neutral")};
        --neutral-200: ${getColor(200, "neutral")};
        --neutral-100: ${getColor(100, "neutral")};
        --neutral-0: ${getColor(0, "neutral")};
        --cobalt-1000: ${getColor(1000, "cobalt")};
        --cobalt-900: ${getColor(900, "cobalt")};
        --cobalt-800: ${getColor(800, "cobalt")};
        --cobalt-700: ${getColor(700, "cobalt")};
        --cobalt-600: ${getColor(600, "cobalt")};
        --cobalt-500: ${getColor(500, "cobalt")};
        --cobalt-400: ${getColor(400, "cobalt")};
        --cobalt-300: ${getColor(300, "cobalt")};
        --cobalt-200: ${getColor(200, "cobalt")};
        --cobalt-100: ${getColor(100, "cobalt")};
        --cobalt-0: ${getColor(0, "cobalt")};
        --sky-1000: ${getColor(1000, "sky")};
        --sky-900: ${getColor(900, "sky")};
        --sky-800: ${getColor(800, "sky")};
        --sky-700: ${getColor(700, "sky")};
        --sky-600: ${getColor(600, "sky")};
        --sky-500: ${getColor(500, "sky")};
        --sky-400: ${getColor(400, "sky")};
        --sky-300: ${getColor(300, "sky")};
        --sky-200: ${getColor(200, "sky")};
        --sky-100: ${getColor(100, "sky")};
        --sky-0: ${getColor(0, "sky")};
        --red-1000: ${getColor(1000, "red")};
        --red-900: ${getColor(900, "red")};
        --red-800: ${getColor(800, "red")};
        --red-700: ${getColor(700, "red")};
        --red-600: ${getColor(600, "red")};
        --orange-1000: ${getColor(1000, "orange")};
        --orange-900: ${getColor(900, "orange")};
        --orange-800: ${getColor(800, "orange")};
        --orange-700: ${getColor(700, "orange")};
        --orange-600: ${getColor(600, "orange")};
        --lime-1000: ${getColor(1000, "lime")};
        --lime-900: ${getColor(900, "lime")};
        --lime-800: ${getColor(800, "lime")};
        --lime-700: ${getColor(700, "lime")};
        --lime-600: ${getColor(600, "lime")};
        --green-1000: ${getColor(1000, "green")};
        --green-900: ${getColor(900, "green")};
        --green-800: ${getColor(800, "green")};
        --green-700: ${getColor(700, "green")};
        --green-600: ${getColor(600, "green")};
        --cyan-1000: ${getColor(1000, "cyan")};
        --cyan-900: ${getColor(900, "cyan")};
        --cyan-800: ${getColor(800, "cyan")};
        --cyan-700: ${getColor(700, "cyan")};
        --cyan-600: ${getColor(600, "cyan")};
        --blue-1000: ${getColor(1000, "blue")};
        --blue-900: ${getColor(900, "blue")};
        --blue-800: ${getColor(800, "blue")};
        --blue-700: ${getColor(700, "blue")};
        --blue-600: ${getColor(600, "blue")};
        --royal-1000: ${getColor(1000, "royal")};
        --royal-900: ${getColor(900, "royal")};
        --royal-800: ${getColor(800, "royal")};
        --royal-700: ${getColor(700, "royal")};
        --royal-600: ${getColor(600, "royal")};
        --violet-1000: ${getColor(1000, "violet")};
        --violet-900: ${getColor(900, "violet")};
        --violet-800: ${getColor(800, "violet")};
        --violet-700: ${getColor(700, "violet")};
        --violet-600: ${getColor(600, "violet")};
        --purple-1000: ${getColor(1000, "purple")};
        --purple-900: ${getColor(900, "purple")};
        --purple-800: ${getColor(800, "purple")};
        --purple-700: ${getColor(700, "purple")};
        --purple-600: ${getColor(600, "purple")};
        --pink-1000: ${getColor(1000, "pink")};
        --pink-900: ${getColor(900, "pink")};
        --pink-800: ${getColor(800, "pink")};
        --pink-700: ${getColor(700, "pink")};
        --pink-600: ${getColor(600, "pink")};
        --theme-text-color: ${theme_store == "dark" ? getColor(0, "neutral") : getColor(1000, "neutral")};
        --theme-disabled: ${theme_store == "dark" ? getColor(900, "neutral") : getColor(500, "neutral")};
        --theme-bg-color-1000: ${theme_store == "dark" ? getColor(1000, "cobalt") : getColor(0, "neutral")};
        --theme-bg-color-900: ${theme_store == "dark" ? getColor(900, "cobalt") : getColor(100, "neutral")};
        --theme-bg-color-800: ${theme_store == "dark" ? getColor(800, "cobalt") : getColor(200, "neutral")};
        --theme-bg-color-700: ${theme_store == "dark" ? getColor(700, "cobalt") : getColor(300, "neutral")};
        --theme-bg-color-600: ${theme_store == "dark" ? getColor(600, "cobalt") : getColor(1000, "sky")};
        --theme-bg-color-500: ${theme_store == "dark" ? getColor(500, "cobalt") : getColor(900, "sky")};
        --theme-bg-color-400: ${theme_store == "dark" ? getColor(400, "cobalt") : getColor(800, "sky")};
        --theme-bg-color-300: ${theme_store == "dark" ? getColor(300, "cobalt") : getColor(700, "sky")};
        --theme-bg-color-200: ${theme_store == "dark" ? getColor(200, "cobalt") : getColor(600, "sky")};
        --theme-bg-color-100: ${theme_store == "dark" ? getColor(100, "cobalt") : getColor(500, "sky")};
        --theme-bg-color-0: ${theme_store == "dark" ? getColor(0, "cobalt") : getColor(0, "sky")};
        --theme-accent-color-1000: ${getColor(1000, accent_store)};
        --theme-accent-color-900: ${getColor(900, accent_store)};
        --theme-accent-color-800: ${getColor(800, accent_store)};
        --theme-accent-color-700: ${getColor(700, accent_store)};
        --theme-accent-color-600: ${getColor(600, accent_store)};   
    }

    ::selection {
        background: ${theme_store == "dark" ? getColor(600, "neutral") : getColor(300, "neutral")};
        border-radius: 5px;
    }

    .xl-ui {
        color: var(--theme-text-color);
        background-color: var(--theme-bg-color-1000);
        transition: 0.4s ease-in-out;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.7);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        user-select: none;
        flex-shrink: 0;
        transition: 0.4s cubic-bezier(0, 0, 0, 1) 0s;
        font-family: "Rubik";
    }

    body {
        margin: 0;
        transition: 0s;
        overflow: hidden;
    }

    input[type='number'] {
        appearance:textfield;
    }

    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
        -webkit-appearance: none;
    }

    a {
        color: var(--theme-text-color);
        position: relative;
        margin-right: 25px;
        text-decoration: none;
    }
    a:hover {
        color: var(--theme-text-color);
        opacity: .5;
    }
    a:visited {
        color: var(--theme-text-color);
    }
    a::after {
        display: block;
        content: "";
        width: 25px;
        height: 25px;
        background-image: url('https://xluiassets.deno.dev/icons/line/arrows/link?size=50&color=${theme_store == "dark" ? getColor(0, "neutral") : getColor(1000, "neutral")}');
        background-size: 25px;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        opacity: .5
    }
`
}