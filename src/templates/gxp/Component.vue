<template>
    <div class="component">
<!--
        <ul class="component-header">
            <li><p>&lt;{{ componentTag }}{{ type | typeQuote }}&gt;</p></li>
        </ul>
-->
        <div :class="elClass?'example '+elClass:'example'" ref="comp">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import { bus } from '../../main.js'

    export default {

        props: {
            elClass: ''
        },
        data() {
            return {
                componentTag: '',
                type: '',
                style: ''
            }
        },
        created(){
//            bus.$once('compInfo', (data) => {
//                this.componentTag = data.tag;
//                this.type = data.type;
//                console.log(data.type)
//            })
        },
        filters: {
            typeQuote: function(value){
                if (value!=""){
                    return value = ' type="' + value + '"'
                }
            }
        }

    }

</script>

<style>
    .component {
        border: solid 2px #eee;
    }
    .component > .component-header {
        padding: 10px 14px;
        background-color: #444;
        color: #fff;
    }
    .component > .example {
        min-height: 170px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .component > .example > div,
    .component > .example > ul {
        min-width: 320px;
    }
</style>
