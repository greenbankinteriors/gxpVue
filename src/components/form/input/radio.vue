<template>
    <ul :class="wrapClass">
        <li v-for="(option, index) in options">
            <input v-if="option.dependant" type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option" @click="dependantTrigger(dependantId, true)">
            <input v-else-if="dependant" type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option" @click="dependantTrigger(dependantId, false)">
            <input v-else type="radio" :class="elClass" :id="type+'-'+gCount+'-'+index" :name="type+'-'+gCount" :value="option">
            <label :for="type+'-'+gCount+'-'+index">{{ option.value || option }}
                <sub>{{ option.subtext }}</sub>
                <span :class="option.subclass"></span>
            </label>
        </li>
    </ul>
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
        created() {
            bus.$emit('compInfo', {"tag":this.tag, "type":this.type});
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
        mixins: [ globalFuncs ]

    }

</script>

<style></style>
