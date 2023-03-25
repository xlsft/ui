<script lang="ts">
    //@ts-nocheck
    export let style = "",
        size = "20px",
        noinvert = false,
        invert = false,
        /** @type {string} icon
         * Modified Streamline HQ Core Line Icons
         * --------------------------------------
         * animated_loader
         *
         * auth_faceid
         *
         * auth_finger
         *
         * auth_key
         *
         * auth_lock
         *
         * auth_login
         *
         * auth_logout
         *
         * auth_password
         *
         * auth_shield
         *
         * battery_empty
         *
         * battery_full
         *
         * battery_low
         *
         * battery_middle
         *
         * content_book
         *
         * content_box
         *
         * content_fire
         *
         * content_folder
         *
         * content_glasses
         *
         * content_notifications
         *
         * content_offnotifications
         *
         * content_save
         *
         * content_signal
         *
         * edit_airplane
         *
         * edit_bomb
         *
         * edit_brush
         *
         * edit_camera
         *
         * edit_clip
         *
         * edit_clone
         *
         * edit_color
         *
         * edit_copy
         *
         * edit_cut
         *
         * edit_dislike
         *
         * edit_download
         *
         * edit_edit
         *
         * edit_favourite
         *
         * edit_file
         *
         * edit_flash
         *
         * edit_folder
         *
         * edit_frame
         *
         * edit_geolocation
         *
         * edit_hashtag
         *
         * edit_heart
         *
         * edit_hidden
         *
         * edit_like
         *
         * edit_link
         *
         * edit_magnet
         *
         * edit_map
         *
         * edit_picture
         *
         * edit_print
         *
         * edit_redo
         *
         * edit_ruler
         *
         * edit_search
         *
         * edit_send
         *
         * edit_share
         *
         * edit_star
         *
         * edit_trash
         *
         * edit_undo
         *
         * edit_unlink
         *
         * edit_upload
         *
         * edit_view
         *
         * edit_webcam
         *
         * face_happy
         *
         * face_neutral
         *
         * face_sad
         *
         * help_question
         *
         * help_support
         *
         * money_bank
         *
         * money_bitcoin
         *
         * money_card
         *
         * money_cart
         *
         * money_cash
         *
         * money_coins
         *
         * money_diamond
         *
         * money_dollar
         *
         * money_euro
         *
         * money_gift
         *
         * money_pound
         *
         * money_qr
         *
         * money_ruble
         *
         * money_tag
         *
         * money_wallet
         *
         * money_yuan
         *
         * navigation_chat
         *
         * navigation_close
         *
         * navigation_dark
         *
         * navigation_down
         *
         * navigation_error
         *
         * navigation_home
         *
         * navigation_left
         *
         * navigation_light
         *
         * navigation_maximize
         *
         * navigation_minimize
         *
         * navigation_ok
         *
         * navigation_options
         *
         * navigation_right
         *
         * navigation_settings
         *
         * navigation_up
         *
         * navigation_warning
         *
         * navigation_web
         *
         * os_android
         *
         * os_apple
         *
         * os_windows
         *
         * shape_circle
         *
         * shape_octagone
         *
         * shape_pentagon
         *
         * shape_square
         *
         * shape_triangle
         *
         */
        icon = "", hover = false
    import { theme } from "../stores";
    // ------------------ANIMATED------------------

    // LOADER.SVG EXPORT
    import animated_loader from "../../assets/icons/animated/loader.svg";

    // ------------------AUTH------------------

    // FACEID.SVG EXPORT
    import auth_faceid from "../../assets/icons/auth/faceid.svg";

    // FINGER.SVG EXPORT
    import auth_finger from "../../assets/icons/auth/finger.svg";

    // KEY.SVG EXPORT
    import auth_key from "../../assets/icons/auth/key.svg";

    // LOCK.SVG EXPORT
    import auth_lock from "../../assets/icons/auth/lock.svg";

    // LOGIN.SVG EXPORT
    import auth_login from "../../assets/icons/auth/login.svg";

    // LOGOUT.SVG EXPORT
    import auth_logout from "../../assets/icons/auth/logout.svg";

    // PASSWORD.SVG EXPORT
    import auth_password from "../../assets/icons/auth/password.svg";

    // SHIELD.SVG EXPORT
    import auth_shield from "../../assets/icons/auth/shield.svg";

    // ------------------BATTERY------------------

    // EMPTY.SVG EXPORT
    import battery_empty from "../../assets/icons/battery/empty.svg";

    // FULL.SVG EXPORT
    import battery_full from "../../assets/icons/battery/full.svg";

    // LOW.SVG EXPORT
    import battery_low from "../../assets/icons/battery/low.svg";

    // MIDDLE.SVG EXPORT
    import battery_middle from "../../assets/icons/battery/middle.svg";

    // ------------------CONTENT------------------

    // BOOK.SVG EXPORT
    import content_book from "../../assets/icons/content/book.svg";

    // BOX.SVG EXPORT
    import content_box from "../../assets/icons/content/box.svg";

    // FIRE.SVG EXPORT
    import content_fire from "../../assets/icons/content/fire.svg";

    // FOLDER.SVG EXPORT
    import content_folder from "../../assets/icons/content/folder.svg";

    // GLASSES.SVG EXPORT
    import content_glasses from "../../assets/icons/content/glasses.svg";

    // NOTIFICATIONS.SVG EXPORT
    import content_notifications from "../../assets/icons/content/notifications.svg";

    // OFFNOTIFICATIONS.SVG EXPORT
    import content_offnotifications from "../../assets/icons/content/offnotifications.svg";

    // SAVE.SVG EXPORT
    import content_save from "../../assets/icons/content/save.svg";

    // SIGNAL.SVG EXPORT
    import content_signal from "../../assets/icons/content/signal.svg";

    // ------------------EDIT------------------

    // AIRPLANE.SVG EXPORT
    import edit_airplane from "../../assets/icons/edit/airplane.svg";

    // BOMB.SVG EXPORT
    import edit_bomb from "../../assets/icons/edit/bomb.svg";

    // BRUSH.SVG EXPORT
    import edit_brush from "../../assets/icons/edit/brush.svg";

    // CAMERA.SVG EXPORT
    import edit_camera from "../../assets/icons/edit/camera.svg";

    // CLIP.SVG EXPORT
    import edit_clip from "../../assets/icons/edit/clip.svg";

    // CLONE.SVG EXPORT
    import edit_clone from "../../assets/icons/edit/clone.svg";

    // COLOR.SVG EXPORT
    import edit_color from "../../assets/icons/edit/color.svg";

    // COPY.SVG EXPORT
    import edit_copy from "../../assets/icons/edit/copy.svg";

    // CUT.SVG EXPORT
    import edit_cut from "../../assets/icons/edit/cut.svg";

    // DISLIKE.SVG EXPORT
    import edit_dislike from "../../assets/icons/edit/dislike.svg";

    // DOWNLOAD.SVG EXPORT
    import edit_download from "../../assets/icons/edit/download.svg";

    // EDIT.SVG EXPORT
    import edit_edit from "../../assets/icons/edit/edit.svg";

    // FAVOURITE.SVG EXPORT
    import edit_favourite from "../../assets/icons/edit/favourite.svg";

    // FILE.SVG EXPORT
    import edit_file from "../../assets/icons/edit/file.svg";

    // FLASH.SVG EXPORT
    import edit_flash from "../../assets/icons/edit/flash.svg";

    // FOLDER.SVG EXPORT
    import edit_folder from "../../assets/icons/edit/folder.svg";

    // FRAME.SVG EXPORT
    import edit_frame from "../../assets/icons/edit/frame.svg";

    // GEOLOCATION.SVG EXPORT
    import edit_geolocation from "../../assets/icons/edit/geolocation.svg";

    // HASHTAG.SVG EXPORT
    import edit_hashtag from "../../assets/icons/edit/hashtag.svg";

    // HEART.SVG EXPORT
    import edit_heart from "../../assets/icons/edit/heart.svg";

    // HIDDEN.SVG EXPORT
    import edit_hidden from "../../assets/icons/edit/hidden.svg";

    // LIKE.SVG EXPORT
    import edit_like from "../../assets/icons/edit/like.svg";

    // LINK.SVG EXPORT
    import edit_link from "../../assets/icons/edit/link.svg";

    // MAGNET.SVG EXPORT
    import edit_magnet from "../../assets/icons/edit/magnet.svg";

    // MAP.SVG EXPORT
    import edit_map from "../../assets/icons/edit/map.svg";

    // PICTURE.SVG EXPORT
    import edit_picture from "../../assets/icons/edit/picture.svg";

    // PRINT.SVG EXPORT
    import edit_print from "../../assets/icons/edit/print.svg";

    // REDO.SVG EXPORT
    import edit_redo from "../../assets/icons/edit/redo.svg";

    // RULER.SVG EXPORT
    import edit_ruler from "../../assets/icons/edit/ruler.svg";

    // SEARCH.SVG EXPORT
    import edit_search from "../../assets/icons/edit/search.svg";

    // SEND.SVG EXPORT
    import edit_send from "../../assets/icons/edit/send.svg";

    // SHARE.SVG EXPORT
    import edit_share from "../../assets/icons/edit/share.svg";

    // STAR.SVG EXPORT
    import edit_star from "../../assets/icons/edit/star.svg";

    // TRASH.SVG EXPORT
    import edit_trash from "../../assets/icons/edit/trash.svg";

    // UNDO.SVG EXPORT
    import edit_undo from "../../assets/icons/edit/undo.svg";

    // UNLINK.SVG EXPORT
    import edit_unlink from "../../assets/icons/edit/unlink.svg";

    // UPLOAD.SVG EXPORT
    import edit_upload from "../../assets/icons/edit/upload.svg";

    // VIEW.SVG EXPORT
    import edit_view from "../../assets/icons/edit/view.svg";

    // WEBCAM.SVG EXPORT
    import edit_webcam from "../../assets/icons/edit/webcam.svg";

    // ------------------FACE------------------

    // HAPPY.SVG EXPORT
    import face_happy from "../../assets/icons/face/happy.svg";

    // NEUTRAL.SVG EXPORT
    import face_neutral from "../../assets/icons/face/neutral.svg";

    // SAD.SVG EXPORT
    import face_sad from "../../assets/icons/face/sad.svg";

    // ------------------HELP------------------

    // QUESTION.SVG EXPORT
    import help_question from "../../assets/icons/help/question.svg";

    // SUPPORT.SVG EXPORT
    import help_support from "../../assets/icons/help/support.svg";

    // ------------------MONEY------------------

    // BANK.SVG EXPORT
    import money_bank from "../../assets/icons/money/bank.svg";

    // BITCOIN.SVG EXPORT
    import money_bitcoin from "../../assets/icons/money/bitcoin.svg";

    // CARD.SVG EXPORT
    import money_card from "../../assets/icons/money/card.svg";

    // CART.SVG EXPORT
    import money_cart from "../../assets/icons/money/cart.svg";

    // CASH.SVG EXPORT
    import money_cash from "../../assets/icons/money/cash.svg";

    // COINS.SVG EXPORT
    import money_coins from "../../assets/icons/money/coins.svg";

    // DIAMOND.SVG EXPORT
    import money_diamond from "../../assets/icons/money/diamond.svg";

    // DOLLAR.SVG EXPORT
    import money_dollar from "../../assets/icons/money/dollar.svg";

    // EURO.SVG EXPORT
    import money_euro from "../../assets/icons/money/euro.svg";

    // GIFT.SVG EXPORT
    import money_gift from "../../assets/icons/money/gift.svg";

    // POUND.SVG EXPORT
    import money_pound from "../../assets/icons/money/pound.svg";

    // QR.SVG EXPORT
    import money_qr from "../../assets/icons/money/qr.svg";

    // RUBLE.SVG EXPORT
    import money_ruble from "../../assets/icons/money/ruble.svg";

    // TAG.SVG EXPORT
    import money_tag from "../../assets/icons/money/tag.svg";

    // WALLET.SVG EXPORT
    import money_wallet from "../../assets/icons/money/wallet.svg";

    // YUAN.SVG EXPORT
    import money_yuan from "../../assets/icons/money/yuan.svg";

    // ------------------NAVIGATION------------------

    // CHAT.SVG EXPORT
    import navigation_chat from "../../assets/icons/navigation/chat.svg";

    // CLOSE.SVG EXPORT
    import navigation_close from "../../assets/icons/navigation/close.svg";

    // DARK.SVG EXPORT
    import navigation_dark from "../../assets/icons/navigation/dark.svg";

    // DOWN.SVG EXPORT
    import navigation_down from "../../assets/icons/navigation/down.svg";

    // ERROR.SVG EXPORT
    import navigation_error from "../../assets/icons/navigation/error.svg";

    // HOME.SVG EXPORT
    import navigation_home from "../../assets/icons/navigation/home.svg";

    // LEFT.SVG EXPORT
    import navigation_left from "../../assets/icons/navigation/left.svg";

    // LIGHT.SVG EXPORT
    import navigation_light from "../../assets/icons/navigation/light.svg";

    // MAXIMIZE.SVG EXPORT
    import navigation_maximize from "../../assets/icons/navigation/maximize.svg";

    // MINIMIZE.SVG EXPORT
    import navigation_minimize from "../../assets/icons/navigation/minimize.svg";

    // OK.SVG EXPORT
    import navigation_ok from "../../assets/icons/navigation/ok.svg";

    // OPTIONS.SVG EXPORT
    import navigation_options from "../../assets/icons/navigation/options.svg";

    // RIGHT.SVG EXPORT
    import navigation_right from "../../assets/icons/navigation/right.svg";

    // SETTINGS.SVG EXPORT
    import navigation_settings from "../../assets/icons/navigation/settings.svg";

    // UP.SVG EXPORT
    import navigation_up from "../../assets/icons/navigation/up.svg";

    // WARNING.SVG EXPORT
    import navigation_warning from "../../assets/icons/navigation/warning.svg";

    // WEB.SVG EXPORT
    import navigation_web from "../../assets/icons/navigation/web.svg";

    // ------------------OS------------------

    // ANDROID.SVG EXPORT
    import os_android from "../../assets/icons/os/android.svg";

    // APPLE.SVG EXPORT
    import os_apple from "../../assets/icons/os/apple.svg";

    // WINDOWS.SVG EXPORT
    import os_windows from "../../assets/icons/os/windows.svg";

    // ------------------SHAPE------------------

    // CIRCLE.SVG EXPORT
    import shape_circle from "../../assets/icons/shape/circle.svg";

    // OCTAGONE.SVG EXPORT
    import shape_octagone from "../../assets/icons/shape/octagone.svg";

    // PENTAGON.SVG EXPORT
    import shape_pentagon from "../../assets/icons/shape/pentagon.svg";

    // SQUARE.SVG EXPORT
    import shape_square from "../../assets/icons/shape/square.svg";

    // TRIANGLE.SVG EXPORT
    import shape_triangle from "../../assets/icons/shape/triangle.svg";

    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher()
</script>

<img
    class={`xl-ui-icon`}
    src={eval(icon)}
    alt={icon}
    style={`
            height: ${size}; 
            pointer-events: none; 
            ${style}
        `}
    {noinvert}
    theme={$theme}
    {invert}
    importance="high"
    decoding="async"
    loading="lazy"
    on:click={() => dispatch('click')}
    on:keypress={() => dispatch('click')}
    {hover}
/>

<style>
    .xl-ui-icon[hover="true"]:hover {
        opacity: .5;
    }
    .xl-ui-icon[theme="dark"] {
        filter: invert(0%);
    }
    .xl-ui-icon[theme="light"] {
        filter: invert(100%);
    }
    .xl-ui-icon[noinvert="true"] {
        filter: invert(0%);
    }
    .xl-ui-icon[invert="true"] {
        filter: invert(100%);
    }
</style>
