<template>
    <gxp-page>
        <gxp-component egClass="form center-element vertical-align">
            <msm-answer>
                <msm-radio elWrapClass="form-inline-radios"
                           :options="options1" />
            </msm-answer>
        </gxp-component>
        <gxp-component egClass="form center-element">
            <msm-answer>
                <msm-radio :options="options2" />
            </msm-answer>
        </gxp-component>
        <gxp-component egClass="form center-element">
            <msm-answer>
                <msm-radio :options="options3" />
            </msm-answer>
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-answer>
                <msm-input type="text"
                           elPlaceholder="Enter text here" />
            </msm-answer>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmAnswer from '../../components/msm/molecules/form/answer'
    import msmRadio from '../../components/msm/atoms/form/input/radio'
    import msmDefault from '../../components/msm/atoms/form/input/default'

    export default {

        components: {
            'msm-answer': msmAnswer,
            'msm-radio': msmRadio,
            'msm-input': msmDefault,
        },
        data() {
            return {
                name: 'Answer',
                molecule: 'molecule',
                activeVar: 0,
                variants: ['Inline', 'Stacked', 'Subtext', 'Other'],
                options1: ['Yes', 'No'],
                options2: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
                options3: [{'label': 'Option 1', 'value': 'one', 'subtext': 'Sub texts'},{'label': 'Option 2', 'value': 'two', 'subtext': 'Sub texts'},{'label': 'Option 3', 'value': 'three', 'subtext': 'Sub texts'}]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
