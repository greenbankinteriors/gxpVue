<template>
    <li :class="elWrapClass?elWrapClass+' component':'component'">
        <div class="compWindow" ref="compWindow">
            <div ref="resize">
                <i-frame class="example" ref="example">
                    <slot></slot>
                </i-frame>
                <div class="drag" @mousedown.prevent="drag" @contextmenu.prevent=""></div>
                <div class="resizer">
                    <input ref="resizeCount" type="tel" :value="compSize" maxlength="4" @click="setSize" @blur="setResize" @keyup="resizeWindow" @keyup.enter="setResize" />
                </div>
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
                test: 'form/button.vue',
                componentTag: '',
                molecule: '',
                style: '',
                htmlCode: '',
                styleCode: '',
                windowWidth: 0,
                minWidth: 320,
                maxWidth: 1180,
                setWidth: 0,
                currWidth: 0,
                compSize: 0
            }
        },
        methods: {
            setIframeHeight() {
                var vueInst = this;
                setTimeout(function(){
                    vueInst.$refs.example.$el.style.height = vueInst.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'
                }, 1500);
            },
            getWindowWidth(event) {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth <= this.compSize) {
                    this.compSize = this.windowWidth;
                }
                if (this.$refs.resize.offsetWidth >= this.compSize) {
                    this.compSize = this.$refs.resize.offsetWidth;
                }
            },
            setSize() {
                this.setWidth = this.compSize;
                this.$refs.resizeCount.value = '';
            },
            resizeWindow(event) {
                this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'
                var elVal = (event.currentTarget.value)*1;
                this.compSize = elVal;
            },
            setResize(event) {
                var elVal = (event.currentTarget.value)*1;
                if (elVal == 0) {
                    this.compSize = this.setWidth;
                    this.$refs.resizeCount.value = this.compSize;
                }
                else {
                    this.checkMargins();

                    if (this.compSize > this.windowWidth) {
                        this.compSize = this.windowWidth
                    }

                    this.$refs.resize.style.width = this.compSize + 'px';
                    this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'
                }
            },
            checkMargins() {
                if (this.$refs.resize.offsetWidth < this.minWidth || this.$refs.resize.offsetWidth == (this.minWidth + 1) || this.compSize < this.minWidth) {
                    this.$refs.resize.style.width = this.minWidth + 'px';
                    this.compSize = this.minWidth;
                }

                if (this.$refs.resize.offsetWidth > this.maxWidth || this.$refs.resize.offsetWidth == (this.maxWidth - 1)  || this.compSize > this.maxWidth) {
                    this.$refs.resize.style.width = this.maxWidth + 'px';
                    this.compSize = this.maxWidth;
                }
            },
            drag(event) {
                var vueInst = this;

                var dragEl = event.currentTarget,
                    resizeWindow = this.$refs.resize,
                    compWidth = this.$refs.compWindow.offsetWidth;

                vueInst.maxWidth = vueInst.windowWidth >= 1180 ? 1180 : compWidth;

                var compIframe = this.$refs.example.$el;
                compIframe.style.pointerEvents = "none";
                dragEl.classList.add('resizing');

                vueInst.currWidth = (resizeWindow.offsetWidth) * 1;

                event = event || window.event;
                var startX = event.pageX;

                function resizingIframe(event) {
                    event = event || window.event;
                    var newX = event.pageX,
                        move = (startX - newX)*2,
                        newWidth = (vueInst.currWidth - move);

                    if (newWidth >= vueInst.minWidth && newWidth <= vueInst.maxWidth) {
                        vueInst.compSize = newWidth;
                        resizeWindow.style.width = vueInst.compSize + 'px';
                    }
                }

                document.addEventListener('mousemove', resizingIframe)

                function resizingEnd() {

                    vueInst.checkMargins();

                    document.removeEventListener('mousemove', resizingIframe);
                    document.removeEventListener('mouseup', resizingEnd);

                    compIframe.style.pointerEvents = "auto";
                    dragEl.classList.remove('resizing');

                }

                document.addEventListener('mouseup', resizingEnd)

            }
        },
        beforeMount(){
            bus.$on('pageInfo', (data) => {
                this.molecule = data.molecule;
            })
        },
        mounted() {
            this.$nextTick(function() {
                this.compSize = this.$refs.compWindow.offsetWidth
                window.addEventListener('resize', this.getWindowWidth);
                this.getWindowWidth();

//                this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + "px";

                Prism.highlightAll()

                if (this.molecule) {
                    this.$refs.example.$el.contentWindow.document.body.className = 'example ' + this.molecule;
                }
            })
        },
        updated() {
            this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'

//            console.log(this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px')
//            Prism.highlightAll();
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
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
        position: relative;
        display: flex;
    }
    .component .compWindow > div {
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 320px;
        margin: 0 auto;
    }
    .component .example {
        width: calc(100% - 5px);
        border: solid 2px #eee;
        justify-content: center;
        align-items: center;
    }
    .component .drag {
        display: block;
        border-right: solid 2px #99DFF9;
        position: absolute;
        top: 2px;
        right: 1px;
        width: 20px;
        height: calc(100% - 10px);
        cursor: col-resize;
        z-index: 1;
        transition: all 0.2s ease-in;
    }
    .component .drag:hover,
    .component .drag.resizing {
        background-color: rgba(0, 174, 239, 0.2);
        border-right: solid 2px #00aeef;
    }
    .component .drag:before,
    .component .drag:after {
        content: '';
        display: block;
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% - 1px);
        background-color: #99DFF9;
        opacity: 1;
        height: 10px;
        width: 2px;
        border-radius: 10px;
        z-index: 2;
        transform: rotate(45deg);
        transition: all 0.2s linear;
    }
    .component .drag:after {
        top: calc(50% - 2px);
        transform: rotate(315deg);
    }
    .component .drag:hover:before,
    .component .drag.resizing:before,
    .component .drag:hover:after,
    .component .drag.resizing:after {
        top: calc(50% - 10px);
        left: calc(50% - 3px);
        background-color: #00aeef;
        transform: rotate(0);
        height: 20px;
    }
    .component .drag:hover:after,
    .component .drag.resizing:after {
        left: calc(50% + 1px);
        transform: rotate(360deg);
    }
    .component .resizer {
        position: absolute;
        top: -32px;
        right: 40px;
    }
    .component .resizer:before {
        content: 'px';
        position: absolute;
        top: 5px;
        right: 7px;
        font: normal 14px 'Open Sans';
        color: #566266;
    }
    .component .resizer input {
        display: block;
        width: 70px;
        padding: 4px 25px 4px 10px;
        box-sizing: border-box;
        font: normal 14px 'Open Sans';
        color: #566266;
        text-align: right;
        background-color: #f8f5fa;
        border: solid 1px #dfe3e5;
    }
/*
    .component .example > * {
        min-width: 320px;
        max-width: 320px;
    }
    .component.form .example > * {
        max-width: none;
    }
*/
    .syntax {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 60px 20px 0;
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
    @media (min-width: 824px) {
        .syntax {
            flex-direction: row;
        }
        .syntax > div {
            width: calc(50% - 20px);
        }
    }
    @media (min-width: 1200px) {
        .syntax {
            margin: 60px 0 0;
        }
    }
</style>
