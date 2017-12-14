<template>
    <fieldset>
        <legend>{{ elTitle }}</legend>
        <slot></slot>
    </fieldset>
</template>

<script>

    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

    export default {

        props: {
            id: '',
            elClass: '',
            elTitle: ''
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        }

    }

</script>

<style scoped>
    legend {
        font-size: 22px;
        line-height: 1.33;
        color: #2b3133;
        font-weight: 300;
        padding: 20px 0px 5px;
        box-sizing: border-box;
        display: block;
        width: 100%;
    }
    @media all and ( min-width: 420px ) {
        legend {
            font-size: 24px;
            line-height: 1.38;
        }
    }
    @media all and ( min-width: 620px ) {
        legend {
            font-size: 28px;
        }
    }

    @media all and ( min-width: 820px ) {
        legend {
            font-size: 32px;
        }
    }
</style>
