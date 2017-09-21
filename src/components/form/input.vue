<template>
    <!--Dependants-->
    <ul v-if="options && dependant" :class="wrapClass">
        <li v-for="(option, index) in options">
            <input v-if="option.dependant" :type="elType" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" placeholder="Enter here" :value="option" @click="dependantTrigger(dependantId, true)">
            <input v-else :type="elType" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" placeholder="Enter here" :value="option" @click="dependantTrigger(dependantId, false)">
            <label :for="type+'-'+gCount+'-'+index" v-if="elType=='radio'||elType=='checkbox'">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
    <!--Radios and checkboxes-->
    <ul v-else-if="options" :class="wrapClass">
        <li v-for="(option, index) in options">
            <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" placeholder="Enter here" :value="option">
            <label :for="type+'-'+gCount+'-'+index" v-if="elType=='radio'||elType=='checkbox'">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
    <!--Spinner-->
    <div v-else-if="type=='spinner'" :class="wrapClass">
        <span class="spinner-trigger" v-on:click="spinCount('dec')"></span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount" placeholder="Enter here" :value="spinVal" ref="spinInput" @keyup="checkSpinVal" @blur="storeSpinVal">
        <span class="spinner-trigger" v-on:click="spinCount('inc')"></span>
        <label :for="type+'-'+gCount" v-if="elType=='radio'||elType=='checkbox'">{{ elValue }}
            <sub></sub>
            <span :class="elSpanClass"></span>
        </label>
    </div>
    <!--Date and Sortcode-->
    <div v-else-if="type=='date' || type=='sort-code'" :class="wrapClass">
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-0'" :value="elValue" :placeholder="type=='date'?'DD':'00'" maxlength="2">
        <span v-if="type=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-1'" :value="elValue" :placeholder="type=='date'?'MM':'00'" maxlength="2">
        <span v-if="type=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-2'" :value="elValue" :placeholder="type=='date'?'YYYY':'00'" :maxlength="type=='date'?4:2">
    </div>
    <!--Driving licence-->
    <div v-else-if="type=='driving-licence'" :class="wrapClass">
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-0'" :value="elValue" placeholder="SMITH" maxlength="5">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-1'" :value="elValue" placeholder="928910" maxlength="6">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-2'" :value="elValue" placeholder="AS" maxlength="2">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-3'" :value="elValue" placeholder="2GE" maxlength="3">
    </div>
    <!--Standard elTypes-->
    <div v-else :class="wrapClass">
        <input :type="elType" :class="elClass" :id="type+'-'+gCount" placeholder="Enter here" :value="elValue">
    </div>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {

        props: {
            type: {
                type: String,
                required: true,
                default: 'text'
            },
            options: {
                elType: Array
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
                elType: this.type,
                elClass: '',
                spinVal: this.elValue,
                storedSpinVal: this.elValue,
                spinInc: this.elSpinInc,
                spinMin: this.elSpinMin,
                spinMax: this.elSpinMax,
                wrapClass: this.elWrapClass,
                dependant: false,
                dependantId: '',
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
            },
            dependantTrigger(childId, show) {
                var children = document.querySelectorAll('[data-dependant='+childId+']');
                if (childId && show) {
                    children.forEach(function(c){
                        c.setAttribute('data-dependant-status', 'open')
                    });
                }
                else {
                    children.forEach(function(c){
                        c.setAttribute('data-dependant-status', 'closed')
                    });
                }
            }
        },
        created() {
            bus.$emit('getInputType', this.type);
            bus.$emit('sendComponentInfo', this.$options);
            globalCount.counter = globalCount.counter + 1;

            if (this.options) {
                for (var i=0;i<this.options.length;i++) {
                    if (this.options[i].dependant) {
                        this.dependant = true;
                        this.dependantId = this.options[i].dependant;
                        break;
                    }
                }
            }

            switch (this.type) {
                case 'radio':
                    this.elClass = 'form-pseudo-radio'
                    break;
                case 'checkbox':
                    this.elClass = 'form-pseudo-checkbox'
                    break;
                case 'date':
                case 'sort-code':
                    this.elType = 'tel'
                    this.elClass = 'form-num-input'
                    this.wrapClass = 'form-num-wrap'
                    break;
                case 'driving-licence':
                    this.elType = 'tel'
                    this.elClass = 'form-num-input'
                    this.wrapClass = 'form-num-wrap form-driving-licence';
                    break;
            }
        },
        mounted(){
            if (this.type=='spinner'){
                this.elType = 'tel'
                this.wrapClass = 'form-spinner-wrap'
            }
        }

    }

</script>

<style></style>
