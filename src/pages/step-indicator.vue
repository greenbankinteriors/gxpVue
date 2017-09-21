<template>
    <msm-component elClass="form">
        <msm-step-indicator />
    </msm-component>
</template>

<script>

    import msmStepIndicator from '../components/form/step-indicator.vue'

    export default {

        components: {
            'msm-step-indicator': msmStepIndicator
        },
        data() {
            return {

            }
        }

    }

</script>

<style></style>
