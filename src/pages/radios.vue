<template>
    <gxp-page>
        <ul>
            <gxp-component elWrapClass="active"
                           elClass="form">
                <msm-radio :options='options1' />
            </gxp-component>
            <gxp-component elClass="form">
                <msm-radio :options='options1' />
            </gxp-component>
            <gxp-component elClass="form">
                <msm-radio :options='options2' />
            </gxp-component>
            <gxp-component elClass="form">
                <msm-radio elWrapClass="form-pseudo-radio__logo"
                           :options='options3' />
            </gxp-component>
        </ul>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmRadio from '../components/form/input/radio'

    export default {

        components: {
            'msm-radio': msmRadio
        },
        data() {
            return {
                name: 'Radio button',
                molecule: 'atom',
                variants: ['Default', 'Default', 'Subtext', 'Logo'],
                options1: ['Radio default'],
                options2: [{'label': 'Radio default', 'value': 'default', 'subtext': 'Sub texts'}],
                options3: [{'label': 'Radio logo', 'value': 'default', 'subclass': 'logo bri'}]
            }
        },
        created() {
//            globalCount.counter = 0
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants});
        }

    }

</script>
