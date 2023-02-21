//! THIS UI KIT DOESN'T SUPPORT SSR, PLEASE, IF YOU USING SVELTEKIT CREATE +LAYOUT.JS IN ROOT FOLDER WITH THIS LINE
//! "export const ssr = false;"
//! IF YOU DON'T DO THIS, SVELTEKIT WILL RETURN INTERNAL SERVER ERROR DUE TO UNENVIABLE WINDOW OBJECT

// COMPONENTS

    //* UTILS
    export { default as Main } from "./utils/Main.svelte" // Main wrapper for UI kit. Contains colors, fonts, and basic UI features like 100vh fix
    export { default as Flex } from "./utils/Flex.svelte" // Default, fully-customizable flex box for any component