<template>
    <ul class="scrollable-select">
        <li v-for="option in options" :value="option.value">{{ option.text }}</li>
    </ul>
</template>

<script>

    import { globalCount } from '../../../../main.js'

    export default {
        props: {
        },
        data() {
            return {
                gCount: globalCount.counter,
                options: [
                    {'value': 1, 'text': '1 New Street, Manchester, M4 1BU'},
                    {'value': 2, 'text': '2 New Street, Manchester, M4 1BU'},
                    {'value': 3, 'text': '3 New Street, Manchester, M4 1BU'},
                    {'value': 4, 'text': '4 New Street, Manchester, M4 1BU'},
                    {'value': 5, 'text': '5 New Street, Manchester, M4 1BU'},
                    {'value': 6, 'text': '6 New Street, Manchester, M4 1BU'},
                    {'value': 7, 'text': '7 New Street, Manchester, M4 1BU'},
                    {'value': 8, 'text': '8 New Street, Manchester, M4 1BU'},
                    {'value': 9, 'text': '9 New Street, Manchester, M4 1BU'},
                    {'value': 10, 'text': '10 New Street, Manchester, M4 1BU'},
                    {'value': 11, 'text': '11 New Street, Manchester, M4 1BU'},
                    {'value': 12, 'text': '12 New Street, Manchester, M4 1BU'},
                    {'value': 13, 'text': '13 New Street, Manchester, M4 1BU'},
                    {'value': 14, 'text': '14 New Street, Manchester, M4 1BU'},
                    {'value': 15, 'text': '15 New Street, Manchester, M4 1BU'},
                    {'value': 16, 'text': '16 New Street, Manchester, M4 1BU'},
                    {'value': 17, 'text': '17 New Street, Manchester, M4 1BU'},
                    {'value': 18, 'text': '18 New Street, Manchester, M4 1BU'},
                    {'value': 19, 'text': '19 New Street, Manchester, M4 1BU'},
                    {'value': 20, 'text': '20 New Street, Manchester, M4 1BU'}
                ]
            }
        },
        methods: {

        },
        created() {
            globalCount.counter = globalCount.counter + 1;
        }
    }

</script>

<style scoped>
    .scrollable-select {
        max-height: 200px;
        border-radius: 3px;
        overflow-y: scroll;
        box-shadow: 0 2px 7px 0 #c6cacc;
        font: 700 14px 'Open Sans';
        color: #566266;
        border: solid 1px #c6cacc;
    }
    .scrollable-select li {
        padding: 10px 15px;
        border-bottom: solid 1px #c6cacc;
    }
    .scrollable-select li:last-of-type {
        border: none;
    }
    .scrollable-select li:hover,
    .scrollable-select li:focus {
        background-color: #00aeef;
        color: #fff;
        cursor: pointer;
    }
</style>
