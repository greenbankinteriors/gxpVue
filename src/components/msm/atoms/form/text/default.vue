<template>
    <p>{{ elText }}</p>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elText: {
                default: 'This is a paragraph within a question set. It can also run over multiple lines and bold styling to emphasise key points.'
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
        display: block;
        width: 100%;
        font-size: 14px;
        line-height: 1.38;
        font-weight: 400;
        color: #2b3133;
        padding: 10px 0;
    }
</style>
