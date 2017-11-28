import { bus } from '../main.js'
import { globalCount } from '../main.js'

export default {
    methods: {
        getExtraStyles() {
            var styles = []

            for (let style of document.head.getElementsByTagName('style')) {
                if (style.innerText.indexOf('GLOBAL STYLES') !== -1) {
                    styles.push({'inner': style.innerText, 'inc': 0});
                }
                if (style.innerText.indexOf('GXP STYLES') !== -1) {
                    styles.push({'inner': style.innerText, 'inc': 1});
                }
            }

            return styles;
        },
        getStyle(comp) {
            if (comp.childNodes[0]) {
                var e = comp.childNodes[0];
                for (let key in e.attributes) {
                    let name = e.attributes[key].name
                    if (name && name.indexOf('data-v') !== -1) {
                        for (let style of document.head.getElementsByTagName('style')) {
                            if (style.innerText.indexOf(name) !== -1) {
                                return style.innerText;
                            }
                        }
                    }
                }
            }
        },
        cleanCode(string) {
            string = string.replace(/ *\[data-v[^\]]*]/g, '');  //removes [data-v-*]
            string = string.replace(/ *\<![^\]]*->/g, '');      //removes <!----->
            string = string.replace(/ data-v[^""]*""/g, '');    //removes data-v-*=""
            if (string.charAt(0).match(/\s/)) {
                string = string.replace(/\s/, '');              //removes whitespace at 1st char
            }

            return string;
        },
        formatCSS(str) {
            var splits = str.split('{'),
                firstInc = false,
                mediaTrigger = false,
                newString = "";

            for (var i=0; i < splits.length; i++) {
                var split = splits[i];

                if (i < (splits.length - 1)) {
                    split = split + '{';
                }

                if (mediaTrigger) {

                    if (firstInc) {
                        firstInc ^= firstInc;
                        split = split.replace('\n', '\n    ');
                    }

                    if (split.replace(/[^}]/g, "").length == 2) {
                        mediaTrigger ^= mediaTrigger;
                        newString += split.replace('}', '    }');
                    }
                    else {
                        newString += split.replace('}\n', '    }\n    ');
                    }

                }
                else {
                    newString += split;
                }

                if (split.includes('@media')) {
                    firstInc = true;
                    mediaTrigger = true;
                }

            }

            return newString;
        },
        formatHTML(str) {
            str = str.replace(/\r?\n|\r/g, '');
            str = str.replace(/ *  /g, '');
            str = str.replace(/> </g, '><');

            function process(str) {
                var div = document.createElement('div');
                str = str.replace(/\s+/g, ' ')
                div.innerHTML = str.trim();

                return format(div, 0).innerHTML;
            }

            var firstInc = true;

            function format(node, level) {
                var indentBefore = new Array(level++ + 1).join('  '),
                    indentAfter = new Array(level - 1).join('  '),
                    textNode;

                for (var i = 0; i < node.children.length; i++) {
                    if (firstInc) {
                        textNode = document.createTextNode(indentBefore);
                        firstInc ^= firstInc;
                    }
                    else {
                        textNode = document.createTextNode('\n' + indentBefore);
                    }

                    node.insertBefore(textNode, node.children[i]);

                    format(node.children[i], level);

                    if (node.lastElementChild == node.children[i]) {
                        textNode = document.createTextNode('\n' + indentAfter);
                        node.appendChild(textNode);
                    }
                }

                return node;
            }

            return process(str)
        }
    },
    mounted() {

        var iframeDoc = this.$refs.example.$el.contentDocument,
            stylesheets = iframeDoc.querySelectorAll('head > style'),
            container = iframeDoc.querySelector('body > div');

        var extraStyles = this.getExtraStyles();
        for(var i=0; i < extraStyles.length; i++) {
            var sheet = extraStyles[i];

            stylesheets[sheet.inc].innerHTML = sheet.inner;
        }

        var htmlCode = container.innerHTML;
        htmlCode = this.cleanCode(htmlCode);
        htmlCode = this.formatHTML(htmlCode);
        this.htmlCode = htmlCode;

        var styleCode = this.getStyle(container);

        stylesheets[2].innerHTML = styleCode;

        styleCode = this.cleanCode(styleCode);
        styleCode = this.formatCSS(styleCode);
        this.styleCode = styleCode

//        console.log('IFRAME LOADED')
//        alert('LOADED')
    },
    updated() {
        this.setIframeHeight();
    }
}
