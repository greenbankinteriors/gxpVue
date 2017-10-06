<template>
    <form class="form">
        <fieldset>
            <msm-component>
                <msm-question>
                    <msm-input type="radio"
                               elWrapClass="form-inline-radios"
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
                        <msm-input type="radio"
                                   elWrapClass="form-inline-radios"
                                   :options='options5' />
                    </msm-question>
                    <msm-question dependant="addDriver"
                                  question="When were they born?">
                        <msm-input type="date" />
                        <msm-button btnClass="btn btn__primary"
                                    btnText="Add this driver" @click.native="saveDependant" />
                    </msm-question>
                </msm-dependant>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="text" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="tel" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="password" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="email" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="date" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="sort-code" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="driving-licence" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="spinner"
                               elValue="100"
                               elSpinInc="100"
                               elSpinMin="0"
                               elSpinMax="2000" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-select :options="options6" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="checkbox"
                               :options='options1' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="checkbox"
                               :options='options2' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="radio"
                               elWrapClass="form-inline-radios"
                               :options='options1' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="radio"
                               :options='options1' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="radio"
                               :options='options2' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input type="radio"
                               :options='options3'
                               elWrapClass="form-pseudo-radio__logo"
                               elSpanClass="logo edf" />
                </msm-question>
            </msm-component>
        </fieldset>
    </form>
</template>

<script>

    import globalFuncs from '../mixins/global'
    import dependantFuncs from '../mixins/dependants'
    import msmButton from '../components/form/button.vue'
    import msmDependant from '../components/form/dependant.vue'
    import msmInput from '../components/form/input.vue'
    import msmSelect from '../components/form/dropdown.vue'
    import { globalCount } from '../main.js'

    export default {

        components: {
            'msm-button': msmButton,
            'msm-dependant': msmDependant,
            'msm-input': msmInput,
            'msm-select': msmSelect
        },
        data() {
            return {
                options1: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'],
                options2: [
                    {'value': 'Option 1', 'subtext': 'Sub texts'},
                    {'value': 'Option 2', 'subtext': 'Sub texts'},
                    {'value': 'Option 3', 'subtext': 'Sub texts'},
                    {'value': 'Option 4', 'subtext': 'Sub texts'},
                    {'value': 'Option 5', 'subtext': 'Sub texts'},
                    {'value': 'Option 6', 'subtext': 'Sub texts'}
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
