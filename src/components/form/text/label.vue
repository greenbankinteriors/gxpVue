<template>
    <p>{{ elText }}</p>
</template>

<script>

    import { globalCount } from '../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Example of a question label'
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
        font-weight: 600;
        color: #2b3133;
        padding: 10px 20px 10px 0;
        max-width: 748px;
    }
</style>
