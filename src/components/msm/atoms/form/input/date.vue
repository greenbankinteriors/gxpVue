<template>
    <div class="form-num-wrap">
        <input type="tel" :id="id+'-'+gCount+'-0'" :value="elValue" placeholder="DD" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span>/</span>
        <input type="tel" :id="id+'-'+gCount+'-1'" :value="elValue" placeholder="MM" maxlength="2" @keyup="numSnap" @blur="numBlur">
        <span>/</span>
        <input type="tel" :id="id+'-'+gCount+'-2'" :value="elValue" placeholder="YYYY" maxlength="4" @keyup="numSnap" @blur="numBlur">
    </div>
</template>

<script>

    import globalFuncs from '../../../../../mixins/global'
    import { bus } from '../../../../../main.js'
    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            id: {
                type: String,
                default: 'date'
            },
            elPlaceholder: {
                default: 'Enter here'
            },
            elValue: '',
            elWrapClass: ''
        },
        data() {
            return {
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

<style scoped>
    .form-num-wrap {
        display: flex;
        position: relative;
        border-radius: 5px;
        box-shadow: inset 0 2px 0 0 #c6cacc;
        box-sizing: border-box;
        background-color: #ebf0f2;
        overflow: hidden;
        position: relative;
        z-index: 0;
    }
    .form-num-wrap input {
        padding: 16px 10px 17px;
        font-weight: 600;
        font-size: 14px;
        line-height: 1;
        box-shadow: inset 0 2px 0 0 #c6cacc;
        box-sizing: border-box;
        background-color: #ebf0f2;
        text-align: center;
        display: block;
        color: #2B3133;
        width: 100%;
        transition: all 0.2s ease-in-out;
        margin-bottom: 0;
    }
    :-ms-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
    ::-webkit-input-placeholder {
        font: normal 14px 'Open Sans';
        color: #949899;
    }
    .form-num-wrap > span {
        display: flex;
        align-items: center;
    }
    .form-num-wrap input:first-child {
        margin-left: 0;
    }
    .form-num-wrap input:hover,
    .form-num-wrap input:focus {
        border-radius: 5px;
        box-shadow: inset 0 0 4px 2px #00AEEF;
    }
</style>
