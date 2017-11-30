<template>
    <ol class="step-indicator">
        <li v-for="step in steps" :class="step.active?'active':''">
            <a :href="step.anchor" v-if="step.active">
                <b>{{ step.value }}</b>
            </a>
            <a :href="step.anchor" v-else>
                <b>{{ step.value }}</b>
            </a>
        </li>
    </ol>
</template>

<script>

    import globalFuncs from '../../../../mixins/global'
    import { bus } from '../../../../main.js'
    import { globalCount } from '../../../../main.js'
    import msmQuestion from '../../../../components/msm/molecules/form/question.vue'

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
            'msm-question': msmQuestion
        },
        data() {
            return {
                steps: [
                    {'value': 'Your business', 'anchor': '#'},
                    {'value': 'Your employees', 'anchor': '#'},
                    {'value': 'Cover options', 'anchor': '#', 'active': true},
                    {'value': 'Business questions', 'anchor': '#'},
                    {'value': 'Agreements', 'anchor': '#'},
                    {'value': 'Your quotes', 'anchor': '#'}],
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
    }
    .step-indicator li {
        position: relative;
        text-align: center;
        font-weight: 700;
        color: #C6CACC;
        width: 100%;
        box-sizing: border-box;
        padding: 13px;
        z-index: 1;
    }
    .step-indicator li:before {
        content: counter(li);
        counter-increment: li;
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -13px;
        border-radius: 50%;
        background-color: #C6CACC;
        font: 700 14px/26px 'Open Sans';
        text-align: center;
        z-index: 1;
        color: #FFF;
    }
    .step-indicator li:after {
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #00AEEF;
        content: '';
        left: 50%;
        top: 13px;
        z-index: -1;
    }
    .step-indicator li:hover:after {
        background-color: #0083B3;
    }
    .step-indicator li:hover a {
        color: #0083B3;
    }
    .step-indicator li > a:before {
        content: '';
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -13px;
        border-radius: 50%;
        background: #00aeef url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline stroke="#FFF" fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" points="70.5,35.5 41.5,64.5 29.5,52.5"/></svg>') center center no-repeat;
        background-size: 26px;
        font: 700 14px/26px 'Open Sans';
        text-align: center;
        z-index: 1;
        color: #FFF;
    }
    .step-indicator li:hover > a:before {
        background-color: #0083B3;
    }
    .step-indicator b {
        display: none;
    }
    .step-indicator .active ~ li:after,
    .step-indicator .active ~ li:hover:after {
        background-color: #C6CACC;
    }
    .step-indicator .active:after,
    .step-indicator .active:hover:after {
        background-color: #C6CACC;
    }
    .step-indicator .active {
        color: #562873;
    }
    .step-indicator .active:before {
        background-color: #562873;
        border: 1px solid #FFF;
        width: 22px;
        height: 22px;
        line-height: 22px;
        margin-left: -11px;
        box-shadow: 0 0 0 1px #562873;
        top: 2px;
    }
    .step-indicator li.active > a {
        color: #562873;
    }
    .step-indicator li.active > a:before {
        display: none;
    }
    .step-indicator li.active ~ li > a {
        pointer-events: none;
        color: #C6CACC;
    }
    .step-indicator li.active ~ li > a:before {
        display: none;
    }

    .step-indicator li:last-of-type:after {
        display: none;
    }
    @media all and ( min-width: 678px){
        .step-indicator {
            margin: 20px 20px 0;
        }
        .step-indicator b {
            display: block;
        }
        .step-indicator li {
            padding: 30px 10px 10px;
        }
    }
</style>
