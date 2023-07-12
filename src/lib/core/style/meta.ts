import { theme_store } from "$lib/core";
import { getColor } from "$lib/colors";

export default (): string => {
    return `
        ::selection {
            background: ${theme_store == "dark" ? getColor(600, "neutral") : getColor(300, "neutral")};
            border-radius: 5px;
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

        input[type='number'] {
            appearance:textfield;
        }

        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button) {
            -webkit-appearance: none;
        }
    `
}