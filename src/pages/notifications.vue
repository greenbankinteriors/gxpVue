<template>
    <form class="form">
        <fieldset>
            <msm-component>
                <msm-notification />
            </msm-component>
        </fieldset>
    </form>
</template>

<script>

    import msmNotification from '../components/form/notification.vue'

    export default {

        components: {
            'msm-notification': msmNotification
        },
        data() {
            return {

            }
        }

    }

</script>

<style>

</style>
