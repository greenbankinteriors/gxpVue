<template>
    <ul :class="wrapClass" ref="comp">
        <li v-for="(option, index) in options">
            <input v-if="option.dependant" type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option" @click="dependantTrigger(dependantId, true)" />
            <input v-else-if="dependant" type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option" @click="dependantTrigger(dependantId, false)" />
            <input v-else type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option.value || option" />
            <label :for="type+'-'+gCount+'-'+index">{{ option.label || option }}
                <sub v-if="option.subtext">{{ option.subtext }}</sub>
                <span v-if="option.subclass" :class="option.subclass"></span>
            </label>
        </li>
    </ul>
</template>

<script>

    import pageData from '../../../mixins/pageData'
    import { globalCount } from '../../../main.js'

    export default {

        props: {
            tag: {
                type: String,
                default: 'input'
            },
            type: {
                type: String,
                default: 'radio'
            },
            options: {
                elType: Array
            },
            elValue: '',
            elWrapClass: '',
            elSpanClass: ''
        },
        data() {
            return {
                elType: this.type,
                elClass: '',
                wrapClass: this.elWrapClass,
                dependant: false,
                dependantId: '',
                dependantId: '',
                gCount: globalCount.counter
            }
        },
        methods: {
            dependantTrigger(childId, show) {
                var children = document.querySelectorAll('[data-dependant='+childId+']');
                if (childId && show) {
                    for (var i=0;i<children.length;i++) {
                        var c = children[i],
                            wrap = this.getParent(c, 'dependant__answers');
                        wrap.setAttribute('data-dependant-status', 'open')
                    }
                }
                else {
                    for (var i=0;i<children.length;i++) {
                        var c = children[i],
                            wrap = this.getParent(c, 'dependant__answers');
                        wrap.setAttribute('data-dependant-status', 'closed');
                        this.clearValues(c.querySelectorAll('input'))
                    }
                }
            },
            clearValues(inputs) {
                inputs.forEach(function (i) {
                    switch (i.type) {
                        case 'radio':
                        case 'checkbox':
                            i.checked = false;
                            break;
                        case 'text':
                        case 'tel':
                        case 'email':
                        case 'password':
                            i.value = '';
                            break;
                    }
                });
            }
        },
        mounted() {
            globalCount.counter = globalCount.counter + 1;

            if (this.options) {
                for (var i=0;i<this.options.length;i++) {
                    if (this.options[i].dependant) {
                        this.dependant = true;
                        this.dependantId = this.options[i].dependant;
                        break;
                    }
                }
            }
        },
        mixins: [pageData]

    }

</script>

<style scoped>
    input[type=radio] {
        -webkit-appearance: none;
        border: 0 none;
        background-color: transparent;
        position: absolute;
        z-index: -1;
        display: block;
        width: 0;
        height: 0;
    }
    input[type=radio]:focus {
        outline: none;
        box-shadow: 0 2px 0 0 #c6cacc;
    }
    .form-inline-radios {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .form-grid-radios {
        flex-wrap: wrap;
        align-items: stretch;
    }
    .form-inline-radios > li {
        width: 50%;
        box-sizing: border-box;
    }

    .form-inline-radios > li:nth-child(odd) {
        padding: 0 3px 7px 0;
    }
    .form-inline-radios > li:nth-child(even) {
        padding: 0 0 7px 3px;
    }
    .form-inline-radios > li:last-child,
    .form-inline-radios > li:nth-last-child(2):nth-child(odd) {
        padding-bottom: 0;
    }
    input[type=radio] + label {
        padding: 15px 10px 15px 50px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        border-radius: 5px;
        box-shadow: 0 2px 0 0 rgb(198, 202, 204);
        box-sizing: border-box;
        background-color: #ebf0f2;
        display: block;
        color: #566266;
        width: 100%;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        position: relative;
        margin: 0 0 10px;
        text-transform: capitalize;
    }
    input[type=radio] + label sub {
        display: block;
        font: normal 12px 'Open Sans';
    }
    ul li:last-of-type input[type=radio] + label,
    .form-inline-radios input[type="radio"] + label {
        margin: 0;
    }
    input[type=radio] + label strong {
        font-weight: 700;
    }
    input[type=radio] + label small {
        display: block;
        font-weight: 400;
        padding-top: 5px;
        font-size: 14px;
    }
    input[type=radio] + label:before,
    input[type=radio] + label:after {
        content: '';
        box-sizing: border-box;
        display: block;
        position: absolute;
        background-color: transparent;
        border-radius: 50%;
        transition: all 0.2s linear;
        transform-origin: center;
    }
    input[type=radio] + label:before {
        width: 24px;
        height: 24px;
        border: 1px solid #C6CACC;
        top: 13px;
        left: 13px;
        box-shadow: inset 0 0 0 2px #FFF;
    }
    input[type=radio]:checked + label:before {
        border-color: rgba(255,255,255,0);
    }
    input[type=radio] + label:after {
        width: 22px;
        height: 22px;
        top: 14px;
        left: 14px;
        background-color: #FFF;
    }
    input[type=radio]:checked + label:after {
        transform: scale(0.4);
    }
    input[type=radio] + label:hover {
        background-color: #99dff9;
        box-shadow: 0 2px 0 0 rgba(198,202,204,0);
    }
    input[type=radio]:focus + label {
        box-shadow: inset 0 0 0 2px #99dff9;
    }
    input[type=radio]:checked + label,
    input[type=radio]:checked:focus + label {
        background-color: #00AEEF;
        box-shadow: inset 0 2px 0 0 #0082b5;
        color: #FFF;
    }
    input[type=radio]:checked + label:hover {
        background-color: #0083b3;
    }
    input[type=radio]:checked:focus + label {
        box-shadow: inset 0 0 0 2px #99dff9;
    }
</style>
