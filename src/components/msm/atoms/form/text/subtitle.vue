<template>
    <h2>{{ elText }}</h2>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elText: {
                default: 'This is the page subtitle it can also run on multiple lines'
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
    h2 {
        font-size: 16px;
        line-height: 1.38;
        font-weight: 700;
        color: #562873;
        padding: 0px 0px 15px;
        box-sizing: border-box;
        width: 100%;
    }
    @media all and ( min-width: 620px ) {
        h2 {
            font-size: 18px;
            line-height: 1.33;
        }
    }
</style>
