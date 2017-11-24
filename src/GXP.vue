<template>
    <main>
        <router-view></router-view>
        <footer>Footer</footer>
    </main>
</template>

<script>

    import { bus } from './main.js'
    import componentData from './structure.json'

    export default {

        components: {

        },
        data() {
            return {
                pageName: 'GXP',
                molecule: '',
                components: componentData,
                route: this.$route.path
            }
        },
        created() {
            bus.$once('pageInfo', (data) => {
                console.log(data.name)
                console.log(data.molecule)
                this.pageName = data.name;
                this.molecule = data.molecule;
            })
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
    section {
/*        padding: 20px;*/
    }
    ul {
        list-style: none;
        padding: 0;
    }
</style>
