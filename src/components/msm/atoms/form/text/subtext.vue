<template>
    <p class="hint">{{ elText }}</p>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Any sub-text for the question goes here. It can also run over multiple lines.'
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
    p.hint {
        font-size: 14px;
        font-weight: 400;
        color: #566266;
        max-width: 748px;
    }
</style>
