/**
 * # type ```IconSets```
 *
 * Type for `@xl-soft/ui-assets` icon sets
 *
 * ```ts
 * export let set: IconSets = 'line'
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type IconSets = "line";

/**
 * # type ```IconCategories```
 *
 * Type for `@xl-soft/ui-assets` icon categories
 *
 * ```ts
 * export let category: IconCategories = 'alerts'
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type IconCategories =
    | "alerts"
    | "ard"
    | "arrow"
    | "arrows"
    | "auth"
    | "edit"
    | "favorite"
    | "text"
    | "theme";

/**
 * # type ```IconList```
 *
 * Type for `@xl-soft/ui-assets` icons
 *
 * ```ts
 * export let icon: IconList = 'bell'
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type IconList =
    | "bell"
    | "bellring"
    | "bellstop"
    | "error"
    | "ok"
    | "warn"
    | "add"
    | "delete"
    | "substract"
    | "trashcan"
    | "expand"
    | "shrink"
    | "shrinkdiagonal"
    | "shrinkstraight"
    | "shrinktailless"
    | "bend"
    | "bendmirrored"
    | "corner"
    | "cornermirrored"
    | "crossed"
    | "diagonal"
    | "diameter"
    | "from"
    | "link"
    | "minimize"
    | "move-1"
    | "move"
    | "on"
    | "redo"
    | "repeat"
    | "rotate"
    | "rotatemirrored"
    | "scroll"
    | "shuffle"
    | "straight"
    | "sync"
    | "tailless"
    | "taillessfrom"
    | "taillesson"
    | "turn"
    | "turnmirrored"
    | "undo-1"
    | "undo"
    | "hidden"
    | "password"
    | "showed"
    | "user"
    | "bomb"
    | "brush"
    | "clip"
    | "colorpick"
    | "crop"
    | "magnet"
    | "pencil"
    | "pencilline"
    | "pin"
    | "bookmark"
    | "dislike"
    | "heart"
    | "heartbroken"
    | "like"
    | "star4"
    | "star5"
    | "stars"
    | "starsmirrored"
    | "alignbottom"
    | "aligncenter"
    | "alignjustified"
    | "alignleft"
    | "alignmiddle"
    | "alignright"
    | "aligntop"
    | "font"
    | "letterspacing"
    | "lineheight"
    | "list"
    | "paragraphspace"
    | "strike"
    | "truncate"
    | "underline"
    | "dark"
    | "light";

/**
 * # type ```FlexDirection```
 *
 * Type for `Flex` component. Provides "flex-direction: <<T>T>;" css
 *
 * ``` tsx
 * <Flex direction="row-reverse"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

/**
 * # type ```FlexWrap```
 *
 * Type for `Flex` component. Provides "flex-wrap: <<T>T>;" css
 *
 * ``` tsx
 * <Flex wrap="nowrap"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

/**
 * # type ```JustifyContent```
 *
 * Type for `Flex` component. Provides "justify-content: <<T>T>;" css
 *
 * ``` tsx
 * <Flex justify="center"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type JustifyContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

/**
 * # type ```AlignItems```
 *
 * Type for `Flex` component. Provides "align-items: <<T>T>;" css
 *
 * ``` tsx
 * <Flex align="center"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type AlignItems =
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";

/**
 * # type ```AlignContent```
 *
 * Type for `Flex` component. Provides "align-content: <<T>T>;" css
 *
 * ``` tsx
 * <Flex aligncont="center"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type AlignContent =
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";

/**
 * # type ```Crossorigin```
 *
 * Type for `Image` component. Provides support for CORS
 *
 * ``` tsx
 * <Image cors="anonymous"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type Crossorigin =
    | ""
    | "anonymous"
    | "use-credentials"
    | null
    | undefined;

/**
 * # type ```MIME```
 *
 * Type for `Image` component. Indicates the nature and format of an image
 *
 * ``` tsx
 *  <Image
 *      src={[
 *          { url: './something-land.jpeg', media: '(orientation: landscape)', mime: 'jpeg' },
 *          { url: './something-port.jpeg', media: '(orientation: portrait)', mime: 'jpeg' },
 *      ]}
 *  />
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type MIME =
    | "gif"
    | "jpeg"
    | "pjpeg"
    | "png"
    | "svg+xml"
    | "tiff"
    | "vnd.microsoft.icon"
    | "vnd.wap.wbmp"
    | "webp";

/**
 * # type ```Colors```
 *
 * Type for all colors of UI system
 *
 * ```ts
 * export let color: Colors = 'red'
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type Colors =
    | "theme"
    | "accent"
    | "neutral"
    | "cobalt"
    | "sky"
    | "red"
    | "orange"
    | "lime"
    | "green"
    | "cyan"
    | "blue"
    | "royal"
    | "violet"
    | "purple"
    | "pink"
    | "";

/**
 * # type ```Depths```
 *
 * Type for all color depths of UI system
 *
 * ```ts
 * export let depth: Depths = 1000
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type Depths =
    | 1000
    | 900
    | 800
    | 700
    | 600
    | 500
    | 400
    | 300
    | 200
    | 100
    | 0;

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
 * ```@xl-soft/ui/core```
 */
export type Theme = "system" | "light" | "dark";

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
 * ```@xl-soft/ui/core```
 */
export type AccentColors =
    | "sky"
    | "red"
    | "orange"
    | "lime"
    | "green"
    | "cyan"
    | "blue"
    | "royal"
    | "violet"
    | "purple"
    | "pink";

/**
 * # type ```Align```
 *
 * Type for text alignment
 *
 * ```ts
 * let align: Align = 'center'
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type Align = "left" | "center" | "right";

/**
 * # type ```InputTypes```
 *
 * Type for `Input` component. Provides type attribute for input
 *
 * ``` tsx
 * <Input type="password"/>
 * ```
 *
 * ```@xl-soft/ui/core```
 */
export type InputTypes =
    | "email"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "url";
