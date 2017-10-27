<template>
    <div class="natural-language">
      <div class="natural-language-content">
        <p class="natural-language-results">Great news Steven, we've found 31 quotes for on a no claims discount protection , voluntary excess of and for you to choose from.</p>
        <p class="natural-language-policy">You can <a class="natural-language-policy-link" href="#" target="_self">check your policy details</a> to make sure we've got all the right details.</p>
        <div class="">
          <msm-button />
          <span class=""><a class="">Cancel</a></span>
        </div>
        <msm-checkbox elWrapClass="form-inline-checkbox" :options='options1'>Show all telematics quotes <a class="" href="" target="_self">What is telematics?</a></msm-checkbox>
      </div>
    </div>
</template>

<script>
    import button from '../form/button.vue'
    import checkbox from '../form/input/checkbox.vue'

    export default {
        components: {
          'msm-button': button,
          'msm-checkbox': checkbox
        },
        data() {
            return {
              options1: ['Option 1']
            }
        },
        methods: {

        }
    }
</script>

<style>
  .natural-language-policy {
    border-bottom: 1px solid #c6cacc;
  }

  .natural-language-policy-link {
    display: inline-block;
  }
</style>
