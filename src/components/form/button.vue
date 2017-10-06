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

<style>

</style>
