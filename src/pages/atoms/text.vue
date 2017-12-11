<template>
    <gxp-page>
        <gxp-component egClass="form full-element vertical-align">
            <msm-title />
        </gxp-component>
        <gxp-component egClass="form full-element vertical-align">
            <msm-subtitle />
        </gxp-component>
        <gxp-component egClass="form full-element vertical-align">
            <msm-section-title />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-question />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-subtext />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-label />
        </gxp-component>
        <gxp-component egClass="form full-element vertical-align">
            <msm-text />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-link />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-link elClass="right__arrow" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmTitle from '../../components/msm/atoms/form/text/title'
    import msmSubTitle from '../../components/msm/atoms/form/text/subtitle'
    import msmSecTitle from '../../components/msm/atoms/form/text/section-title'
    import msmQuestion from '../../components/msm/atoms/form/text/question'
    import msmSubtext from '../../components/msm/atoms/form/text/subtext'
    import msmLabel from '../../components/msm/atoms/form/text/label'
    import msmText from '../../components/msm/atoms/form/text/default'
    import msmLink from '../../components/msm/atoms/form/text/link'

    export default {

        components: {
            'msm-title': msmTitle,
            'msm-subtitle': msmSubTitle,
            'msm-section-title': msmSecTitle,
            'msm-question': msmQuestion,
            'msm-subtext': msmSubtext,
            'msm-label': msmLabel,
            'msm-text': msmText,
            'msm-link': msmLink
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
