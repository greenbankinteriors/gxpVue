<template>
    <gxp-page>
        <gxp-component egClass="form">
            <msm-notification />
        </gxp-component>
        <gxp-component egClass="form full-element">
            <msm-notification elClass="notification tick-list" />
        </gxp-component>
        <gxp-component egClass="form full-element">
            <msm-notification elClass="notification warning" />
        </gxp-component>
        <gxp-component egClass="formfull-element">
            <msm-notification elClass="notification success" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmNotification from '../../components/msm/molecules/form/notification.vue'

    export default {
        components: {
            'msm-notification': msmNotification
        },
        data() {
            return {
                name: 'Notifications',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Tick', 'Warning', 'Success']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
