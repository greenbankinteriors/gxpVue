<template>
    <div class="content-tab" data-status="closed" ref="contentTab">
        <msm-label elText="Title of something selected" />
        <msm-link elText="Add details" @click.native="editContent" />
        <div class="content-tab__question">
            <slot></slot>
            <msm-button btnClass="btn btn__primary btn__inline"
                        btnText="NEXT" />
        </div>
    </div>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'
    import msmLabel from '../../../../components/msm/atoms/form/text/label'
    import msmLink from '../../../../components/msm/atoms/form/text/link'
    import msmButton from '../../../../components/msm/atoms/form/button'

    export default {

        props: {
            id: '',
            elClass: ''
        },
        components: {
            'msm-label': msmLabel,
            'msm-link': msmLink,
            'msm-button': msmButton
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        },
        methods: {
            editContent() {
                this.$refs.contentTab.setAttribute('data-status', 'editing');
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
    .content-tab {
        margin: 5px 0;
        padding: 15px 0 0;
        border-top: solid 1px #ebf0f2;
        border-bottom: solid 2px #ebf0f2;
    }
    .content-tab > p {
        font-size: 16px;
        padding: 0 0 5px 20px;
    }
    .content-tab > a {
        padding: 0 0 15px 40px;
    }
    .content-tab > a:before {
    }
    .content-tab > a:after {
    }
    .content-tab__question {
        margin: 0 20px;
        padding-top: 15px;
        max-height: 1000px;
        border-top: solid 1px #dfe3e5;
        transition: all 0.2s ease-in-out;
    }
    .content-tab__question .form-field {
        margin-left: -20px;
        width: calc(100% + 40px);
    }
    .content-tab[data-status="closed"] .content-tab__question {
        max-height: 0;
        overflow: hidden;
        padding: 0;
        margin: 0 20px;
        border-color: transparent;
    }
    .content-tab__question > .btn {
        margin: 0 0 20px;
    }
</style>
