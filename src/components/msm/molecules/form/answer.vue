<template>
    <div class="answer-wrap">
        <slot></slot>
        <p class="form-input-error">This is an error message that relates directly to the input.</p>
    </div>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'

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
        components: {},
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
    .form-input-error {
        color: #ed1c24;
        font-size: 14px;
        font-weight: 600;
        margin-top: 10px;
        display: none;
    }
    .error-input .form-input-error {
        display: block;
    }
</style>
