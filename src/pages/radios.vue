<template>
    <gxp-page>
        <gxp-component elClass="form">
            <msm-radio :options='options1' />
        </gxp-component>
        <gxp-component elClass="form">
            <msm-radio elClass="form-inline-radios"
                       :options='options2' />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmRadio from '../components/form/input/radio'

    export default {

        components: {
            'msm-radio': msmRadio
        },
        data() {
            return {
                name: 'Radio button',
                molecule: 'atom',
                options1: ['Radio default'],
                options2: [{'label': 'Radio default', 'value': 'default', 'subtext': 'Sub texts'}]
            }
        },
        created() {
            bus.$on('compInfo', (data) => {
                this.componentTag = data.tag;
                this.type = data.type;
                console.log(data.type)
            })
            globalCount.counter = 0
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule});
        }

    }

</script>

<style></style>
