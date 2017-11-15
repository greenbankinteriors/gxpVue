<template>
    <gxp-page>
        <gxp-component>
            <msm-input elWrapClass="form active"
                       type="text"
                       elPlaceholder="Enter text here" />
        </gxp-component>
        <gxp-component>
            <msm-input elWrapClass="form"
                       type="tel"
                       elPlaceholder="Enter number here" />
        </gxp-component>
        <gxp-component>
            <msm-input elWrapClass="form"
                       type="email"
                       elPlaceholder="Enter email here" />
        </gxp-component>
        <gxp-component>
            <msm-input elWrapClass="form"
                       type="password"
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
                name: 'Text field',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Tel', 'Email', 'Password']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
