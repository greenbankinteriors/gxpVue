<template>
    <span class="currency">
        <input type="tel" :class="elClass" :id="'currency-'+gCount" :placeholder="elPlaceholder" :value="elValue">
    </span>
</template>

<script>

    import globalFuncs from '../../../../../mixins/global'
    import { bus } from '../../../../../main.js'
    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            elPlaceholder: {
                default: 'Enter amount here'
            },
            elValue: '',
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
            bus.$emit('compInfo', {"tag":this.tag, "type":this.type});
            globalCount.counter = globalCount.counter + 1;
        },
        mixins: [ globalFuncs ]

    }

</script>

<style scoped>
    .currency {
        position: relative;
        width: 100%;
    }
    .currency:before {
        content: '£';
        position: absolute;
        font: 600 14px 'Open Sans';
        color: #2b3133;
        top: 15px;
        left: 15px;
        z-index: 1;
    }
    input {
        padding: 16px 10px 17px 30px;
        font-weight: 600;
        font-size: 14px;
        line-height: 1;
        border-radius: 5px;
        box-shadow: inset 0 2px 0 0 #c6cacc;
        box-sizing: border-box;
        background-color: #ebf0f2;
        display: block;
        color: #2b3133;
        width: 100%;
        transition: all 0.2s ease-in-out;
        margin-bottom: 10px;
    }
    input:last-of-type {
        margin-bottom: 0;
    }
    input:focus {
        box-shadow: 0 0 3px 2px #00aeef, inset 0 2px 0 0 #c6cacc;;
    }
    :-ms-input-placeholder {
        font-weight: 400;
        color: #949899;
    }
    ::-webkit-input-placeholder {
        font-weight: 400;
        color: #949899;
    }
    .error-input input {
        background-color: #fde8e9;
        color: #ed1c24;
        box-shadow: 0 0 4px 2px #ed1c24;
    }
    .error-input input:focus {
        box-shadow: 0 0 3px 2px #00aeef, inset 0 2px 0 0 #c6cacc;
    }
    .form-date-wrap.error-input {
        background-color: #fde8e9;
        color: #ed1c24;
        box-shadow: 0 0 4px 2px #ed1c24;
    }
    .error-input input:placeholder-shown {
        color: #ed1c24;
    }
    :-ms-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
    ::-webkit-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
</style>
