<template>
    <gxp-page>
        <gxp-component egClass="form center-element">
            <msm-default-card :cards="cards1" />
        </gxp-component>
        <gxp-component egClass="form center-element">
            <msm-edit-card :cards="cards2" />
        </gxp-component>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmDefaultCard from '../../components/msm/molecules/form/answer-replay/default'
    import msmEditCard from '../../components/msm/molecules/form/answer-replay/edit'

    export default {
        components: {
            'msm-default-card': msmDefaultCard,
            'msm-edit-card': msmEditCard
        },
        data() {
            return {
                name: 'Answer replay',
                molecule: 'molecule',
                activeVar: 0,
                variants: ['Default', 'Edit'],
                cards1: [{
                    title: 'Body modification',
                    desc: [
                        'Bonnet bulge',
                        'Flared wheel arches',
                        'Side striped remove'
                    ]
                }],
                cards2: [{
                    title: 'Michael Wayne',
                    desc: '47 years old',
                    sub: 'Wife/Spouse'
                }]
            }
        },
        mounted() {
            bus.$emit('pageInfo', {"name":this.name, "molecule":this.molecule, "variants": this.variants, "activeVar": this.activeVar});
        }

    }

</script>
<style scoped>
    .card {
        margin: 10px 0;
        max-width: 380px;
    }
</style>
