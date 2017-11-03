<template>
    <div class="form-pseudo-select">
        <select :required="true">
            <option disabled value=''>Please select</option>
            <option v-for="(option, index) in options" :selected="isSelectedFlag" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
</template>

<script>
    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {
        props: {
            options: {
                elType: Array
            },
            isSelectedFlag: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {

            }
        },
        created() {
            bus.$emit('getInputType', 'select');
            bus.$emit('sendComponentInfo', this.$options);
            globalCount.counter = globalCount.counter + 1;
        }
    }
</script>

<style>
    .form-pseudo-select {
        display: inline-block;
        position: relative;
    }

    .form-pseudo-select:after {
        content: url('../../assets/msm/images/icons/cyan.svg');
        position: absolute;
        color: #0ebeff;
        top: 1px;
        right: 15px;
        pointer-events: none;
    }

    .form-pseudo-select select {
        box-sizing: border-box;
        appearance: none;
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 0 2px 0 0 #c6cacc;
        font-size: 18px;
        padding: 7px 40px 7px 15px;
    }
</style>
