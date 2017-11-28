<template>
    <ul :class="elWrapClass">
        <li v-for="(option, index) in options">
            <input type="checkbox" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option.value || option">
            <label :for="type+'-'+gCount+'-'+index">{{ option.value || option }}
                <sub v-if="option.subtext">{{ option.subtext }}</sub>
                <span v-if="option.subclass" :class="option.subclass"></span>
            </label>
        </li>
    </ul>
</template>

<script>

    import compData from '../../../../../mixins/compData'
    import globalFuncs from '../../../../../mixins/global'
    import { bus } from '../../../../../main.js'
    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            type: {
                type: String,
                default: 'checkbox'
            },
            options: {
                elType: Array
            },
            elValue: '',
            elClass: '',
            elWrapClass: '',
            elSpanClass: ''
        },
        data() {
            return {
                elType: this.type,
                gCount: globalCount.counter
            }
        },
        created() {
            globalCount.counter = globalCount.counter + 1;
        },
        mixins: [ globalFuncs ]

    }

</script>

<style scoped>
    input[type=checkbox] {
        -webkit-appearance: none;
        border: 0 none;
        background-color: transparent;
        position: absolute;
        z-index: -1;
        display: block;
        width: 0;
        height: 0;
    }
    input[type=checkbox]:focus {
        outline: none;
        box-shadow: 0 2px 0 0 #c6cacc;
    }
    .form-inline-checkbox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .form-grid-checkbox {
        flex-wrap: wrap;
        align-items: stretch;
    }
    .form-inline-checkbox > li {
        width: 50%;
        box-sizing: border-box;
    }

    .form-inline-checkbox > li:nth-child(odd) {
        padding: 0 3px 7px 0;
    }
    .form-inline-checkbox > li:nth-child(even) {
        padding: 0 0 7px 3px;
    }
    .form-inline-checkbox > li:last-child,
    .form-inline-checkbox > li:nth-last-child(2):nth-child(odd) {
        padding-bottom: 0;
    }
    input[type=checkbox] + label {
        padding: 15px 10px 15px 50px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 0 0 rgb(198, 202, 204);
        box-sizing: border-box;
        background-color: #ebf0f2;
        display: block;
        color: #566266;
        width: 100%;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        position: relative;
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    input[type=checkbox] + label sub {
        display: block;
        font: normal 12px 'Open Sans';
    }
    ul li:last-of-type input[type=checkbox] + label,
    .form-inline-radios input[type=checkbox] + label {
        margin: 0;
    }
    input[type=checkbox] + label strong {
        font-weight: 700;
    }
    input[type=checkbox] + label small {
        display: block;
        font-weight: 400;
        padding-top: 5px;
        font-size: 14px;
    }
    input[type=checkbox] + label:before {
        content: '';
        width: 24px;
        height: 24px;
        border: 1px solid #C6CACC;
        display: block;
        position: absolute;
        top: 13px;
        left: 13px;
        background: #FFF url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#FFF" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
        background-size: 24px;
        box-sizing: border-box;
        transition: all 0.2s ease-in-out;
    }
    input[type=checkbox]:checked + label:before {
        background-color: transparent;
        border: 3px solid #FFF;
    }
    input[type=checkbox] + label:hover {
        background-color: #99dff9;
        box-shadow: 0 2px 0 0 rgba(198,202,204,0);
    }
    input[type=checkbox]:focus + label {
        box-shadow: inset 0 0 0 2px #99dff9;
    }
    input[type=checkbox]:checked + label,
    input[type=checkbox]:checked:focus + label {
        background-color: #00AEEF;
        box-shadow: inset 0 2px 0 0 #0082b5;
        color: #FFF;
    }
    input[type=checkbox]:checked + label:hover {
        background-color: #0083b3;
    }
    input[type=checkbox]:checked:focus + label {
        box-shadow: inset 0 0 0 2px #99dff9;
    }
    input[type=checkbox].tickbox + label {
        background-color: transparent;
        box-shadow: none;
        padding: 15px 15px 15px 65px;
        text-transform: none;
        -webkit-tap-highlight-color: transparent;
    }
    li input[type=checkbox].tickbox + label {
        padding: 5px 0 5px 45px;
    }
    input[type=checkbox].tickbox:checked + label {
        color: #566266;
    }
    input[type=checkbox].tickbox:checked + label {
        background-color: transparent;
        box-shadow: none;
    }
    input[type=checkbox].tickbox + label:before {
        width: 30px;
        height: 30px;
        top: 15px;
        left: 20px;
        border-radius: 4px;
        box-shadow: inset 0 2px 0 0 #ebf0f2;
        background-size: 20px;
    }
    li input[type=checkbox].tickbox + label:before {
        top: 0;
        left: 0;
    }
    input[type=checkbox].tickbox:checked + label:before {
        background-color: #00aeef;
        border: none;
        box-shadow: inset 0 2px 0 0 #0083b3;
        background-size: 34px;
    }
</style>
