<template>
    <msm-component>
        <msm-button btnClass="btn btn__primary" btnText="Test"></msm-button>
        <msm-button btnClass="btn btn__secondary" />
    </msm-component>
</template>

<script>

    import componentTemplate from '../templates/Component'
    import msmButton from '../components/form/button.vue'

    export default {

        components: {
            'msm-button': msmButton
        },
        data() {
            return {

            }
        }

    }

</script>

<style>

</style>
