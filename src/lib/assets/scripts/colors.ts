import { accent, theme } from "$lib/stores"

let list = {
    neutral: {
        c1000: [0,0,0],
        c900: [26,26,26],
        c800: [51,51,51],
        c700: [77,77,77],
        c600: [102,102,102],
        c500: [128,128,128],
        c400: [153,153,153],
        c300: [179,179,179],
        c200: [204,204,204],
        c100: [230,230,230],
        c0: [255,255,255],
        text: [0,0,0],
    },
    cobalt: {
        c1000: [7,9,13],
        c900: [11,14,20],
        c800: [14,18,27],
        c700: [18,23,33],
        c600: [21,28,40],
        c500: [25,32,46],
        c400: [29,37,53],
        c300: [32,41,60],
        c200: [36,46,66],
        c100: [39,50,73],
        c0: [43,55,80],
        text: [255,255,255],
    },
    sky: {
        c1000: [142,160,194],
        c900: [129,148,187],
        c800: [116,137,180],
        c700: [103,126,173],
        c600: [89,115,166],
        c500: [82,106,152],
        c400: [75,96,139],
        c300: [68,87,126],
        c200: [61,78,113],
        c100: [53,68,100],
        c0: [46,59,86],
        text: [0,0,0],
    },
    red: {
        c1000: [217,38,38],
        c900: [221,60,60],
        c800: [225,81,81],
        c700: [228,103,103],
        c600: [232,125,125],
        text: [255,255,255],
    },
    orange: {
        c1000: [217,128,38],
        c900: [221,140,60],
        c800: [225,153,82],
        c700: [228,166,103],
        c600: [232,178,125],
        text: [255,255,255],
    },
    lime: {
        c1000: [127,217,38],
        c900: [140,221,60],
        c800: [153,225,81],
        c700: [166,228,103],
        c600: [178,232,125],
        text: [0,0,0],
    },
    green: {
        c1000: [38,217,98],
        c900: [60,221,113],
        c800: [81,225,129],
        c700: [103,228,145],
        c600: [125,232,161],
        text: [0,0,0],
    },
    cyan: {
        c1000: [38,217,157],
        c900: [60,221,167],
        c800: [81,225,177],
        c700: [103,228,187],
        c600: [125,232,196],
        text: [0,0,0],
    },
    blue: {
        c1000: [38,98,217],
        c900: [60,113,221],
        c800: [81,129,225],
        c700: [103,145,228],
        c600: [125,161,232],
        text: [255,255,255],
    },
    royal: {
        c1000: [38,38,217],
        c900: [60,60,221],
        c800: [81,81,225],
        c700: [103,103,228],
        c600: [125,125,232],
        text: [255,255,255],
    },
    violet: {
        c1000: [98,38,217],
        c900: [113,60,221],
        c800: [129,81,225],
        c700: [145,103,228],
        c600: [161,125,232],
        text: [255,255,255],
    },
    purple: {
        c1000: [157,38,217],
        c900: [167,60,221],
        c800: [177,81,225],
        c700: [187,103,228],
        c600: [196,125,232],
        text: [255,255,255],
    },
    pink: {
        c1000: [217,38,217],
        c900: [221,60,221],
        c800: [225,81,225],
        c700: [228,103,228],
        c600: [232,125,232],
        text: [255,255,255],
    },
}

/**
 * # type ```Colors```
 * 
 * Type for all colors of UI system
 * 
 * ```ts
 * export let color: Colors = 'red'
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export type Colors = "theme" | "accent" | "neutral" | "cobalt" | "sky" | "red" | "orange" | "lime" | "green" | "cyan" | "blue" | "royal" | "violet" | "purple" | "pink" | ""

/**
 * # type ```Depths``` 
 * 
 * Type for all color depths of UI system
 * 
 * ```ts
 * export let depth: Depths = 1000
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export type Depths = 1000 | 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100 | 0

/**
 * # type ```Theme``` 
 * 
 * Type for theme store
 * 
 * ```ts
 * let theme_string: Theme = 'system'
 * theme.set(theme_string)
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export type Theme = "system" | "light" | "dark"

/**
 * # type ```AccentColors``` 
 * 
 * Type for all colors that can be used as accent color
 * 
 * ```ts
 * let accent_string: AccentColors = 'red'
 * accent.set(accent_string)
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export type AccentColors = "sky" | "red" | "orange" | "lime" | "green" | "cyan" | "blue" | "royal" | "violet" | "purple" | "pink"

let theme_store: any
let accent_store: any
theme.subscribe((v) => theme_store = v)
accent.subscribe((v) => accent_store = v)

/**
 * # ```getColor()```
 * 
 * Returns RGB color based on UI system
 * 
 * ```ts
 * let color = getColor(1000, 'accent')
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export function getColor(depth: Depths = 1000, name: Colors = 'accent'): string {
    if (name == 'accent') name = accent_store
    if (name == 'theme') { depth = theme_store == 'dark' ? 0 : 1000; name = 'neutral' }
    let color = eval(`list.${name}.c${depth}`)
    return `rgb(${color[0]},${color[1]},${color[2]})`
}

/**
 * # ```getOptimalTextColor()```
 * 
 * Returns optimal pair color for text
 * 
 * ```ts
 * let text_color = getOptimalTextColor('red')
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export function getOptimalTextColor(color: Colors): string {
    let current = color == 'accent' ? accent_store : color
    let text_color = eval(`list.${current}.text`)
    return `rgb(${text_color[0]},${text_color[1]},${text_color[2]})`
}

/**
 * # ```getRoot()```
 * 
 * Returns css variables in :root selector
 * 
 * ```ts
 * let root = getRoot()
 * ```
 * 
 * ```@xl-soft/ui/colors```
 */
export function getRoot(): string {
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
`
}



