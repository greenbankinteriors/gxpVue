<template>
    <ul :class="wrapClass">
        <li v-for="(option, index) in options">
            <input :type="elType" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option">
            <label :for="type+'-'+gCount+'-'+index">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
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
                default: 'checkbox'
            },
            options: {
                elType: Array
            },
            elValue: '',
            elWrapClass: '',
            elSpanClass: ''
        },
        data() {
            return {
                elType: this.type,
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
