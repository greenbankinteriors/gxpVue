<template>
    <div :class="elClass?'form-field '+elClass:'form-field'" :id="elId" :data-dependant="dependant?dependant:null" :data-dependant-status="dependant?'closed':null">
        <h1>{{ title }}</h1>
        <div class="form-question__wrap">
            <p class="label" v-if="elType=='radio'||elType=='checkbox'">{{ question }}</p>
            <label :for="elType=='date'||elType=='sort-code'||elType=='driving-licence'?elType+'-'+gCount+'-0':elType+'-'+gCount" v-else>{{ question }}</label>
            <msm-help></msm-help>
            <div class="form-error-wrap">
                <p>This is an error message due to an unanswered question, please fix it and continue</p>
            </div>
        </div>
        <div class="form-answer__wrap">
            <slot></slot>
            <p class="form-input-error">This is an error message that relates directly to the input.</p>
        </div>
    </div>
</template>

<script>

    import { bus } from '../main.js'
    import { globalCount } from '../main.js'
    import msmHelp from '../components/form/help.vue'

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
            'msm-help': msmHelp
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
        }

    }

</script>

<style scoped>
    /*Dependants*/
    .form [data-dependant] {
        overflow: hidden;
        border-left-color: #00AEEF;
        padding: 0 20px;
    }
    .form [data-dependant] h1 {
        font-size: 24px;
        font-weight: 300;
        color: #2b3133;
        margin-bottom: 10px;
    }
    .form [data-dependant-status='closed'] {
        padding: 0 20px 0 15px;
        max-height: 0;
    }
    .form [data-dependant-status='open'],
    .form [data-dependant-status='edit'] {
        padding: 15px 20px 15px 15px;
        max-height: 1500px;
    }
    .form [data-dependant] + [data-dependant] {
        padding-top: 0;
    }
    @media (min-width: 420px) {
        .form [data-dependant] {
            margin-left: 20px;
        }
    }
    @media (min-width: 620px) {
        .form [data-dependant] {
            border-left-color: #ebf0f2;
        }
        .form [data-dependant] h1 {
            display: none;
        }
        .form [data-dependant] > div:nth-of-type(1) {
            width: calc(50% - 5px);
        }
        .form [data-dependant] > div:nth-of-type(2) {
            width: calc(50% + 20px);
        }
    }
</style>
