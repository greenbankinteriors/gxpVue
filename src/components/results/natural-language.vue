<template>
    <div class="natural-language">
        <div class="natural-language-inner">
            <p class="natural-language-copy">Great news Steven, we've found 31 quotes for
                <msm-select :options="policies" @change.native="flagChanged(isShowingUpdateFlag)" /> on
                <msm-select :options="discounts" @change.native="flagChanged(isShowingUpdateFlag)" /> a no claims discount protection <span @click="isShowingClaimFlag ^= true" class="icon icon-info"></span>, voluntary excess of
                <msm-select :options="prices" @change.native="flagChanged(isShowingUpdateFlag)" /> and
                <msm-select :options="payments" @change.native="flagChanged(isShowingUpdateFlag)" /> for you to choose from.
            </p>
            <p class="natural-language-copy">You can <a class="natural-language-policy-link" href="#" target="_self">check your policy details</a> to make sure we've got all the right details.</p>
            <div v-show="isShowingUpdateFlag" class="natural-language-update">
                <msm-button btnClass="btn btn__primary" btnText="Update your results" @click.native="updateResults()" />
                <a @click="revertResults()" class="natural-language-close-link">Cancel</a>
            </div>
            <msm-checkbox elWrapClass="natural-language-form" :options="quotes" elInputClass="natural-language-form-"></msm-checkbox>
            <a @click="isShowingTelematicsFlag ^= true" class="natural-language-telematics-link">What is telematics?</a>
        </div>
        <div v-show="isShowingTelematicsFlag" class="popup">Hello World Telematics</div>
        <div v-show="isShowingClaimFlag" class="popup">Hello World Claim</div>
    </div>
</template>

<script>
    import { bus } from '../../main.js'
    import msmButton from '../form/button.vue'
    import msmCheckbox from '../form/input/checkbox.vue'
    import msmSelect from '../form/dropdown.vue'

    export default {
        components: {
            'msm-button': msmButton,
            'msm-checkbox': msmCheckbox,
            'msm-select': msmSelect
        },
        data() {
            return {
                formSel: '',
                selected: '',
                isShowingClaimFlag: false,
                isShowingUpdateFlag: false,
                isShowingTelematicsFlag: false,
                policies: [
                    {'value': 'comprehensive cover', 'text': 'comprehensive cover'},
                    {'value': 'third party, fire & theft cover', 'text': 'third party, fire & theft cover'},
                    {'value': 'third party only cover', 'text': 'third party only cover'}
                ],
                discounts: [
                    {'value': 'with', 'text': 'with'},
                    {'value': 'without', 'text': 'without'}
                ],
                prices: [
                    {'value': '£0', 'text': '£0'},
                    {'value': '£50', 'text': '£50'},
                    {'value': '£100', 'text': '£100'},
                    {'value': '£150', 'text': '£150'},
                    {'value': '£200', 'text': '£200'},
                    {'value': '£250', 'text': '£250'},
                    {'value': '£300', 'text': '£300'},
                    {'value': '£350', 'text': '£350'},
                    {'value': '£400', 'text': '£400'},
                    {'value': '£450', 'text': '£450'},
                    {'value': '£500', 'text': '£500'},
                    {'value': '£700', 'text': '£700'},
                    {'value': '£1000', 'text': '£1000'}
                ],
                payments: [
                    {'value': 'paying anuualy', 'text': 'paying anuualy'},
                    {'value': 'paying monthly', 'text': 'paying monthly'}
                ],
                quotes: ['Show all telematics quotes']
            }
        },
        methods: {
            flagChanged(value) {
                if (this.isShowingUpdateFlag)
                    return;

                bus.$on('input', this.updateSelected);
            },
            updateSelected(selected) {
                if (this.selected !== selected) {
                    this.selected = selected;
                    this.isShowingUpdateFlag = true;
                }
            },
            updateResults() {
                // to do
            },
            revertResults() {
                for (var i = 0; i < this.formSel.length; i++) {
                    this.formSel[i].querySelector('select').value = '';
                }

                this.isShowingUpdateFlag = false;
            },
            toggleQuotes() {
                // to do
            }
        },
        created() {
            bus.$on('toggleQuotes', this.toggleQuotes);
        },
        mounted() {
            this.formSel = this.$el.querySelectorAll('.form-pseudo-select');

            for (var i = 0; i < this.formSel.length; i++) {
                this.selected = this.formSel[i].querySelector('select').value;
            }
        }
    }
</script>

<style>
    .natural-language {
        position: relative;
        padding: 22px 22px 50px;
    }

    .natural-language-copy:first-of-type {
        font-size: 18px;
        line-height: 2.5;
        padding-bottom: 30px;
    }

    .natural-language-copy:last-of-type {
        font-size: 18px;
        border-bottom: 1px solid #c6cacc;
        padding-bottom: 20px;
    }

    .natural-language-policy-link {
        display: inline-block;
        font-size: 18px;
        text-decoration: underline;
    }

    .natural-language-update {
        padding: 20px 0 10px;
    }

    .natural-language .btn__primary {
        width: auto;
        margin-right: 30px;
    }

    .natural-language-close-link,
    .natural-language-telematics-link {
        display: inline-block;
        font-size: 16px;
        text-decoration: underline;
        cursor: pointer;
    }

    .natural-language-form {
        display: inline-block;
        padding-top: 20px;
    }

    .icon {
        cursor: pointer;
    }

    .icon-info::before {
        content: url('../../assets/msm/images/icons/b-mob-info-icon-copy-12.svg');
        display: inline-block;
        vertical-align: top;
        height: 22px;
        margin-top: 4px;
    }

    .popup {
        position: absolute;
        background-color: green;
        width: 20%;
        height: 100%;
        top: 0;
        right: 0;
    }
</style>
