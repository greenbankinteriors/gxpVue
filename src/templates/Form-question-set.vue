<template>
    <main class="form">
        <msm-step-indicator />
        <slot></slot>
    </main>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
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
