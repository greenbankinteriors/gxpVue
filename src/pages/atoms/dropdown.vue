<template>
    <gxp-page>
        <gxp-component egClass="form center-element vertical-align">
            <msm-select :options="options1" />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-select :options="options1"
                        disabled=true />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmDropdown from '../../components/msm/atoms/form/dropdown'

    export default {

        components: {
            'msm-select': msmDropdown
        },
        data() {
            return {
                name: 'Dropdown',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Disabled'],
                options1: [
                    {'text': 'Option 1', 'value': 'opt1'},
                    {'text': 'Option 2', 'value': 'opt2'},
                    {'text': 'Option 3', 'value': 'opt3'},
                    {'text': 'Option 4', 'value': 'opt4'},
                    {'text': 'Option 5', 'value': 'opt5'},
                    {'text': 'Option 6', 'value': 'opt6'}
                ]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
<style scoped>
    .form-pseudo-select {
        max-width: 380px;
    }
</style>
