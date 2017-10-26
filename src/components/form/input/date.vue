<template>
    <div :class="wrapClass">
        <input type="tel" :class="elClass" :id="type+'-'+gCount+'-0'" :value="elValue" placeholder="DD" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span>/</span>
        <input type="tel" :class="elClass" :id="type+'-'+gCount+'-1'" :value="elValue" placeholder="MM" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span>/</span>
        <input type="tel" :class="elClass" :id="type+'-'+gCount+'-2'" :value="elValue" placeholder="YYYY" maxlength="4" @keyup="numSnap" @blur="numBlur">
    </div>
</template>

<script>

    import globalFuncs from '../../../mixins/global'
    import { bus } from '../../../main.js'
    import { globalCount } from '../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            type: {
                type: String,
                default: 'tel'
            },
            elPlaceholder: {
                default: 'Enter here'
            },
            elValue: '',
            elWrapClass: ''
        },
        data() {
            return {
                elClass: 'form-num-input',
                wrapClass: 'form-num-wrap',
                gCount: globalCount.counter
            }
        },
        methods: {
            numSnap(evt) {
                var el = evt.currentTarget,
                    valLength = el.value.length,
                    max = parseInt(el.getAttribute('maxlength')),
                    wrap = this.$el;

                if (evt.keyCode == 8 || evt.keyCode == 46) {
                    if (valLength === 0) {
                        var previous = el;
                        while (previous = previous.previousElementSibling) {
                            if (previous == null)
                                break;
                            if (previous.tagName.toLowerCase() === "input") {
                                previous.focus();
                                break;
                            }
                        }
                    }
                }
                else if (evt.keyCode < 37 || evt.keyCode > 40) {
                    if (valLength >= max) {
                        var next = el;
                        while (next = next.nextElementSibling) {
                            if (next == null)
                                break;
                            if (next.tagName.toLowerCase() === "input") {
                                next.focus();
                                break;
                            }
                        }
                    }

                }
            },
            numBlur(evt) {
                var el = evt.currentTarget,
                    max = parseInt(el.getAttribute('maxlength'));

                if (max == 2) {
                    if (el.value.length == 1) {
                        var val = el.value;
                        el.value = '0' + val;
                    }
                }
                else if (max == 4) {
                    if (el.value.length == 2) {
                        var year = el.value;
                        if (year >= 0 && year <= 18) {
                            el.value = '20' + year;
                        } else {
                            el.value = '19' + year;
                        }
                    }
                }
            }
        },
        created() {
            bus.$emit('compInfo', {"tag":this.tag, "type":this.type});
            globalCount.counter = globalCount.counter + 1;
        },
        mixins: [ globalFuncs ]

    }

</script>

<style></style>
