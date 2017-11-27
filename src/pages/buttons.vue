<template>
    <gxp-page>
        <gxp-component elWrapClass="active">
            <msm-button btnClass="btn btn__primary" btnText="Submit"></msm-button>
        </gxp-component>
        <gxp-component>
            <msm-button btnClass="btn btn__primary right__arrow" btnText="Submit"></msm-button>
        </gxp-component>
        <gxp-component>
            <msm-button btnClass="btn btn__secondary" />
        </gxp-component>
        <gxp-component>
            <msm-button btnClass="btn btn__secondary right__arrow" btnText="Submit"></msm-button>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmBtn from '../components/form/button'

    export default {

        components: {
            'msm-button': msmBtn
        },
        data() {
            return {
                name: 'Buttons',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Primary', 'Primary with arrow', 'Secondary', 'Secondary with arrow']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
