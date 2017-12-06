<template>
    <gxp-page>
        <gxp-component egClass="center-element vertical-align">
            <msm-scrollable-selector />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmScrollSel from '../../components/msm/atoms/form/scrollable-selector'

    export default {
        components: {
            'msm-scrollable-selector': msmScrollSel
        },
        data() {
            return {
                name: 'Scrollable selector',
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
