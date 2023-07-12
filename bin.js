import { create } from 'create-svelte';
import fs from 'fs'
import latestVersion from 'latest-version';
import prompts from 'prompts'

(async () => {
    console.log('\x1b[36m%s\x1b[0m','\n⚡️ Welcome to XL Software UI! ⚡️')
    console.log(`
Your project is ready to become something great! 
Remember, only you creating amazing things, great UI just an cherry on top 🍒
    `)
    const response = await prompts([
        {
            type: 'text',
            name: 'name',
            message: 'Give a name to your project'
        }
    ]);

    console.log('\x1b[36m%s\x1b[0m',`\n${response.name}... Good name! Now let's select additionals options:\n`)

    const addons = await prompts([
        {
            type: 'confirm',
            name: 'prettier',
            message: 'You want to use prettier?'
        },
        {
            type: 'confirm',
            name: 'eslint',
            message: 'You want to use eslint?'
        },
        {
            type: 'confirm',
            name: 'playwright',
            message: 'You want to use playwright?'
        },
        {
            type: 'confirm',
            name: 'vitest',
            message: 'You want to use vitest?'
        },
    ]);

await create(response.name, {
    name: response.name,
    template: 'skeleton',
    types: 'typescript',
    prettier: addons.prettier,
    eslint: addons.eslint,
    playwright: addons.playwright,
    vitest: addons.vitest
})

let kit = '@xl-soft/ui'

let path = {
    npm: `./${response.name}/package.json`,
    tsconfig: `./${response.name}/tsconfig.json`,
    layoutpage: `./${response.name}/src/routes/+layout.svelte`,
    page: `./${response.name}/src/routes/+page.svelte`,
    readme: `./${response.name}/README.md`
}
// path.npm
let npm = JSON.parse(await fs.readFileSync(path.npm).toString())
npm.devDependencies[kit] = await latestVersion(kit)
fs.writeFileSync(path.npm, JSON.stringify(npm))
// path.tsconfig
fs.writeFileSync(path.tsconfig, JSON.stringify({
    extends: "./.svelte-kit/tsconfig.json",
	compilerOptions: {
		allowJs: true,
		checkJs: true,
		esModuleInterop: true,
		forceConsistentCasingInFileNames: true,
		resolveJsonModule: true,
		skipLibCheck: true,
		sourceMap: true,
		strict: true,
        moduleResolution: "Bundler"
	}
}))
// path.layoutpage
fs.writeFileSync(path.layoutpage, `<script lang="ts">
    import { Flex, Main } from "@xl-soft/ui"    
</script>

<Main accent="violet" theme="dark">
    <Flex width="100%" height="100%" direction="column" y bar gap="20px">
        <slot></slot>
    </Flex>
</Main>
`)
// path.page
fs.writeFileSync(path.page, `<script lang="ts">
import { theme } from "@xl-soft/ui/core";
import { Noise, Button, Input, Switch, Flex, Icon } from "@xl-soft/ui";

import { expoInOut } from "svelte/easing";
import { tweened } from "svelte/motion";
let value = false, heart = false, pointer = 0, reducer = 1, typewritter: any, typewritter_caret = "█", input = "npm create @xl-soft/ui@latest", copy_value = "Copy", hidden = tweened(266, { duration: 1000, easing: expoInOut })
setInterval(() => typewritter_caret == "█" ? (typewritter_caret = "") : (typewritter_caret = "█"), 500);
setInterval(() => { if (pointer == 50) reducer = -1; if (pointer == 0) reducer = 1; pointer = pointer + reducer; typewritter = input.substring(0, pointer); }, 100);
setInterval( () => input == "npm create @xl-soft/ui@latest" ? (input = "npm i @xl-soft/ui") : (input = "npm create @xl-soft/ui@latest"), 11000);
$: value == false ? hidden.set(266) : hidden.set(0);
let git = async (): Promise<any> => { let result = await fetch("https://api.github.com/repos/xl-soft/ui/releases");result = await result.json();return result;};
let copy = (text: string) => {let input = document.createElement("input");input.setAttribute("value", text);document.body.appendChild(input);input.select();let result = document.execCommand("copy");document.body.removeChild(input);return result}
</script>

<svelte:head>
<title>XL Software UI</title>
<link rel="shortcut icon" href="http://xluiassets.deno.dev/logo/ui/favicon" type="image/x-icon">
</svelte:head>


<img src="http://xluiassets.deno.dev/logo/ui/logo{$theme == 'dark' ? '-dark' : '-light'}" alt="" style="height: 100px; position: absolute; top: 50px; left: 50%; transform: translate( -50%, 0%)">

<Flex direction="column" gap="10px" align="flex-start" width="500px">
<Flex gap="0px" align="center" justify="space-between" height="40px" width="100%">
    <h1 style="margin-right: 21px; white-space: nowrap;"><span class="{value == true ? 'light' : ''}" style="color: var({value == true ? '--orange-1000' : '--theme-text-color'});">Light</span> up your</h1>
    <Noise rows={5} columns={38} style="width: {$hidden}px;margin-right: 10px;"/>
    <Icon size={50} category="edit" name="bomb"/>
    <Icon size={45} category="ard" name="trashcan"/>
    <Icon size={40} category="favorite" name="heart{heart == true ? 'broken' : ''}" button depth={heart == true ? 700 : 1000} color={heart == true ? "accent" : "theme"} fill={heart} fill_color="accent" on:click={() => (heart == true ? (heart = false) : (heart = true))} />
    <Icon size={35} category="arrows" name="move" />
    <Icon size={30} category="auth" name="user" />
</Flex>
<Flex gap="10px" justify="space-between" height="40px" width="100%">
    <Switch theme bind:value />
    <h1>development experience</h1>
</Flex>
</Flex>

<Flex gap="25px">
<Input width="370px" type="text" disabled placeholder="{typewritter}{typewritter_caret}">
    <span slot="prefix">$</span>
</Input>
<Button placeholder={copy_value} width="105px" on:click={() => { copy(input); copy_value = "Copied!"; setTimeout(() => (copy_value = "Copy"), 2000)}}/>
</Flex>

<Flex justify="flex-start" style="position: absolute; bottom: 50px; left: 50px" gap="10px">
{#await git()}
    <a href={""} target="_blank" rel="noreferrer">Latest release (pending...)</a>
{:then data}
    <a href={data[0].html_url} target="_blank" rel="noreferrer">Latest release: v{data[0].tag_name.split('@')[1]}</a>
{/await}
<a href={""} target="_blank" rel="noreferrer">NPM</a>
<a href={""} target="_blank" rel="noreferrer">GitHub</a>
</Flex>

<Flex justify="flex-end" style="position: absolute; bottom: 50px; right: 50px">
<img src="http://xluiassets.deno.dev/logo/xlsoftware/logo{$theme == 'dark' ? '-dark' : '-light'}" alt="" style="width: 150px;">
</Flex>

`)
// path.readme
fs.writeFileSync(path.readme, `
# ⚡️ Welcome to XL Software UI! ⚡️

Your project is ready to become something great! 
Remember, only you creating amazing things, great UI just an cherry on top 🍒`)


console.log('\x1b[36m%s\x1b[0m',`\n\nYour SvelteKit TypeScript skeleton project with best UI-kit is ready!\n`)
console.log('\x1b[36m%s\x1b[0m', `Next steps:`)
console.log(`  1: cd ${response.name}`)
console.log(`  2: npm install (or pnpm install, etc)`)
console.log(`  3: git init && git add -A && git commit -m "Initial commit" (optional)`)
console.log(`  4: npm run dev\n`)
console.log('\x1b[36m%s\x1b[0m', `Repo:`)
console.log(`  https://github.com/xl-soft/ui\n`)

})();