<template>
    <form class="form">
        <fieldset>
            <msm-component>
                <msm-question>
                    <msm-input elType="text" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="tel" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="password" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="email" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="date" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="sort-code" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="driving-licence" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="spinner"
                               elValue="100"
                               elSpinInc="100"
                               elSpinMin="0"
                               elSpinMax="2000" />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="checkbox"
                               :options='options1' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="checkbox"
                               :options='options2' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="radio"
                               :options='options1' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="radio"
                               :options='options2' />
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="radio"
                               :options='options3'
                               elWrapClass="form-pseudo-radio__logo"
                               elSpanClass="logo edf" />
                </msm-question>
            </msm-component>
        </fieldset>
    </form>
</template>

<script>
    import msmInput from '../components/form/input.vue'
    import { globalCount } from '../main.js'

    export default {

        components: {
            'msm-input': msmInput
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
                ]
            }
        },
        created() {
            globalCount.counter = 0
        }

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
