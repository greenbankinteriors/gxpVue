<template>
    <div :class="wrapClass">
        <span class="spinner-trigger" v-on:click="spinCount('dec')"></span>
        <input type="tel" :class="elClass" :id="type+'-'+gCount" :placeholder="elPlaceholder" :value="spinVal" ref="spinInput" @keyup="checkSpinVal" @blur="storeSpinVal">
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
            type: {
                type: String,
                default: 'text'
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

<style></style>
