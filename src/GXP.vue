<template>
    <main>
        <header>GXP</header>
        <router-view></router-view>
        <footer>Footer</footer>
    </main>
</template>

<script>
    import componentData from './components.json'

    export default {
        name: 'GXP',
        components: {

        },
        data() {
            return {
                components: componentData,
                route: this.$route.path
            }
        }
    }

</script>

<style>
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 0;
    }
    header,
    footer {
        font-weight: 600;
        background-color: #444;
        color: #eee;
        padding: 20px;
        text-align: center;
    }
    main {
        background-color: #eee;
    }
    section {
        padding: 20px;
    }
    ul {
        list-style: none;
        padding: 0;
    }
</style>
