<template>
    <form :class="elClass?'form '+elClass:'form'" :id="elId">
        <slot></slot>
    </form>
</template>

<script>

    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

    export default {

        props: {
            elId: '',
            elClass: ''
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        }

    }

</script>

<style scoped>
    .form > fieldset > legend {
        font-size: 22px;
        line-height: 1.33;
        color: #2b3133;
        font-weight: 300;
        padding: 20px 0px 10px;
        box-sizing: border-box;
        display: block;
        width: 100%;
    }
    @media all and ( min-width: 420px ) {
        .form > fieldset > legend {
            font-size: 24px;
            line-height: 1.38;
        }
    }
    @media all and ( min-width: 620px ) {
        .form > fieldset > legend {
            font-size: 28px;
        }
    }

    @media all and ( min-width: 820px ) {
        .form > fieldset > legend {
            font-size: 32px;
        }
    }
</style>
