<template>
    <h1>{{ elText }}</h1>
</template>

<script>

    import { globalCount } from '../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Section titles may run over multiple lines if required'
            },
            elClass: '',
            elWrapClass: ''
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
    h1 {
        font-size: 24px;
        line-height: 1.33;
        font-weight: 300;
        padding: 20px 20px 10px;
        display: block;
        max-width: 748px;
    }
    @media all and ( min-width: 768px ) {
        h1 {
            font-size: 28px;
            line-height: 1.38;
        }
    }

    @media all and ( min-width: 824px ) {
        h1 {
            font-size: 32px;
        }

    }
</style>
