<template>
    <form class="form">
        <fieldset>
            <gxp-component>
                <msm-question>
                    <msm-input type="text"
                               elPlaceholder="Enter text here" />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-input type="tel"
                               elPlaceholder="Enter number here" />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-input type="email"
                               elPlaceholder="Enter email here" />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-input type="password"
                               elPlaceholder="Enter password here" />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-date />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-sort-code />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-driving-licence />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-spinner elValue="100"
                                 elSpinInc="100"
                                 elSpinMin="0"
                                 elSpinMax="2000" />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio elWrapClass="form-inline-radios"
                               :options='options4' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio :options='options1' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-checkbox :options='options1' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio :options='options2' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-checkbox :options='options2' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio elWrapClass="form-inline-radios"
                               :options='options1' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-checkbox elWrapClass="form-inline-checkbox"
                               :options='options1' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio elWrapClass="form-inline-radios"
                               :options='options2' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-checkbox elWrapClass="form-inline-checkbox"
                               :options='options2' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio elWrapClass="form-pseudo-radio__logo"
                               :options='options3' />
                </msm-question>
            </gxp-component>
            <gxp-component>
                <msm-question>
                    <msm-radio elWrapClass="form-inline-radios"
                               :options='options4' />
                </msm-question>
                <msm-dependant title="Let us know their details">
                    <msm-question dependant="addDriver"
                                  title="Let us know their details"
                                  question="What's their name?">
                        <msm-input type="text" />
                    </msm-question>
                    <msm-question dependant="addDriver"
                                  question="What is their gender?">
                        <msm-radio elWrapClass="form-inline-radios"
                                   :options='options5' />
                    </msm-question>
                    <msm-question dependant="addDriver"
                                  question="When were they born?">
                        <msm-date />
                        <msm-button btnClass="btn btn__primary"
                                    btnText="Add this driver"
                                    @click.native="saveDependant" />
                    </msm-question>
                </msm-dependant>
            </gxp-component>
        </fieldset>
    </form>
</template>

<script>

    import globalFuncs from '../mixins/global'
    import dependantFuncs from '../mixins/dependants'
    import msmButton from '../components/form/button.vue'
    import msmDependant from '../components/form/dependant.vue'
    import msmInput from '../components/form/input/default.vue'
    import msmDate from '../components/form/input/date.vue'
    import msmSortCode from '../components/form/input/sort-code.vue'
    import msmDriving from '../components/form/input/driving-licence.vue'
    import msmSpinner from '../components/form/input/spinner.vue'
    import msmRadio from '../components/form/input/radio.vue'
    import msmCheckbox from '../components/form/input/checkbox.vue'
    import msmSelect from '../components/form/dropdown.vue'
    import { globalCount } from '../main.js'

    export default {

        components: {
            'msm-button': msmButton,
            'msm-dependant': msmDependant,
            'msm-input': msmInput,
            'msm-date': msmDate,
            'msm-sort-code': msmSortCode,
            'msm-driving-licence': msmDriving,
            'msm-spinner': msmSpinner,
            'msm-radio': msmRadio,
            'msm-checkbox': msmCheckbox,
            'msm-select': msmSelect
        },
        data() {
            return {
                options1: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
                options2: [
                    {'value': 'Option 1', isSubtext: true, 'subtext': 'Sub texts'},
                    {'value': 'Option 2', isSubtext: true, 'subtext': 'Sub texts'},
                    {'value': 'Option 3', isSubtext: true, 'subtext': 'Sub texts'},
                    {'value': 'Option 4', isSubtext: true, 'subtext': 'Sub texts'},
                    {'value': 'Option 5', isSubtext: true, 'subtext': 'Sub texts'},
                    {'value': 'Option 6', isSubtext: true, 'subtext': 'Sub texts'}
                ],
                options3: [
                    {'value': 'Option 1', 'subclass': 'logo bri'},
                    {'value': 'Option 2', 'subclass': 'logo edf'},
                    {'value': 'Option 3', 'subclass': 'logo npo'},
                    {'value': 'Option 4', 'subclass': 'logo sco'},
                    {'value': 'Option 5', 'subclass': 'logo eon'},
                    {'value': 'Option 6', 'subclass': 'logo sse'}
                ],
                options4: [
                    {'value': 'Yes', 'dependant': 'addDriver'},
                    {'value': 'No'}
                ],
                options5: ['Male', 'Female'],
                options6: [
                    {'text': 'Option 1', 'value': 'opt1'},
                    {'text': 'Option 2', 'value': 'opt2'},
                    {'text': 'Option 3', 'value': 'opt3'},
                    {'text': 'Option 4', 'value': 'opt4'},
                    {'text': 'Option 5', 'value': 'opt5'},
                    {'text': 'Option 6', 'value': 'opt6'}
                ]
            }
        },
        created() {
            globalCount.counter = 0
        },
        mixins: [ globalFuncs, dependantFuncs ]

    }

</script>

<style scoped>
    section {
        padding: 20px 20px 0;
    }

    section:last-child {
        padding-bottom: 20px;
    }

    section>div {
        border: 1px solid #444;
        padding: 10px;
    }
</style>
