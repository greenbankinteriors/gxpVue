<template>
    <gxp-page>
        <gxp-component egClass="center-element vertical-align">
            <msm-progress-step :data="step1" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-progress-step :data="step2" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-progress-step :data="step3" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmProgStep from '../../components/msm/molecules/form/progress-steps'

    export default {

        components: {
            'msm-progress-step': msmProgStep
        },
        data() {
            return {
                name: 'Progress step',
                molecule: 'molecule',
                activeVar: 0,
                variants: ['Complete', 'In progress', 'To do'],
                step1: {'value': 'Your business', 'anchor': '#'},
                step2: {'value': 'Your business', 'anchor': '#', 'active': true},
                step3: {'value': 'Your business', 'anchor': '#', 'inactive': true}
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
