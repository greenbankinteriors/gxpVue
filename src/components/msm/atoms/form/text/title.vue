<template>
    <h1>{{ elText }}</h1>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elText: {
                default: 'Title may run over multiple lines if required'
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
        color: #2b3133;
        font-weight: 300;
        padding: 20px 0px 10px;
        box-sizing: border-box;
        display: block;
        width: 100%;
    }
    @media all and ( min-width: 420px ) {
        h1 {
            font-size: 28px;
            line-height: 1.38;
        }
    }
    @media all and ( min-width: 620px ) {
        h1 {
            font-size: 32px;
        }
    }
    @media all and ( min-width: 820px ) {
        h1 {
            font-size: 36px;
        }
    }
</style>
