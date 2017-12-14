<template>
    <div :class="elClass?'form-field '+elClass:'form-field'" :id="elId" :data-dependant="dependant?dependant:null">
        <slot></slot>
    </div>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'
    import msmQuestion from '../../../../components/msm/molecules/form/question.vue'
    import msmAnswer from '../../../../components/msm/molecules/form/answer.vue'

    export default {

        props: {
            id: '',
            elClass: '',
            title: '',
            question: {
                default: 'Your question goes here. It can run over multiple lines?'
            },
            dependant: ''
        },
        components: {
            'msm-question': msmQuestion,
            'msm-answer': msmAnswer
        },
        data() {
            return {
                elId: this.id,
                elType: 'password',
                test: 'something',
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
    .form-field {
        margin-left: -20px;
        width: calc(100% + 40px);
        padding: 15px 20px 15px 15px;
        border-left: 5px solid rgba(255,255,255,0);
        transition: all 0.2s ease-in-out;
        position: relative;
        box-sizing: border-box;
    }
    @media all and ( min-width: 620px ){
        .form-field {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        .form-field .question-wrap {
            padding-right: 10px;
        }
        .form-field .answer-wrap {
            padding-left: 10px;
        }
    }
</style>
