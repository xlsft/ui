import { theme_store } from "$lib/core";
import { getColor } from "$lib/colors";

export default (): string => {
    return `
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