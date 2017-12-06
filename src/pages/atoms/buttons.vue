<template>
    <gxp-page>
        <gxp-component egClass="center-element vertical-align">
            <msm-button btnClass="btn btn__primary" btnText="Submit"></msm-button>
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-button btnClass="btn btn__primary right__arrow" btnText="Submit"></msm-button>
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-button btnClass="btn btn__secondary" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-button btnClass="btn btn__secondary right__arrow" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-link />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-link elClass="right__arrow" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmBtn from '../../components/msm/atoms/form/button'
    import msmLink from '../../components/msm/atoms/form/text/link'

    export default {

        components: {
            'msm-button': msmBtn,
            'msm-link': msmLink
        },
        data() {
            return {
                name: 'Buttons',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Primary', 'Primary with arrow', 'Secondary', 'Secondary with arrow', 'Tertiary', 'Tertiary with arrow']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
