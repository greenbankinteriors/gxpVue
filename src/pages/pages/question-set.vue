<template>
    <gxp-page>
        <gxp-component>
            <msm-question-set>
                <msm-form-section elTitle="About you">
                    <msm-form-field>
                        <msm-question question="First name"
                                      help="Need help" />
                        <msm-answer>
                            <msm-input />
                        </msm-answer>
                    </msm-form-field>
                    <msm-form-field>
                        <msm-question question="Last name"
                                      help="Need help" />
                        <msm-answer>
                            <msm-input />
                        </msm-answer>
                    </msm-form-field>
                    <msm-form-field>
                        <msm-question question="Your modifications:"
                                      help="" />
                        <msm-answer>
                            <msm-answer-replay :cards="cards" />
                        </msm-answer>
                    </msm-form-field>
                </msm-form-section>
            </msm-question-set>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmQuestionSet from '../../components/msm/pages/form/question-set'
    import msmFormSection from '../../components/msm/organisms/form/form-section'
    import msmFormField from '../../components/msm/organisms/form/form-field'
    import msmQuestion from '../../components/msm/molecules/form/question'
    import msmAnswer from '../../components/msm/molecules/form/answer'
    import msmInput from '../../components/msm/atoms/form/input/default'
    import msmRadio from '../../components/msm/atoms/form/input/radio'
    import msmAnsReplay from '../../components/msm/molecules/form/answer-replay/default'

    export default {

        components: {
            'msm-question-set': msmQuestionSet,
            'msm-form-section': msmFormSection,
            'msm-form-field': msmFormField,
            'msm-question': msmQuestion,
            'msm-answer': msmAnswer,
            'msm-input': msmInput,
            'msm-radio': msmRadio,
            'msm-answer-replay': msmAnsReplay
        },
        data() {
            return {
                name: 'Question set',
                molecule: 'page',
                activeVar: 0,
                variants: ['Default'],
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
                cards: [{
                    title: 'Body modification',
                    desc: [
                        'Bonnet bulge',
                        'Flared wheel arches',
                        'Side striped remove'
                    ]
                }]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
