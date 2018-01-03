<template>
    <div class="card" v-show="!empty">
        <dl class="card__info card__list" v-for="(card, index) in cards">
            <dt>{{ card.title }}</dt>
            <dd v-for="desc in card.desc" @click="removeDesc">{{ desc }}<msm-link elText="" elClass="remove"></msm-link></dd>
        </dl>
<!--        <msm-notification elClass="undo"></msm-notification>-->
    </div>
</template>

<script>

    import globalFuncs from '../../../../../mixins/global'
    import { bus } from '../../../../../main.js'
    import { globalCount } from '../../../../../main.js'
    import msmLink from '../../../../../components/msm/atoms/form/text/link'
    import msmNotification from '../../../../../components/msm/molecules/form/notification'

    export default {

        props: {
            id: '',
            elClass: '',
            cards: ''
        },
        components: {
            'msm-link': msmLink,
            'msm-notification': msmNotification
        },
        data() {
            return {
                elId: this.id,
                elType: 'text',
                gCount: globalCount.counter,
                empty: false
            }
        },
        methods: {
            removeDesc(evt) {
                var currEl = evt.currentTarget,
                    parentEl = currEl.parentElement;

                parentEl.removeChild(currEl);
                if (!parentEl.querySelector('dd')) {
                    console.log('ALL GONE')
                    this.empty = true;
                }
            }
        }

    }

</script>

<style scoped>
    .card {
        position: relative;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .card:last-of-type {
        margin-bottom: 10px;
    }

    .card__list dt {
        font-weight: 700;
        color: #2b3133;
    }
    .card__list dd {
        position: relative;
        padding: 10px 80px 10px 0;
        border-bottom: solid 1px #dfe3e5;
    }
    .card__list dd:last-child {
        border-bottom: none;
        padding-bottom: 0px;
    }
    .card__list dd .remove {
        position: absolute;
        top: 7px;
        right: 0;
        padding: 0;
    }
    .card .edit:before {
        content: 'Edit details';
    }
    [data-status='edit'] .editing .edit:before {
        content: 'Editing...';
        color: #562873;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#562873" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="5" d="M84.4,21.6l-6-6c-1.6-1.5-4-1.5-5.5,0l-42,42l-6.4,17.9L42.5,69l42-42C85.9,25.6,85.9,23.2,84.4,21.6z"/><line stroke-width="3" x1="31" y1="57.5" x2="42.5" y2="69"/><line stroke-width="2" x1="67.1" y1="21.4" x2="78.6" y2="32.9"/><line stroke-width="2" x1="64.1" y1="24.4" x2="75.6" y2="35.9"/><polyline stroke-width="5" points="79.2,53.2 79.2,85.6 14.4,85.6 14.4,20.8 46.8,20.8"/></g></svg>');
    }
    .card__info {
        position: relative;
        left: 0;
        max-height: 400px;
        font-size: 14px;
        color: #566266;
        padding: 15px;
        box-shadow: 0 2px 0 0 #c6cacc;
        background-color: #fff;
        border: solid 1px #dfe3e5;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        opacity: 1;
        overflow: hidden;
    }
    .card__info > span {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .card.removed .card__info {
        opacity: 0;
        max-height: 0px;
        position: absolute;
        -webkit-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
    }
    .card__removal {
        position: absolute;
        font-size: 14px;
        display: block;
        width: 100%;
        background-color: #f2f8fa;
        padding: 15px 100px 15px 20px;
        margin-top: 10px;
        top: 0;
        left: calc(-100% - 20px);
        box-sizing: border-box;
    }
    .card.card__default .card__removal {
        margin-top: 0;
    }
    .card.card__default .card__removal,
    .card.removed .card__removal {
        position: relative;
        left: 0;
        animation: burstIn 0.3s;
    }
    .card.snap .card__removal {
        left: 0;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .card.card__default.done .card__removal,
    .card.removed.done .card__removal {
        left: calc(-100% - 20px);
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    .card__removal h1 {
        margin-bottom: 5px;
    }
    .card__removal button {
        display: block;
        font: 700 16px 'Open Sans';
        color: #00aeef;
        background-color: #f2f8fa;
        padding: 0 20px;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        border: none;
        border-left: solid 1px #dfe3e5;
    }
    @keyframes burstIn {
        0% {
            left: -100%;
        }
        100% {
            left: 0;
        }
    }
</style>
