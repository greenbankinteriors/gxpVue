<template>
    <div :class="disabled ? 'form-pseudo-select disabled':'form-pseudo-select'">
        <select :disabled="disabled">
            <option selected disabled>Please select</option>
            <option v-for="(option, index) in options" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
</template>

<script>

    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

    export default {
        props: {
            options: {
                elType: Array
            },
            disabled : false
        },
        data() {
            return {

            }
        },
        created() {
            globalCount.counter = globalCount.counter + 1;
        }
    }

</script>

<style scoped>
    .form-pseudo-select {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #c6cacc;
        box-sizing: border-box;
        background-color: #ebf0f2;
        position: relative;
        margin-bottom: 10px;
        z-index: 0;
    }
    .form-pseudo-select:before {
        content: '';
        height: 50px;
        width: 1px;
        background-color: #DFE3E5;
        position: absolute;
        top: 0;
        right: 40px;
    }
    .form-pseudo-select:after {
        content: '';
        height: 24px;
        width: 24px;
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#00AEEF" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
        background-size: contain;
        position: absolute;
        top: 14px;
        right: 9px;
        transform: rotate(90deg);
        transform-origin: center;
        z-index: 0;
    }
    .form-pseudo-select select {
        -webkit-appearance: none;
        display: block;
        width: 100%;
/*        height: 100%;*/
        font: normal 700 14px/18px 'Open Sans';
        color: #566266;
        padding: 18px 41px 14px 15px;
        background-color: transparent;
        position: relative;
        z-index: 1;
    }
    .form-pseudo-select select:focus {
        box-shadow: inset 0 0 0 2px #99dff9;
    }
    .form-pseudo-select.disabled:after {
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#c6cacc" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
    }
</style>
