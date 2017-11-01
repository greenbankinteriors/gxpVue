import { bus } from '../main.js'
import { globalCount } from '../main.js'

export default {
    methods: {
        getStyle() {
            var styles = document.getElementsByTagName("STYLE");
            var string = styles[styles.length-1].innerHTML;

            string = this.cleanCode(string);

            return string;
        },
        cleanCode(string) {
            string = string.replace(/ *\[data-v[^\]]*]/g, '');  //removes [data-v-*]
            string = string.replace(/ *\<![^\]]*->/g, '');      //removes <!----->
            string = string.replace(/ data-v[^""]*""/g, '');    //removes data-v-*=""
            if (string.charAt(0).match(/\s/)) {
                string = string.replace(/\s/,'');               //removes whitespace at 1st char
            }

            return string;
        },
        formatHTML(str){
            str = str.replace(/\r?\n|\r/g, '');
            str = str.replace(/ *  /g, '');
            str = str.replace(/> </g, '><');

            var newStr = "",
                indent = 0,
                sameLineCount = 0,
                splits = str.split('<'),
                lines = new Array();

            for (var i = 0; i < splits.length; i++) {
                if (splits[i]) {
                    lines.push(splits[i]);
                }
            }

            for(var i=0; i < lines.length; i++) {
                var s = lines[i];

                if (s.match(/input/g)) {
                    s = s.slice(0, -1) + ' />';
                }

                if (s !== '') {
                    if (i==0) {
                        newStr += '<' + s + '\r\n';
                        indent ++;
                    }
                    else if(sameLineCount > 0) {
                        if (s.substr(s.length - 1) !== '>') {
                            sameLineCount ++;
                            newStr += '<' + s;
                        }
                        else {
                            sameLineCount --;
                            newStr += '<' + s;
                        }

                        if (sameLineCount == 0) {
                            newStr += '\r\n';
                            indent --;
                        }
                    }
                    else if(s.charAt(0) == '/'){
                        //closing tag
                        newStr += this.addIndent(indent) + '<' + s + '\r\n';
                        indent --;
                    }
                    else if(s.slice(-2) == '/>') {
                        //ends on a closing tag
                        newStr += this.addIndent(indent) + '<' + s + '\r\n';
                    }
                    else if(s.substr(s.length - 1) == '>') {
                        //ends on a closed tag
                        newStr += this.addIndent(indent) + '<' + s + '\r\n';
                        indent ++;
                    }
                    else {
                        //ends with an open str
                        newStr += this.addIndent(indent) + '<' + s;
                        sameLineCount ++;
                    }
                }

            }
            return newStr;
        },
        addIndent(ind){
            var blanks = '';
            for(var i=0; i < ind; i++) {
                blanks += '\xa0\xa0'
            }
            return blanks;
        }
    },
    mounted() {
        var styleCode = this.getStyle();
//        var htmlCode = this.$options.parent.$el.children[0].innerHTML;
        var htmlCode = this.$refs.comp.outerHTML;
        htmlCode = this.cleanCode(htmlCode);
        this.formatHTML(htmlCode);
        htmlCode = this.formatHTML(htmlCode);

        bus.$emit('compInfo', {"tag":this.tag, "type":this.type, "styleCode":styleCode, "htmlCode":htmlCode});
    }
}