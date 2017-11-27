<template>
    <p>{{ elText }}</p>
</template>

<script>

    import { globalCount } from '../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Any sub-text for the question goes here. It can also run over multiple lines and bold styling to emphasise key points.'
            }
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        },
        methods: {},
        created() {
            globalCount.counter = globalCount.counter + 1;
        }

    }

</script>

<style scoped>
    p {
        font-size: 14px;
        line-height: 1.38;
        font-weight: 300;
        color: #566266;
        padding: 10px 0;
        max-width: 748px;
    }
</style>
