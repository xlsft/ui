// IMPORTS

    //* STORES
    import * as MainStore from "./stores" // Store that contains global variables 

    //* ICONS
    import * as IconsList from "../assets/icons/icons" // Modified Streamline HQ Core Line Icons

    //* STRUCTURE
    import Main from "./layout/Main.svelte" // Main wrapper for UI kit. Contains colors, fonts, and basic UI features like 100vh fix
    import Flex from "./layout/Flex.svelte" // Default, fully-customizable flex box for any component. Supports overflow and overflow with horizontal scroll feature
    import Text from "./layout/Text.svelte" // Styles for multiple text elements, like: h1, h2, h3, div and others

    //* MEDIA
    import Image from "./media/Image.svelte" // Image content
    import Icon from "./media/Icon.svelte" // Icon content with included modified Streamline HQ Core Line Icons

    //* INPUTS
    import Button from "./inputs/button/Button.svelte" // Button
    import Switch from "./inputs/switch/Switch.svelte" // Switch


// EXPORTS
    
    export {
        //* STORES
        MainStore,

        //* ICONS
        IconsList,

        //* STRUCTURE
        Main, Flex, Text,

        //* MEDIA
        Image, Icon,

        //* INPUTS
        Button, Switch
    }