<template>
    <gxp-page>
        <gxp-component egClass="form">
            <msm-progress-indicator :steps="steps"></msm-progress-indicator>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmProgIndicator from '../../components/msm/organisms/form/progress-indicator'

    export default {

        components: {
            'msm-progress-indicator': msmProgIndicator
        },
        data() {
            return {
                name: 'Progress indicator',
                molecule: 'organism',
                activeVar: 0,
                variants: ['Default'],
                steps: [
                    {'value': 'Your business', 'anchor': '#'},
                    {'value': 'Your employees', 'anchor': '#'},
                    {'value': 'Cover options', 'anchor': '#', 'active': true},
                    {'value': 'Business questions', 'anchor': '#'},
                    {'value': 'Agreements', 'anchor': '#'},
                    {'value': 'Your quotes', 'anchor': '#'}
                ]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
