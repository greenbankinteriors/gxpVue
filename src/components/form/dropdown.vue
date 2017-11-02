<template>
    <div class="form-pseudo-select">
        <select :model="flagValue" @change="onChange($event.target.value)">
            <option disabled value='Please select'>Please select</option>
            <option v-for="(option, index) in options" :value="option.value">{{ option.text }}</option>
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
            }
        },
        data() {
            return {
                selected: '',
                flagValue: false
            }
        },
        methods: {
            onChange(value) {
                console.log(this.flagValue);
                if (this.selected !== value) {
                    this.flagValue = true;
                } else {
                    this.flagValue = false;
                }
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
        content: '\f078';
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
        padding: 7px 40px 7px 15px;
    }
</style>
