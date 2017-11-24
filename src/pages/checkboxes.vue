<template>
    <gxp-page>
        <gxp-component elWrapClass="active"
                       elClass="form">
            <msm-checkbox :options='options1' />
        </gxp-component>
        <gxp-component elClass="form">
            <msm-checkbox :options='options2' />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmCheck from '../components/form/input/checkbox'

    export default {
        components: {
            'msm-checkbox': msmCheck
        },
        data() {
            return {
                name: 'Checkboxes',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Subtext'],
                options1: ['Checkbox default'],
                options2: [{'label': 'Checkbox default', 'value': 'default', 'subtext': 'Sub texts'}],
                options3: [{'label': 'Checkbox logo', 'value': 'default', 'subclass': 'logo bri'}],
                options4: ['Yes', 'No']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
