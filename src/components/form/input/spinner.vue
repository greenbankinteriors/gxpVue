<template>
    <div :class="wrapClass">
        <span class="spinner-trigger" v-on:click="spinCount('dec')"></span>
        <input type="tel" :class="elClass" :id="id+'-'+gCount" :placeholder="elPlaceholder" :value="spinVal" ref="spinInput" @keyup="checkSpinVal" @blur="storeSpinVal">
        <span class="spinner-trigger" v-on:click="spinCount('inc')"></span>
    </div>
</template>

<script>

    import globalFuncs from '../../../mixins/global'
    import { bus } from '../../../main.js'
    import { globalCount } from '../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            id: {
                type: String,
                default: 'spinner'
            },
            elPlaceholder: {
                default: 'Enter number here'
            },
            elValue: '',
            elWrapClass: '',
            elSpanClass: '',
            elSpinInc: '',
            elSpinMin: '',
            elSpinMax: ''
        },
        data() {
            return {
                elClass: 'form-num-input',
                wrapClass: 'form-spinner-wrap',
                spinVal: this.elValue,
                storedSpinVal: this.elValue,
                spinInc: this.elSpinInc,
                spinMin: this.elSpinMin,
                spinMax: this.elSpinMax,
                gCount: globalCount.counter
            }
        },
        methods: {
            spinCount(move) {
                this.spinVal = this.$refs.spinInput.value;
                this.spinVal = parseInt(this.spinVal);
                this.spinInc = parseInt(this.spinInc);
                this.spinMin = parseInt(this.spinMin);
                this.spinMax = parseInt(this.spinMax);

                if (move=='inc' && this.spinVal < this.spinMax) {
                    this.spinVal += this.spinInc;
                }
                else if (move=='dec' && this.spinVal > this.spinMin) {
                    this.spinVal -= this.spinInc;
                }
                this.setSpinState();
            },
            checkSpinVal() {
                this.spinVal = this.$refs.spinInput.value;
            },
            storeSpinVal() {
                if (this.$refs.spinInput.value > this.spinMax) {
                    this.spinVal = this.spinMax;
                    this.wrapClass = "form-spinner-wrap max";
                }
                else if (this.$refs.spinInput.value < this.spinMin) {
                    this.spinVal = this.spinMin;
                    this.wrapClass = "form-spinner-wrap min";
                }
                else {
                    this.spinVal = Math.ceil(this.$refs.spinInput.value/this.spinInc)*100;
                }
                this.setSpinState();
                this.storedSpinVal = this.spinVal;
            },
            setSpinState() {
                if (this.spinVal == this.spinMax) {
                    this.wrapClass = "form-spinner-wrap max";
                }
                else if(this.spinVal == this.spinMin) {
                    this.wrapClass = "form-spinner-wrap min";
                }
                else {
                    this.wrapClass = "form-spinner-wrap";
                }
            }
        },
        created() {
            bus.$emit('compInfo', {"tag":this.tag, "type":this.type});
            globalCount.counter = globalCount.counter + 1;
        },
        mixins: [ globalFuncs ]

    }

</script>

<style scoped>
    .form-spinner-wrap {
        display: flex;
        position: relative;
        box-sizing: border-box;
        z-index: 0;
        -webkit-user-select: none;
        user-select: none;
    }
    .form-spinner-wrap input {
        padding: 13px 10px 13px;
        margin: 0 auto;
        width: calc( 100% - 94px );
        text-align: center;
        font: bold 18px 'Open Sans';
        border-radius: 5px;
        box-shadow: inset 0 2px 0 0 #c6cacc;
        box-sizing: border-box;
        background-color: #ebf0f2;
        display: block;
        color: #2B3133;
        transition: all 0.2s ease-in-out;
        margin-bottom: 0;
    }
    .form-spinner-wrap input:hover,
    .form-spinner-wrap input:focus {
        box-shadow: inset 0 0 4px 2px #00AEEF;
    }
    ::-ms-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
    ::-webkit-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
    .spinner-trigger {
        width: 34px;
        height: 34px;
        box-sizing: border-box;
        border: 2px solid #00AEEF;
        background-color: #FFF;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 7px;
        left: 0;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
    input + .spinner-trigger {
        left: initial;
        right: 0;
    }
    .spinner-trigger:before,
    input + .spinner-trigger:after {
        width: 14px;
        height: 3px;
        border-radius: 3px;
        display: block;
        background-color: #00AEEF;
        content: '';
        position: absolute;
        top: 14px;
        left: 8px;
        transform-origin: center;
        transition: all 0.2s ease-in-out;
    }
    input + .spinner-trigger:after {
        transform: rotate(90deg)
    }
    .spinner-trigger:hover {
        background-color: #00AEEF;
    }
    .spinner-trigger:hover:before,
    input + .spinner-trigger:hover:after {
        background-color: #FFF;
    }
    .form-spinner-wrap.min .spinner-trigger:first-of-type,
    .form-spinner-wrap.max .spinner-trigger:last-of-type {
        background-color: #ebf0f2;
        border-color: #c6cacc;
    }
    .form-spinner-wrap.min .spinner-trigger:first-of-type:before,
    .form-spinner-wrap.max .spinner-trigger:last-of-type:before,
    .form-spinner-wrap.max .spinner-trigger:last-of-type:after {
        background-color: #c6cacc;
    }
</style>
