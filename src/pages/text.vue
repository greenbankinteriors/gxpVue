<template>
    <gxp-page>
        <gxp-component elWrapClass="active form">
            <msm-title />
        </gxp-component>
        <gxp-component elWrapClass="form">
            <msm-subtitle />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmTitle from '../components/form/text/title'
    import msmSubTitle from '../components/form/text/subtitle'

    export default {

        components: {
            'msm-title': msmTitle,
            'msm-subtitle': msmSubTitle
        },
        data() {
            return {
                name: 'Text',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Title', 'Sub-title', 'Section title', 'Question', 'Sub-text', 'Label', 'Paragraph', 'Link', 'Link with arrow']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
