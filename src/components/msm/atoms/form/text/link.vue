<template>
    <a :class="elClass">{{ elText }}</a>
</template>

<script>

    import { globalCount } from '../../../../../main.js'

    export default {

        props: {
            elClass: '',
            elText: {
                default: 'See more'
            }
        },
        data() {
            return {
                gCount: globalCount.counter
            }
        },
        methods: {},
        created() {
            globalCount.counter = globalCount.counter + 1;
        }

    }

</script>

<style scoped>
    a {
        display: inline-block;
        position: relative;
        font-size: 14px;
        line-height: 1.38;
        font-weight: 700;
        color: #00aeef;
        padding: 10px 20px 10px 0;
        max-width: 748px;
        cursor: pointer;
    }
    a:hover,
    a:focus {
        text-decoration: underline;
        color: #0083b3;
    }
    a.right__arrow:after {
        content: '';
        display: inline-block;
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#00aeef" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
        background-size: contain;
        height: 24px;
        width: 24px;
        position: relative;
        right: 0px;
        top: 7px;
    }
    a.right__arrow:hover:after,
    a.right__arrow:focus:after {
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#0083b3" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
    }
</style>
