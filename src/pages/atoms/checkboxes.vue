<template>
    <gxp-page>
        <gxp-component egClass="form center-element vertical-align">
            <msm-checkbox :options='options1' />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-checkbox :options='options2' />
        </gxp-component>
        <gxp-component egClass="form center-element vertical-align">
            <msm-checkbox elClass="tickbox"
                          :options='options3' />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmCheck from '../../components/msm/atoms/form/input/checkbox'

    export default {
        components: {
            'msm-checkbox': msmCheck
        },
        data() {
            return {
                name: 'Checkboxes',
                molecule: 'atom',
                activeVar: 0,
                variants: ['Default', 'Subtext', 'Tick box'],
                options1: ['Checkbox default'],
                options2: [{'label': 'Checkbox default', 'value': 'default', 'subtext': 'Sub texts'}],
                options3: ['Tickbox default']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
<style scoped>
    ul {
        max-width: 380px;
    }
</style>
