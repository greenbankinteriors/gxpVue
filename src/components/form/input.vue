<template>
    <div class="form-pseudo-radio__logo">
        <input :type="elType" :class="elClass" :id="elType+'-'+gCount" placeholder="Enter here" :value="elValue">
        <label :for="elType+'-'+gCount" v-if="elType=='radio'||elType=='checkbox'">{{ elValue }}
            <sub></sub>
            <span class="logo edf"></span>
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
                default: 'text'
            },
            elValue: {
                default: 'Default value'
            }
        },
        data() {
            return {
                elClass: '',
                gCount: globalCount.counter
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
                case 'spinner':
                    this.elClass = 'spinner'
                    break;
            }

        }

    }

</script>

<style scoped>
    input + label {
        background-color: red;
    }
</style>
