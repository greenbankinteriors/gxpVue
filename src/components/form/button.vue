<template>
    <button type="button" v-bind:class="testClass">{{ testText }}</button>
</template>

<script>

    export default {
        props: {
            btnClass: {
                default: 'btn'
            },
            btnText: {
                default: 'Buy now'
            }
        },
        data() {
            return {
                testText: this.btnText,
                testClass: this.btnClass,
                url: '/button'
            }
        },
        methods: {

        }
    }

</script>

<style scoped>
    .btn {
        font: 700 14px/1 'Open Sans';
        display: block;
        text-decoration: none;
        border-radius: 30px;
        line-height: 1;
        padding: 12px 20px 10px;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        position: relative;
        box-sizing: border-box;
        border: 2px solid #48a415;
        background-color: #FFF;
        color: #48a415;
        cursor: pointer;
    }
    .btn:hover,
    .btn:focus {
        color: #FFF;
        background-color: #367b10;
        border-color: #367b10;
        box-shadow: none;
    }
    .btn__primary,
    .btn__secondary {
        display: inline-block;
        width: 100%;
        text-decoration: none;
        font-weight: 700;
        position: relative;
        color: #fff;
        border-color: #48a415;
        background-color: #48a415;
        box-shadow: 0 2px 0 0 #c6cacc;
    }
    .btn__secondary {
        color: #00aeef;
        background-color: transparent;
        width: auto;
        border-color: #00aeef;
        box-shadow: none;
    }
    .btn__secondary:hover,
    .btn__secondary:focus {
        color: #FFF;
        background-color: #00aeef;
        border-color: #00aeef;
        box-shadow: none;
    }
</style>
