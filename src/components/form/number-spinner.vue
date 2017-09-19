<template>
    <div class="form-spinner-wrap">
        <span class="spinner-trigger spinner-trigger-less"></span>
        <input type="tel" class="spinner" :id="elType+'-'+gCount" value="100" step="10" min="0" max="2000">
        <span class="spinner-trigger spinner-trigger-more"></span>
    </div>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {

        props: {
            elType: {
                default: 'spinner'
            },
            elValue: {
                default: 'Default value'
            }
        },
        data() {
            return {
                elClass: 'default',
                gCount: globalCount.counter
            }
        },
        created() {
            bus.$emit('getInputType', this.elType);
            globalCount.counter = globalCount.counter + 1;

        }

    }

</script>

<style>

</style>
