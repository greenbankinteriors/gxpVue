<template>
    <div :class="elClass?'component '+elClass:'component'">
<!--        <h3>Component content goes here:</h3>-->
        <ul>
            <li><p>&lt;{{ componentTag }}{{ type | typeQuote }}&gt;</p></li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>

    import { bus } from '../main.js'

    export default {

        props: {
            elClass: ''
        },
        data() {
            return {
                componentTag: '',
                type: ''
            }
        },
        created(){
            bus.$once('getInputType', (data) => {
                this.type = data;
            }),
            bus.$once('sendComponentInfo', (comp) => {
                this.componentTag = comp._componentTag;
            })
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
    .component > ul {
        padding: 10px 14px;
        background-color: #444;
        color: #fff;
    }
</style>
