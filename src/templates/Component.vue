<template>
    <div class="component">
<!--        <h3>Component content goes here:</h3>-->
        <ul>
            <li><p>{{ componentTag }} {{ elType | typeQuote }}</p></li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>

    import { bus } from '../main.js'

    export default {

        data() {
            return {
                componentTag: '',
                elType: ''
            }
        },
        created(){
            bus.$once('getInputType', (data) => {
                this.elType = data;
            }),
            bus.$once('sendComponentInfo', (comp) => {
                this.componentTag = comp._componentTag;
            })
        },
        filters: {
            typeQuote: function(value){
                if (value!=""){
                    return value = "type='" + value + "'"
                }
            }
        }

    }

</script>

<style>
    .component {
        margin: 5px 0;
        border: solid 2px #eee;
    }
    .component > ul {
        padding: 10px;
        background-color: #444;
        color: #fff;
    }
</style>
