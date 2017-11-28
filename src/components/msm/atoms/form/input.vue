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
    <!--Radios and Checkboxes-->
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
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-0'" :value="elValue" :placeholder="type=='date'?'DD':'00'" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span v-if="type=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-1'" :value="elValue" :placeholder="type=='date'?'MM':'00'" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span v-if="type=='sort-code'">-</span>
        <span v-else>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-2'" :value="elValue" :placeholder="type=='date'?'YYYY':'00'" :maxlength="type=='date'?4:2" @keyup="numSnap" @blur="numBlur">
    </div>
    <!--Driving licence-->
    <div v-else-if="type=='driving-licence'" :class="wrapClass">
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-0'" :value="elValue" placeholder="SMITH" maxlength="5" @keyup="numSnap">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-1'" :value="elValue" placeholder="928910" maxlength="6" @keyup="numSnap">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-2'" :value="elValue" placeholder="AS" maxlength="2" @keyup="numSnap">
        <span>/</span>
        <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-3'" :value="elValue" placeholder="2GE" maxlength="3" @keyup="numSnap">
    </div>
    <!--Default-->
    <div v-else :class="wrapClass">
        <input :type="elType" :class="elClass" :id="type+'-'+gCount" placeholder="Enter here" :value="elValue">
    </div>
</template>

<script>

    import globalFuncs from '../../mixins/global'
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
            numSnap(evt) {
                var el = evt.currentTarget,
                    valLength = el.value.length,
                    max = parseInt(el.getAttribute('maxlength')),
                    wrap = this.$el;

                if (evt.keyCode == 8 || evt.keyCode == 46) {
                    if (valLength === 0) {
                        var previous = el;
                        while (previous = previous.previousElementSibling) {
                            if (previous == null)
                                break;
                            if (previous.tagName.toLowerCase() === "input") {
                                previous.focus();
                                break;
                            }
                        }
                    }
                }
                else if (evt.keyCode < 37 || evt.keyCode > 40) {
                    if (valLength >= max) {
                        var next = el;
                        while (next = next.nextElementSibling) {
                            if (next == null)
                                break;
                            if (next.tagName.toLowerCase() === "input") {
                                next.focus();
                                break;
                            }
                        }
                    }

                }
            },
            numBlur(evt) {
                var el = evt.currentTarget,
                    max = parseInt(el.getAttribute('maxlength'));

                if (max == 2) {
                    if (el.value.length == 1) {
                        var val = el.value;
                        el.value = '0' + val;
                    }
                }
                else if (max == 4) {
                    if (el.value.length == 2) {
                        var year = el.value;
                        if (year >= 0 && year <= 18) {
                            el.value = '20' + year;
                        } else {
                            el.value = '19' + year;
                        }
                    }
                }
            },
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
                    for (var i=0;i<children.length;i++) {
                        var c = children[i],
                            wrap = this.getParent(c, 'dependant__answers');
                        wrap.setAttribute('data-dependant-status', 'open')
                    }
                }
                else {
                    for (var i=0;i<children.length;i++) {
                        var c = children[i],
                            wrap = this.getParent(c, 'dependant__answers');
                        wrap.setAttribute('data-dependant-status', 'closed');
                        this.clearValues(c.querySelectorAll('input'))
                    }
                }
            },
            clearValues(inputs) {
                inputs.forEach(function (i) {
                    switch (i.type) {
                        case 'radio':
                        case 'checkbox':
                            i.checked = false;
                            break;
                        case 'text':
                        case 'tel':
                        case 'email':
                        case 'password':
                            i.value = '';
                            break;
                    }
                });
            }
        },
        created() {
//            bus.$emit('getInputType', this.type);
//            bus.$emit('sendComponentInfo', this.$options);
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
        },
        mixins: [ globalFuncs ]

    }

</script>

<style></style>
