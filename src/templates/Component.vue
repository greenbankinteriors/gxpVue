<template>
    <div class="component">
<!--        <h3>Component content goes here:</h3>-->
        <slot></slot>
    </div>
</template>

<script>

    import { bus } from '../main.js'

    export default {

        data() {
            return {
                elType: 'none'
            }
        },
        created(){
            bus.$on('typeChanged', (data) => {
                this.elType = data;
            })
        }

    }

</script>

<style>
    .component {
        border-top: solid 2px #eee;
        background-color: #fff;
        border-bottom: solid 2px #eee;
        margin: 5px 0;
    }
    @media ( min-width: 420px ){
        .component {
            border-radius: 6px;
            border: solid 2px #eee;
        }
    }
    @media all and ( min-width: 620px ){
        .component {
            border: none;
            border-radius: 0px;
            border-top: solid 2px #eee;
            border-bottom: solid 2px #eee;
        }
    }
    @media all and ( min-width: 824px ){
        .component {
            border-radius: 6px;
            border: solid 2px #eee;
        }
    }
</style>
