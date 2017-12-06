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
                <button type="button" @click="copyCode('html')"></button>
                <pre class="line-numbers"><code class="language-html">{{ htmlCode }}</code></pre>
            </div>
            <div>
                <p>CSS</p>
                <button type="button" @click="copyCode('css')"></button>
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
            elWrapClass: '',
            egClass: ''
        },
        data() {
            return {
                componentTag: '',
                molecule: '',
                style: '',
                htmlCode: '',
                styleCode: '',
                copyType: '',
                windowWidth: 0,
                minWidth: 320,
                maxWidth: 1180,
                setWidth: 0,
                currWidth: 0,
                compSize: 0
            }
        },
        methods: {
            copyCode(type) {
                this.copyType = type;
                document.execCommand("copy");
                alert('Copied to clipboard')
            },
            addCodeToClipboard(event) {
                event.preventDefault();
                if (event.clipboardData) {
                    switch(this.copyType) {
                        case 'html':
                            event.clipboardData.setData("text/plain", this.htmlCode);
                            break;
                        case 'css':
                            event.clipboardData.setData("text/plain", this.styleCode);
                            break;
                    }
                }
            },
            setIframeHeight() {
                var vueInst = this;
                setTimeout(function(){
                    vueInst.$refs.example.$el.style.height = vueInst.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'
                }, 1000);
            },
            getWindowWidth(event) {
                this.windowWidth = document.documentElement.clientWidth;
                if (this.windowWidth <= this.compSize) {
                    this.compSize = this.windowWidth;
                }
                if (this.$refs.resize.offsetWidth >= this.windowWidth) {
                    this.compSize = (this.$refs.resize.offsetWidth - 4);
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
                    this.$refs.resize.style.width = this.compSize + 'px';
                    this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'

                    this.checkMargins();

                    if (this.compSize > this.windowWidth) {
                        this.compSize = (this.windowWidth - 4)
                    }
                    else if (elVal >= this.maxWidth) {
                        this.compSize = this.maxWidth;
                    }
                }
            },
            checkMargins() {
                if (this.$refs.resize.offsetWidth <= (this.minWidth + 1) || this.compSize < this.minWidth) {
                    this.$refs.resize.style.width = this.minWidth + 'px';
                    this.compSize = this.minWidth;
                }

                if (this.$refs.resize.offsetWidth >= (this.maxWidth - 1) || this.compSize > this.maxWidth) {
                    this.$refs.resize.style.width = this.maxWidth + 'px';
                    this.compSize = this.maxWidth;
                }
            },
            drag(event) {
                var vueInst = this;

                var dragEl = event.currentTarget,
                    resizeWindow = this.$refs.resize,
                    compWidth = this.$refs.compWindow.offsetWidth;

                var dragMax = vueInst.windowWidth >= (this.maxWidth + 4) ? (this.maxWidth + 4) : compWidth;

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

                    if (newWidth >= vueInst.minWidth && newWidth <= (dragMax - 4)) {
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
                this.compSize = (this.$refs.resize.offsetWidth - 4);
                window.addEventListener('resize', this.getWindowWidth);
                window.addEventListener('copy', this.addCodeToClipboard);

                this.getWindowWidth();

                Prism.highlightAll();

                var bodyClass = "content"

                if (this.egClass) {
                    bodyClass += ' ' + this.egClass
                }
                if (this.molecule) {
                    bodyClass += ' ' + this.molecule
                }

                this.$refs.example.$el.contentWindow.document.body.className = bodyClass;
            })
        },
        updated() {
            this.$refs.example.$el.style.height = this.$refs.example.$el.contentWindow.document.body.childNodes[0].offsetHeight + 'px'
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
            window.removeEventListener('copy', this.addCodeToClipboard);
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
        border: solid 2px #eee;
    }
    .component .example {
        min-height: 150px;
        width: 100%;
        border: none;
        justify-content: center;
        align-items: center;
    }
    .component .drag {
        display: block;
        border-right: solid 2px #99DFF9;
        position: absolute;
        top: 0;
        right: -2px;
        width: 2px;
        height: 100%;
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
        right: 10px;
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
        right: 7px;
        background-color: #00aeef;
        transform: rotate(0);
        height: 20px;
    }
    .component .drag:hover:after,
    .component .drag.resizing:after {
        right: 12px;
        transform: rotate(360deg);
    }
    .component .resizer {
        position: absolute;
        top: -45px;
        right: 30px;
    }
    .component .resizer:before {
        content: 'px';
        position: absolute;
        top: 5px;
        right: 7px;
        font: normal 14px 'Open Sans';
        color: #566266;
    }
    .component .resizer:after {
        content: '';
        width: 21px;
        height: 21px;
        display: block;
        position: absolute;
        top: 5px;
        right: -30px;
        background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="#411E56"><path d="M2.38 13.522a.311.311 0 0 1-.309-.313V2.358c0-.172.139-.313.31-.313h16.364c.17 0 .309.14.309.313v2.335c.692.02 1.464.28 1.946.787V1.736C21 .78 20.23 0 19.284 0H1.716C.77 0 0 .779 0 1.736v12.065c0 .957.77 1.736 1.716 1.736h5.888v2.328h-.928c-.583 0-1.055.478-1.055 1.067 0 .59.472 1.068 1.055 1.068h2.962a3.225 3.225 0 0 1-.594-1.86v-4.618H2.38z"/><path d="M14.977 18.985v-1.538H11.9V7.622c0-.207.166-.375.37-.375h6.96c.204 0 .37.168.37.375v3.04h.524c.32 0 .618.095.876.249V7.622c0-.992-.794-1.8-1.77-1.8h-6.96c-.976 0-1.77.808-1.77 1.8V18.2c0 .993.794 1.8 1.77 1.8h3.023a1.905 1.905 0 0 1-.316-1.015z"/><path d="M20.106 11.65h-3.462a.895.895 0 0 0-.894.895v6.565c0 .493.4.894.894.894h3.462A.895.895 0 0 0 21 19.11v-6.565c0-.493-.4-.895-.894-.895zm-3.285.814h3.108v5.675h-3.108v-5.675zm1.552 6.991a.37.37 0 0 1-.251-.1.376.376 0 0 1 .252-.654.376.376 0 0 1 .25.653.37.37 0 0 1-.25.101z"/></g></svg>') center center no-repeat;
        background-size: 21px;
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
    .syntax {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 60px 20px 0;
    }
    .syntax > div {
        position: relative;
    }
    .syntax p {
        margin-bottom: 10px;
        font: 700 18px 'Open Sans';
        color: #411e56;
    }
    .syntax button {
        position: absolute;
        top: 39px;
        right: 5px;
        border: none;
        background: #272823 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20"><path fill="#fff" d="M12.522 0H1.796C.813 0 .01.818.01 1.818v12.727h1.787V1.818h10.726V0zm2.682 3.636H5.372c-.984 0-1.788.819-1.788 1.819v12.727c0 1 .804 1.818 1.788 1.818h9.832c.983 0 1.787-.818 1.787-1.818V5.455c0-1-.804-1.819-1.787-1.819zm0 14.546H5.372V5.455h9.832v12.727z"/></svg>') center center no-repeat;
        background-size: 17px;
        width: 17px;
        height: 24px;
        transition: all 0.1s ease-in;
        cursor: pointer;
        z-index: 1;
    }
    .syntax button:hover {
        background-color: #555454;
        box-shadow: 0 0 5px 4px #555454;
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
