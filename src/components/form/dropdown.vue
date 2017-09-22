<template>
    <div class="form-pseudo-select ">
        <select>
            <option selected disabled>Please select</option>
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

            }
        },
        created() {
            bus.$emit('getInputType', 'select');
            bus.$emit('sendComponentInfo', this.$options);
            globalCount.counter = globalCount.counter + 1;
        }
    }

</script>

<style></style>
