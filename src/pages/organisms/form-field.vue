<template>
    <gxp-page>
        <gxp-component elWrapClass="active">
            <msm-form-field>
                <msm-question subtext="If you need to, you can enter more than one condition. A list of possible options will be shown as you type."
                              help="Need help" />
                <msm-answer>
                    <msm-radio :options="options" />
                </msm-answer>
            </msm-form-field>
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmFormField from '../../components/msm/organisms/form/form-field'
    import msmQuestion from '../../components/msm/molecules/form/question'
    import msmAnswer from '../../components/msm/molecules/form/answer'
    import msmRadio from '../../components/msm/atoms/form/input/radio'

    export default {

        components: {
            'msm-form-field': msmFormField,
            'msm-question': msmQuestion,
            'msm-answer': msmAnswer,
            'msm-radio': msmRadio
        },
        data() {
            return {
                name: 'Form field',
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
