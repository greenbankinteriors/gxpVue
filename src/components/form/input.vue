<template>
    <ul v-if="options" :class="wrapClass">
        <li v-for="(option, index) in options">
            <input :type="type" :class="elClass" :id="elType+'-'+gCount+'-'+index" :name="elType+'-'+gCount" placeholder="Enter here" :value="option">
            <label :for="elType+'-'+gCount+'-'+index" v-if="type=='radio'||type=='checkbox'">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
    <div v-else :class="wrapClass">
        <span v-if="elType=='spinner'" class="spinner-trigger spinner-trigger-less" v-on:click="spinCount('dec')"></span>
        <input :type="type" :class="elClass" :id="elType+'-'+gCount" placeholder="Enter here" :value="elType=='spinner'?spinVal:elValue">
        <span v-if="elType=='spinner'" class="spinner-trigger spinner-trigger-more" v-on:click="spinCount('inc')"></span>
        <label :for="elType+'-'+gCount" v-if="type=='radio'||type=='checkbox'">{{ elValue }}
            <sub></sub>
            <span :class="elSpanClass"></span>
        </label>
        <p class="form-input-error">This is an error message that relates directly to the input.</p>
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
            elValue: {
                type: String
            },
            elWrapClass: '',
            elSpanClass: '',
            options: {
                type: Array
            }
        },
        data() {
            return {
                type: this.elType,
                elClass: '',
                spinVal: 100,
                wrapClass: this.elWrapClass,
                gCount: globalCount.counter
            }
        },
        methods: {
            spinCount: function(move) {
                if (move=='inc') {
                    this.spinVal += 100;
                }
                else if (this.spinVal != 0) {
                    this.spinVal -= 100;
                }
            }
        },
        created() {
            bus.$emit('getInputType', this.elType);
            globalCount.counter = globalCount.counter + 1;

            switch (this.elType) {
                case 'radio':
                    this.elClass = 'form-pseudo-radio'
                    break;
                case 'checkbox':
                    this.elClass = 'form-pseudo-checkbox'
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

<style scoped>
    input + label {
        background-color: red;
    }
</style>
