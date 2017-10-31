<template>
    <div class="natural-language">
      <div class="natural-language-content">
        <p class="natural-language-results">Great news Steven, we've found 31 quotes for
          <msm-select :options="policies" /> on
          <msm-select :options="discounts" /> a no claims discount protection <span @click="isShowingClaim ^= true" class="icon icon-info"></span>, voluntary excess of
          <msm-select :options="prices" /> and
          <msm-select :options="payments" /> for you to choose from.
        </p>
        <p class="natural-language-policy">You can <a class="natural-language-policy-link" href="#" target="_self">check your policy details</a> to make sure we've got all the right details.</p>
        <div v-show="isShowingUpdate" class="natural-language-update">
          <msm-button btnClass="btn btn__primary" btnText="Update your results" />
          <a @click="isShowingUpdate = !true" class="natural-language-update-close">Cancel</a>
        </div>
        <msm-checkbox elWrapClass="natural-language-form" :options="quotes" elInputClass="natural-language-form-"></msm-checkbox>
        <a @click="isShowingTelematics ^= true" class="natural-language-telematics">What is telematics?</a>
      </div>
      <div v-show="isShowingTelematics" class="popup">Hello World Telematics</div>
      <div v-show="isShowingClaim" class="popup">Hello World Claim</div>
    </div>
</template>

<script>
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
                isShowingClaim: false,
                isShowingUpdate: true,
                isShowingTelematics: false,
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
            getCurrentValue() {
                console.log(this.policies[0].text);
            }
        },
        created() {
            console.log('hey');
            this.getCurrentValue();
        },
        mounted() {

        }
    }
</script>

<style>
  .natural-language {
      position: relative;
      padding: 22px 22px 50px;
  }

  .natural-language-results {
      padding-bottom: 30px;
  }

  .natural-language-policy {
      border-bottom: 1px solid #c6cacc;
      padding-bottom: 20px;
  }

  .natural-language-policy-link {
      display: inline-block;
      text-decoration: underline;
  }

  .natural-language-update {
      padding: 20px 0 10px;
  }

  .natural-language .btn__primary {
      width: auto;
      margin-right: 30px;
  }

  .natural-language .natural-language-update-close {
      display: inline-block;
      text-decoration: underline;
      cursor: pointer;
  }

  .natural-language-form {
      display: inline-block;
      padding-top: 20px;
  }

  .natural-language-telematics {
      display: inline-block;
      text-decoration: underline;
      cursor: pointer;
  }

  .popup {
      position: absolute;
      background-color: green;
      width: 20%;
      height: 100%;
      top: 0;
      right: 0;
  }

  .icon {
      cursor: pointer;
  }

  .icon-info::before {
      content: '\40';
  }
</style>
