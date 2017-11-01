<template>
    <div :class="elClass?'form-field '+elClass:'form-field'" :id="elId" :data-dependant="dependant?dependant:null">
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

    import globalFuncs from '../../mixins/global'
    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import msmHelp from '../../components/form/help.vue'

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
        },
        mixins: [ globalFuncs ]

    }

</script>

<style></style>
