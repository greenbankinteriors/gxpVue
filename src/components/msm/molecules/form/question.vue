<template>
    <div class="question-wrap">
        <p class="label" v-if="elType=='radio'||elType=='checkbox'">{{ question }}</p>
        <label :for="elType+'-'+gCount" v-else>{{ question }}</label>
        <msm-subtext v-if="subtext" :elText="subtext" />
        <msm-help v-if="help" :elText="help" />
        <span class="form-error-wrap">
            <p>This is an error message due to an unanswered question, please fix it and continue</p>
        </span>
    </div>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'
    import msmHelp from '../../../../components/msm/molecules/form/help.vue'
    import msmSubtext from '../../../../components/msm/atoms/form/text/subtext.vue'

    export default {

        props: {
            id: '',
            elClass: '',
            title: '',
            question: {
                default: 'Your question goes here. It can run over multiple lines?'
            },
            subtext: '',
            help: '',
            dependant: ''
        },
        components: {
            'msm-help': msmHelp,
            'msm-subtext': msmSubtext
        },
        data() {
            return {
                elId: this.id,
                elType: 'text',
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
    .question-wrap {
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
    }
    .question-wrap > p,
    .question-wrap > label {
        font-size: 16px;
        line-height: 1.38;
        font-weight: 400;
        padding: 0 30px 10px 0;
        display: block;
    }
    .error-input input {
        background-color: #fde8e9;
        color: #ed1c24;
        box-shadow: 0 0 4px 2px #ed1c24;
    }
    .error-input input:focus {
        box-shadow: 0 0 3px 2px #00aeef, inset 0 2px 0 0 #c6cacc;
    }
    .form-date-wrap.error-input {
        background-color: #fde8e9;
        color: #ed1c24;
        box-shadow: 0 0 4px 2px #ed1c24;
    }
    .error-input input:placeholder-shown {
        color: #ed1c24;
    }
    .error,
    .error-input {
        border-left-color: #ed1c24;
    }
    .form-error-wrap {
        position: relative;
        padding: 0 0 0 45px;
        color: #ed1c24;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
        display: none;
    }
    .error .form-error-wrap {
        display: block;
    }
    .form-error-wrap:before {
        content: '';
        width: 35px;
        height: 30px;
        display: block;
        background: #FFF url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#ED1C24" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><line  x1="50" y1="29" x2="50" y2="47.5"/><line x1="50" y1="56.3" x2="50" y2="56.4"/><polygon points="91,70 8.9,70 49.8,3.5"/></g></svg>') 1px 1px no-repeat;
        background-size: 35px;
        position: absolute;
        top: 0;
        left: 0;
    }
    @media all and ( min-width: 620px ){
        .question-wrap > p,
        .question-wrap > label {
            padding-right: 0;
        }
    }
</style>
