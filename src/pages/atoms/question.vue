<template>
    <gxp-page>
        <gxp-component>
            <msm-question question="When were they born?" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {

        components: {
        },
        data() {
            return {
                name: 'Question',
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
