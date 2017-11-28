<template>
    <div :class="elClass">
        <label>Default message with bullets</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <a>tempor incididunt</a> ut labore et dolore magna aliqua.</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        </ul>
    </div>
</template>

<script>

    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

    export default {

        props: {
            elClass: {
                default: 'notification'
            }
        },
        data() {
            return {

            }
        },
        methods: {
        },
        created() {
            bus.$emit('sendComponentInfo', this.$options);
        }

    }

</script>

<style scoped>
    .notification {
        position: relative;
        font: 400 14px 'Open Sans';
        box-sizing: content-box;
        padding: 20px 20px 20px 15px;
        background-color: #f2f8fa;
        border-left: solid 5px #ebf0f2;
        margin: 10px 0;
    }
    .notification.warning,
    .notification.success {
        background-color: #fde8e9;
        border-left-color: #ed1c24;
        padding-left: 55px;
    }
    .notification.success {
        background-color: #ecf6e7;
        border-left-color: #48a415;
    }
    .form-field .notification {
        margin-left: -20px;
        width: calc(100% - 5px);
    }
    .notification label {
        font-size: 14px;
        font-weight: 700;
    }
    .notification a {
        display: inline;
        text-decoration: underline;
    }
    .notification.warning a {
        color: #ed1c24;
    }
    .notification.success a {
        color: #48a415;
    }
    .notification p ~ ul {
        padding-top: 10px;
    }
    .notification li {
        position: relative;
        padding: 0 0 8px 25px;
        line-height: 1.3;
        display: block;
    }
    .notification li:before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #00AEEF;
        position: absolute;
        top: 5px;
        left: 10px;
    }
    .notification.warning li:before,
    .notification.success li:before {
        background-color: #2b3133;
    }
    .notification.tick-list li:before {
        content: '';
        width: 28px;
        border-radius: 0;
        height: 28px;
        display: block;
        position: absolute;
        top: -5px;
        left: -5px;
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#00aeef" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
        background-size: 28px;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }
    .notification.warning:before,
    .notification.success:before {
        content: '';
        position: absolute;
        left: 8px;
        width: 35px;
        height: 30px;
        display: block;
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#ED1C24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><line  x1="50" y1="29" x2="50" y2="47.5"/><line x1="50" y1="56.3" x2="50" y2="56.4"/><polygon points="91,70 8.9,70 49.8,3.5"/></g></svg>') 1px 1px no-repeat;
        background-size: 35px;
    }
    .notification.success:before {
        left: 12px;
        width: 30px;
        border-radius: 30px;
        background: #48a415 url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#ecf6e7" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
    }
    @media (min-width: 620px) {
        .notification label {
            padding-top: 0;
        }
        .notification {
            border-left-width: 10px;
        }
        .notification.warning,
        .notification.success {
            padding-left: 75px;
        }
        .notification.warning:before,
        .notification.success:before {
            top: 20px;
            left: 18px;
        }
        .notification.success:before {
            left: 22px;
        }
    }
</style>
