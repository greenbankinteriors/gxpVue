<template>
</template>

<script>

    import { bus } from './main.js'
    import componentData from './structure'

    export default {

        data() {
            return {
                components: componentData
            }
        }
    }

</script>

<style>
    .components-list {
        display: flex;
        flex-wrap: wrap;
    }
    .components-list > li {
        border: 5px solid #fff;
        box-shadow: inset -2px -2px 3px 0px #444;
        border-radius: 20px;
        padding: 15px;
        background-color: #eee;
    }
    .tags-list li {
        position: relative;
        padding: 10px 10px 0 20px;
    }
    .tags-list li:before {
        content: '';
        left: 0;
        top: 50%;
        position: absolute;
        height: 8px;
        width: 8px;
        border-radius: 10px;
        background-color: #444;
    }
    .pageDetails {
        display: none;
    }
</style>
