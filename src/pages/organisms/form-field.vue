<template>
    <gxp-page>
        <gxp-component elWrapClass="active">
            <msm-question />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmQuestion from '../../components/msm/organisms/form/form-field'

    export default {

        components: {
            'msm-question': msmQuestion
        },
        data() {
            return {
                name: 'Form field',
                molecule: 'organism',
                activeVar: 0,
                variants: ['Default'],
                options1: [
                    {'text': 'Option 1', 'value': 'opt1'},
                    {'text': 'Option 2', 'value': 'opt2'},
                    {'text': 'Option 3', 'value': 'opt3'},
                    {'text': 'Option 4', 'value': 'opt4'},
                    {'text': 'Option 5', 'value': 'opt5'},
                    {'text': 'Option 6', 'value': 'opt6'}
                ]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
