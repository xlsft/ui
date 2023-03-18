let colors = {
    accent: {
        text: "--theme-accent-text-color",
        color: "--theme-accent-color-1000",
        hover: "--theme-accent-color-700"
    },
    cobalt: {
        text: "--neutral-0",
        color: "--cobalt-1000",
        hover: "--cobalt-700"
    },
    sky: {
        text: "--neutral-1000",
        color: "--sky-1000",
        hover: "--sky-700"
    },
    red: {
        text: "--neutral-0",
        color: "--red-1000",
        hover: "--red-700"
    },
    orange: {
        text: "--neutral-0",
        color: "--orange-1000",
        hover: "--orange-700"
    },
    lime: {
        text: "--neutral-1000",
        color: "--lime-1000",
        hover: "--lime-700"
    },
    green: {
        text: "--neutral-1000",
        color: "--green-1000",
        hover: "--green-700"
    },
    cyan: {
        text: "--neutral-1000",
        color: "--cyan-1000",
        hover: "--cyan-700"
    },
    blue: {
        text: "--neutral-0",
        color: "--blue-1000",
        hover: "--blue-700"
    },
    royal: {
        text: "--neutral-0",
        color: "--royal-1000",
        hover: "--royal-700"
    },
    violet: {
        text: "--neutral-0",
        color: "--violet-1000",
        hover: "--violet-700"
    },
    purple: {
        text: "--neutral-0",
        color: "--purple-1000",
        hover: "--purple-700"
    },
    pink: {
        text: "--neutral-0",
        color: "--pink-1000",
        hover: "--pink-700"
    }
}

export function color(color) {
    let obj = eval(`colors.${color}`)
    return obj
}