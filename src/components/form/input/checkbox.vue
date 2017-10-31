<template>
    <ul :class="wrapClass">
        <li v-for="(option, index) in options">
            <input :type="elType" :class="elClass+'input-'+index" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option.value || option">
            <label :for="type+'-'+gCount+'-'+index">{{ option.value || option }}
                <sub v-if="option.isSubtext">{{ option.subtext }}</sub>
                <span v-if="option.isSubclass" :class="option.subclass"></span>
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
            elWrapClass: {
                type: String,
                default: ''
            },
            options: {
                elType: Array
            },
            type: {
                type: String,
                default: 'checkbox'
            },
            elInputClass: {
                type: String,
                default: ''
            },
            tag: {
                type: String,
                default: 'input'
            },
            isSubtext: {
                type: Boolean,
                default: false
            },
            isSubclass: {
                type: Boolean,
                default: false
            },
            elSpanClass: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                elType: this.type,
                elClass: this.elInputClass,
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
