<template>
    <label>{{ elText }}</label>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Your question goes here. It can run over multiple lines providing you resize the text box?'
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
    label {
        font-size: 16px;
        line-height: 1.38;
        font-weight: 400;
        color: #2b3133;
        padding: 0 30px 10px 0;
        display: block;
    }
    @media all and ( min-width: 620px ) {
        label {
            font-size: 18px;
            line-height: 1.4;
            padding: 10px 0 0;
        }
    }
</style>
