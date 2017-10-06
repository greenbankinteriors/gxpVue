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

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

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

<style></style>
