import { bus } from '../main.js'
import { globalCount } from '../main.js'

export default {
    methods: {
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

            var firstTing = true;

            function format(node, level) {
                var indentBefore = new Array(level++ + 1).join('  '),
                    indentAfter = new Array(level - 1).join('  '),
                    textNode;

                for (var i = 0; i < node.children.length; i++) {
                    if (firstTing) {
                        textNode = document.createTextNode(indentBefore);
                        firstTing ^= firstTing;
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
        var htmlCode = this.$refs.example.innerHTML;
        htmlCode = this.cleanCode(htmlCode);
        htmlCode = this.formatHTML(htmlCode);
        this.htmlCode = htmlCode;

        var styleCode = this.getStyle(this.$refs.example);
        styleCode = this.cleanCode(styleCode);
        this.styleCode = styleCode
    }
}
