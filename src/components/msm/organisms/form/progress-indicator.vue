<template>
    <ol class="step-indicator">
        <msm-progress-step v-for="step in steps"
                           :data="step"
                           :key="step.anchor" />
    </ol>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'
    import msmProgSteps from '../../../../components/msm/molecules/form/progress-steps'

    export default {

        props: {
            id: '',
            elClass: '',
            steps: {
                type: Array,
                required: true
            }
        },
        components: {
            'msm-progress-step': msmProgSteps
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        },
        beforeMount() {
            bus.$once('getInputType', (data) => {
                this.elType = data;
            })
        },
        mixins: [ globalFuncs ]

    }

</script>

<style scoped>
    .step-indicator {
        display: flex;
        justify-content: center;
        counter-reset: li;
        margin: 20px;
        max-width: 780px;
    }
    @media all and ( min-width: 678px){
        .step-indicator {
            margin: 20px auto 0;
        }
    }
</style>
