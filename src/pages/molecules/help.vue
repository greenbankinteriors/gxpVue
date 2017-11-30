<template>
    <gxp-page>
        <gxp-component>
            <msm-help />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmHelp from '../../components/msm/molecules/form/help'

    export default {

        components: {
            'msm-help': msmHelp
        },
        data() {
            return {
                name: 'Help',
                molecule: 'molecule',
                activeVar: 0,
                variants: ['Default']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
