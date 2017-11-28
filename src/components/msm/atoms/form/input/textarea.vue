<template>
    <textarea ref="comp" :class="elClass" :id="id+'-'+gCount" :placeholder="elPlaceholder" :value="elValue"></textarea>
</template>

<script>

    import globalFuncs from '../../../../../mixins/global'
    import compData from '../../../../../mixins/compData'
    import { bus } from '../../../../../main.js'
    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            id: {
                type: String,
                default: 'textarea'
            },
            elPlaceholder: {
                default: 'Enter here'
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
    textarea {
        width: 100%;
        height: 150px;
        border-radius: 4px;
        font: normal 14px 'Open Sans';
        border: none;
        background-color: #ebf0f2;
        box-shadow: inset 0 2px 0 0 #c6cacc;
        padding: 15px;
        box-sizing: border-box;
        resize: none;
    }
    textarea:focus {
        box-shadow: 0 0 3px 2px #00aeef, inset 0 2px 0 0 #c6cacc;;
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
