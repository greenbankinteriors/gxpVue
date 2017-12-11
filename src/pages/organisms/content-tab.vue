<template>
    <gxp-page>
        <gxp-component egClass="form">
            <msm-content-tab>
                <msm-form-field>
                    <msm-question question="Are you awaiting a hospital referral or investigations for this condition?"
                                  subtext="If you need to, you can enter more than one condition. A list of possible options will be shown as you type."
                                  help="Need help" />
                    <msm-answer>
                        <msm-radio elWrapClass="form-inline-radios"
                                   :options="options" />
                    </msm-answer>
                </msm-form-field>
                <msm-form-field>
                    <msm-question question="Do you want to tell us anything else about your raised blood pressure?"
                                  subtext="" />
                    <msm-answer>
                        <msm-textarea elPlaceholder="Please describe this condition" />
                    </msm-answer>
                </msm-form-field>
            </msm-content-tab>
            <msm-content-tab>
                <msm-form-field>
                    <msm-question question="Are you awaiting a hospital referral or investigations for this condition?"
                                  subtext="If you need to, you can enter more than one condition. A list of possible options will be shown as you type."
                                  help="Need help" />
                    <msm-answer>
                        <msm-radio elWrapClass="form-inline-radios"
                                   :options="options" />
                    </msm-answer>
                </msm-form-field>
                <msm-form-field>
                    <msm-question question="Do you want to tell us anything else about your raised blood pressure?"
                                  subtext="" />
                    <msm-answer>
                        <msm-textarea elPlaceholder="Please describe this condition" />
                    </msm-answer>
                </msm-form-field>
            </msm-content-tab>
            <msm-content-tab>
                <msm-form-field>
                    <msm-question question="Are you awaiting a hospital referral or investigations for this condition?"
                                  subtext="If you need to, you can enter more than one condition. A list of possible options will be shown as you type."
                                  help="Need help" />
                    <msm-answer>
                        <msm-radio elWrapClass="form-inline-radios"
                                   :options="options" />
                    </msm-answer>
                </msm-form-field>
                <msm-form-field>
                    <msm-question question="Do you want to tell us anything else about your raised blood pressure?"
                                  subtext="" />
                    <msm-answer>
                        <msm-textarea elPlaceholder="Please describe this condition" />
                    </msm-answer>
                </msm-form-field>
            </msm-content-tab>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmContentTab from '../../components/msm/organisms/form/content-tab'
    import msmFormField from '../../components/msm/organisms/form/form-field'
    import msmQuestion from '../../components/msm/molecules/form/question'
    import msmAnswer from '../../components/msm/molecules/form/answer'
    import msmRadio from '../../components/msm/atoms/form/input/radio'
    import msmTextarea from '../../components/msm/atoms/form/input/textarea'
    import msmButton from '../../components/msm/atoms/form/button'

    export default {

        components: {
            'msm-content-tab': msmContentTab,
            'msm-form-field': msmFormField,
            'msm-question': msmQuestion,
            'msm-answer': msmAnswer,
            'msm-radio': msmRadio,
            'msm-textarea': msmTextarea,
            'msm-button': msmButton
        },
        data() {
            return {
                name: 'Content tab',
                molecule: 'organism',
                activeVar: 0,
                variants: ['Default'],
                options: ['Yes', 'No']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
