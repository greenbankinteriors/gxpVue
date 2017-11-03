<template>
    <gxp-page>
        <gxp-component elWrapClass="active"
                       elClass="form">
            <msm-radio :options='options1' />
        </gxp-component>
        <gxp-component elClass="form">
            <msm-radio :options='options2' />
        </gxp-component>
        <gxp-component elClass="form">
            <msm-radio elWrapClass="form-pseudo-radio__logo"
                       :options='options3' />
        </gxp-component>
        <gxp-component>
            <msm-input type="password"
                       elPlaceholder="Enter password here" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmRadio from '../components/form/input/radio'
    import msmDefault from '../components/form/input/default'

    export default {

        components: {
            'msm-radio': msmRadio,
            'msm-input': msmDefault
        },
        data() {
            return {
                name: 'Radio button',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Subtext', 'Logo', 'tel'],
                options1: ['Radio default'],
                options2: [{'label': 'Radio default', 'value': 'default', 'subtext': 'Sub texts'}],
                options3: [{'label': 'Radio logo', 'value': 'default', 'subclass': 'logo bri'}]
            }
        },
        created() {},
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
