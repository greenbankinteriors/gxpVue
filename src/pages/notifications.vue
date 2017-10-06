<template>
    <form class="form">
        <fieldset>
            <msm-component>
                <msm-notification />
            </msm-component>
            <msm-component>
                <msm-notification elClass="notification tick-list" />
            </msm-component>
            <msm-component>
                <msm-notification elClass="notification warning" />
            </msm-component>
            <msm-component>
                <msm-notification elClass="notification success" />
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
