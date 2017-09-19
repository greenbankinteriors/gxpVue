<template>
    <div class="form-field">
        <div>
            <p class="label" v-if="elType=='radio'||elType=='checkbox'">Your question goes here. It can run over multiple lines?</p>
            <label :for="elType+'-'+gCount" v-else>Your question goes here. It can run over multiple lines?</label>

            <msm-help></msm-help>

            <div class="form-error-wrap">
                <p>This is an error message due to an unanswered question, please fix it and continue</p>
            </div>

        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import msmHelp from '../components/form/help.vue'
    import { bus } from '../main.js'
    import { globalCount } from '../main.js'

    export default {

        components: {
            'msm-help': msmHelp
        },
        data() {
            return {
                elType: 'password',
                test: 'something',
                gCount: globalCount.counter
            }
        },
        beforeMount(){
            bus.$once('getInputType', (data) => {
                this.elType = data;
            })
        }

    }

</script>

<style>

</style>
