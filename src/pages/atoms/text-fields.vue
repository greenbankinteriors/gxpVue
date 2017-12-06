<template>
    <gxp-page>
        <gxp-component egClass="center-element vertical-align">
            <msm-input elWrapClass="form active"
                       type="text"
                       elPlaceholder="Enter text here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-input elWrapClass="form"
                       type="tel"
                       elPlaceholder="Enter number here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-input elWrapClass="form"
                       type="email"
                       elPlaceholder="Enter email here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-input elWrapClass="form"
                       type="password"
                       elPlaceholder="Enter password here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-currency elWrapClass="form"
                          elPlaceholder="Enter amount here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-textarea elWrapClass="form"
                          elPlaceholder="Enter text here" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-date elWrapClass="form" />
        </gxp-component>
        <gxp-component egClass="center-element vertical-align">
            <msm-driving-licence elWrapClass="form" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmRadio from '../../components/msm/atoms/form/input/radio'
    import msmDefault from '../../components/msm/atoms/form/input/default'
    import msmCurrency from '../../components/msm/atoms/form/input/currency'
    import msmTextarea from '../../components/msm/atoms/form/input/textarea'
    import msmDate from '../../components/msm/atoms/form/input/date'
    import msmDriving from '../../components/msm/atoms/form/input/driving-licence'

    export default {

        components: {
            'msm-radio': msmRadio,
            'msm-input': msmDefault,
            'msm-currency': msmCurrency,
            'msm-textarea': msmTextarea,
            'msm-date': msmDate,
            'msm-driving-licence': msmDriving
        },
        data() {
            return {
                name: 'Text field',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Number', 'Email', 'Password', 'Currency', 'Textarea', 'Date', 'Licence']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
