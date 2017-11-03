<template>
    <li :class="elWrapClass?elWrapClass+' component':'component'">
        <div class="compWindow">
            <div :class="elClass?'example '+elClass:'example'" ref="example">
                <slot></slot>
            </div>
        </div>
        <div class="syntax">
            <div>
                <p>HTML</p>
                <pre class="line-numbers"><code class="language-html">{{ htmlCode }}</code></pre>
            </div>
            <div>
                <p>CSS</p>
                <pre class="line-numbers"><code class="language-css">{{ styleCode }}</code></pre>
            </div>
        </div>
    </li>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import compData from '../../mixins/compData'

    export default {

        props: {
            elClass: '',
            elWrapClass: ''
        },
        data() {
            return {
                componentTag: '',
                type: '',
                style: '',
                htmlCode: '',
                styleCode: ''
            }
        },
        beforeMount(){
            bus.$once('compInfo', (data) => {
                this.styleCode = data.styleCode;

            })
        },
        mounted() {
            var htmlCode = this.$refs.example.innerHTML
            htmlCode = this.cleanCode(htmlCode);
            this.formatHTML(htmlCode);
            htmlCode = this.formatHTML(htmlCode);
            this.htmlCode = htmlCode;
        },
        updated() {
            Prism.highlightAll();
        },
        filters: {
            typeQuote: function(value){
                if (value!=""){
                    return value = ' type="' + value + '"'
                }
            }
        },
        mixins: [compData]

    }

</script>

<style>
    .component > .component-header {
        padding: 10px 14px;
        background-color: #444;
        color: #fff;
    }
    .component .compWindow {
        border: solid 2px #eee;
    }
    .component .example {
        min-height: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .component .example > div,
    .component .example > ul {
        min-width: 320px;
    }
    .syntax {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
    }
    .syntax > div {
        width: calc(50% - 20px);
    }
    .syntax p {
        margin-bottom: 10px;
        font: 700 18px 'Open Sans';
        color: #411e56;
    }
    .syntax pre {
        box-sizing: border-box;
        color: #411e56;
        font: 600 16px 'Open Sans';
        resize: none;
        height: 200px;
        width: 100%;
        overflow: scroll;
    }
</style>
