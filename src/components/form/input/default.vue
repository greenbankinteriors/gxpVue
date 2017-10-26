<template>
    <div :class="wrapClass">
        <input :type="type" :class="elClass" :id="type+'-'+gCount" :placeholder="elPlaceholder" :value="elValue">
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
                default: 'Enter here'
            },
            elValue: '',
            elWrapClass: ''
        },
        data() {
            return {
                elClass: '',
                wrapClass: this.elWrapClass,
                gCount: globalCount.counter
            }
        },
        methods: {},
        created() {
            bus.$emit('compInfo', {"tag":this.tag, "type":this.type});
            globalCount.counter = globalCount.counter + 1;
        },
        mixins: [ globalFuncs ]

    }

</script>

<style></style>
