<template>
    <gxp-page>
        <gxp-component elWrapClass="active">
            <msm-progress-indicator></msm-progress-indicator>
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
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
