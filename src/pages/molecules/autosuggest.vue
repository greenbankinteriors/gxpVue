<template>
    <gxp-page>
        <gxp-component egClass="form center-element">
            <msm-autosuggest />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmAutosuggest from '../../components/msm/molecules/form/autosuggest'

    export default {
        components: {
            'msm-autosuggest': msmAutosuggest
        },
        data() {
            return {
                name: 'Autosuggest',
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
<style scoped>
    .autosuggest {
        margin: 10px 0;
        max-width: 380px;
    }
</style>
