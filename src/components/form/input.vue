<template>
    <!--Radios and checkboxes-->
    <ul v-if="options" :class="wrapClass">
        <li v-for="(option, index) in options">
            <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-'+index" :name="elType+'-'+gCount" placeholder="Enter here" :value="option">
            <label :for="elType+'-'+gCount+'-'+index" v-if="type=='radio'||type=='checkbox'">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
    <!--Spinner-->
    <div v-else-if="elType=='spinner'" :class="wrapClass">
        <span class="spinner-trigger" v-on:click="spinCount('dec')"></span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount" placeholder="Enter here" :value="spinVal" ref="spinInput" @keyup="checkSpinVal" @blur="storeSpinVal">
        <span class="spinner-trigger" v-on:click="spinCount('inc')"></span>
        <label :for="elType+'-'+gCount" v-if="type=='radio'||type=='checkbox'">{{ elValue }}
            <sub></sub>
            <span :class="elSpanClass"></span>
        </label>
    </div>
    <!--Date and Sortcode-->
    <div v-else-if="elType=='date' || elType=='sort-code'" :class="wrapClass">
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-0'" :value="elValue" :placeholder="elType=='date'?'DD':'00'" maxlength="2">
        <span v-if="elType=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-1'" :value="elValue" :placeholder="elType=='date'?'MM':'00'" maxlength="2">
        <span v-if="elType=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-2'" :value="elValue" :placeholder="elType=='date'?'YYYY':'00'" :maxlength="elType=='date'?4:2">
    </div>
    <!--Driving licence-->
    <div v-else-if="elType=='driving-licence'" :class="wrapClass">
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-0'" :value="elValue" placeholder="SMITH" maxlength="5">
        <span>/</span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-1'" :value="elValue" placeholder="928910" maxlength="6">
        <span>/</span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-2'" :value="elValue" placeholder="AS" maxlength="2">
        <span>/</span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-3'" :value="elValue" placeholder="2GE" maxlength="3">
    </div>
    <!--Standard types-->
    <div v-else :class="wrapClass">
        <input :type="type" :class="elClass" :id="elType+'-'+gCount" placeholder="Enter here" :value="elValue">
    </div>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {

        props: {
            elType: {
                type: String,
                required: true,
                default: 'text'
            },
            options: {
                type: Array
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
                type: this.elType,
                elClass: '',
                spinVal: this.elValue,
                storedSpinVal: this.elValue,
                spinInc: this.elSpinInc,
                spinMin: this.elSpinMin,
                spinMax: this.elSpinMax,
                wrapClass: this.elWrapClass,
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
            bus.$emit('getInputType', this.elType);
            bus.$emit('sendComponentInfo', this.$options);
            globalCount.counter = globalCount.counter + 1;

            switch (this.elType) {
                case 'radio':
                    this.elClass = 'form-pseudo-radio'
                    break;
                case 'checkbox':
                    this.elClass = 'form-pseudo-checkbox'
                    break;
                case 'date':
                case 'sort-code':
                    this.type = 'tel'
                    this.elClass = 'form-num-input'
                    this.wrapClass = 'form-num-wrap'
                    break;
                case 'driving-licence':
                    this.type = 'tel'
                    this.elClass = 'form-num-input'
                    this.wrapClass = 'form-num-wrap form-driving-licence';
                    break;
            }
        },
        mounted(){
            if (this.elType=='spinner'){
                this.type = 'tel'
                this.wrapClass = 'form-spinner-wrap'
            }
        }

    }

</script>

<style></style>
