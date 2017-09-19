<template>
    <form class="form">
        <fieldset>
            <msm-component>
                <msm-question>
                    <msm-input elType="text"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="tel"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="password"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="email"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="checkbox"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-input elType="radio"></msm-input>
                </msm-question>
            </msm-component>
            <msm-component>
                <msm-question>
                    <msm-spinner></msm-spinner>
                </msm-question>
            </msm-component>
        </fieldset>
    </form>
</template>

<script>
    import msmInput from '../components/form/input.vue'
    import msmSpinner from '../components/form/number-spinner.vue'
    import { globalCount } from '../main.js'

    export default {

        components: {
            'msm-input': msmInput,
            'msm-spinner': msmSpinner
        },
        data() {
            return {
                elType: 'none'
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
