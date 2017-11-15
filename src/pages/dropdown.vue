<template>
    <gxp-page>
        <gxp-component elWrapClass="active">
            <msm-select :options="options1" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmDropdown from '../components/form/dropdown'

    export default {

        components: {
            'msm-select': msmDropdown
        },
        data() {
            return {
                name: 'Dropdown',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default'],
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
