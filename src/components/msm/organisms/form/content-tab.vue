<template>
    <div class="content-wrap">
        <div class="content-tab" :data-status="this.tabStatus" :data-complete="this.tabStatus" ref="contentTab">
            <msm-label elText="Title of something selected" />
            <msm-link elClass="content-link" elText="" @click.native="editContent" />
            <div class="content-tab__question">
                <slot></slot>
                <msm-button btnClass="btn btn__primary btn__inline content-submit"
                            btnText="NEXT"
                            @click.native="completeContent" />
            </div>
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
                tabStatus: 'closed',
                gCount: globalCount.counter
            }
        },
        methods: {
            editContent() {
                this.tabStatus = this.tabStatus == 'closed' ? 'editing' : 'closed';
            },
            completeContent() {
                this.tabStatus = 'closed';
                this.$refs.contentTab.setAttribute('data-completed', true);
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
    .content-wrap {
        margin: 0 0 10px -20px;
        width: calc(100% + 40px);
        border-top: solid 1px #ebf0f2;
        background-color: #fff;
        border-bottom: solid 2px #ebf0f2;
    }
    .content-tab {
        margin: 0 auto;
        position: relative;
        padding: 15px 0 0;
        max-width: 420px;
    }
    .content-tab:before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 18px;
        right: 20px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 24px;
        background: #c6cacc url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#fff" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
    }
    .content-tab[data-completed='true']:before {
        background-color: #48a415;
    }
    .content-tab[data-status="editing"]:before {
        display: none;
    }
    .content-tab > p {
        font-size: 16px;
        padding: 0 80px 5px 20px;
        box-sizing: border-box;
    }
    .content-tab > .content-link {
        padding: 0 0 15px 20px;
    }
    .content-tab > .content-link:before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        position: relative;
        margin-right: 7px;
        background-repeat: no-repeat;
        background-position: center center;
        transform: rotate(45deg);
        top: 5px;
        background-size: 24px;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><line x1="33.5" y1="33.5" x2="66.5" y2="66.5"></line><line x1="66.5" y1="33.5" x2="33.5" y2="66.5"></line></g></svg>');
    }
    .content-tab > .content-link:after {
        content: 'Add details'
    }
    .content-tab__question,
    .content-tab[data-completed='true'] .content-tab__question {
        max-height: 0;
        overflow: hidden;
        padding: 0;
        margin: 0 20px;
        border-color: transparent;
        transition: all 0.2s ease-in-out;
    }
    .content-tab[data-completed='true'] > .content-link:before {
        transform: rotate(0deg);
        top: 4px;
        background-size: 20px;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="5" d="M84.4,21.6l-6-6c-1.6-1.5-4-1.5-5.5,0l-42,42l-6.4,17.9L42.5,69l42-42C85.9,25.6,85.9,23.2,84.4,21.6z"/><line stroke-width="3" x1="31" y1="57.5" x2="42.5" y2="69"/><line stroke-width="2" x1="67.1" y1="21.4" x2="78.6" y2="32.9"/><line stroke-width="2" x1="64.1" y1="24.4" x2="75.6" y2="35.9"/><polyline stroke-width="5" points="79.2,53.2 79.2,85.6 14.4,85.6 14.4,20.8 46.8,20.8"/></g></svg>');
    }
    .content-tab[data-completed='true'] > .content-link:after {
        content: 'Edit details'
    }
    .content-tab[data-status="editing"] .content-tab__question {
        margin: 0 20px;
        padding-top: 15px;
        max-height: 1000px;
        border-top: solid 1px #dfe3e5;
    }
    .content-tab[data-status="editing"] > p {
        padding-bottom: 15px;
    }
    .content-tab[data-status="editing"] > .content-link {
        position: absolute;
        top: 15px;
        right: 20px;
    }
    .content-tab[data-status="editing"] > .content-link:before {
        display: none;
    }
    .content-tab[data-status="editing"] > .content-link:after {
        content: 'Cancel';
    }
    .content-tab__question .form-field {
        margin-left: -20px;
        width: calc(100% + 40px);
    }
    .content-tab__question > .content-submit {
        width: 100%;
        margin: 0 0 20px;
    }
    @media all and ( min-width: 620px){
        .content-tab {
            max-width: 820px;
        }
    }
    @media all and ( min-width: 620px){
        .content-tab__question > .content-submit {
            width: auto;
            left: calc(50% + 10px);
        }
    }
    @media all and ( min-width: 782px){
        .content-wrap {
            border: solid 1px #ebf0f2;
            border-bottom: solid 2px #ebf0f2;
        }
    }
</style>
