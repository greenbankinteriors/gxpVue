<template>
    <gxp-page>
        <gxp-component egClass="form center-element vertical-align">
            <msm-question />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmQuestion from '../../components/msm/molecules/form/question'
    import msmRadio from '../../components/msm/atoms/form/input/radio'

    export default {

        components: {
            'msm-question': msmQuestion,
            'msm-radio': msmRadio
        },
        data() {
            return {
                name: 'Question',
                molecule: 'molecule',
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
