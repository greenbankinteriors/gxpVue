<template>
    <div>
        <button v-bind:class="testClass" v-on:click="changeText">{{ testText }}</button>
    </div>
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
            changeText: function() {
                this.testText = 'New button text'
                this.testClass = 'btn btn__test'
            }
        }
    }

</script>

<style>

</style>
