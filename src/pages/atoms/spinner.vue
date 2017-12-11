<template>
    <gxp-page>
        <gxp-component egClass="form center-element vertical-align">
            <msm-spinner elValue="100"
                         elSpinInc="100"
                         elSpinMin="0"
                         elSpinMax="2000" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmSpinner from '../../components/msm/atoms/form/input/spinner'

    export default {
        components: {
            'msm-spinner': msmSpinner
        },
        data() {
            return {
                name: 'Spinner',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
