<template>
    <section>
        <header>
            <div>
                <div>
                    <p class="molecular-desc">{{ molecule }}</p>
                    <h1>{{ pageName }}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Select a variant to view</h3>
                    <ul class="variants">
                        <li v-for="(variant, index) in variants" @click="test">{{ variant }}</li>
<!--                        <li @click="test">Multi-line</li>-->
                    </ul>
                </div>
                <aside>
                    <b>Last updated</b>
                    <p>30 Oct 2017</p>
                    <b>Version</b>
                    <p>1.0</p>
                    <b>Contributors</b>
                    <ul class="contributors">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </aside>
            </div>
        </header>
        <article>
            <slot></slot>
        </article>
    </section>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'

    export default {

        components: {

        },
        data() {
            return {
                pageName: 'GXP',
                molecule: 'component',
                variants: '',
                htmlCode: '',
                styleCode: '',
                route: this.$route.path
            }
        },
        methods: {
            test(event) {
                //get variants

                //get comps
                event.currentTarget.classList.add('active');
            }
        },
        beforeCreate() {
            globalCount.counter = 0;
        },
        beforeMount() {
            bus.$on('pageInfo', (data) => {
//                console.log(data.name)
//                console.log(data.molecule)
                this.pageName = data.name;
                this.molecule = data.molecule;
                this.variants = data.variants;
            })
        }

    }

</script>

<style scoped>
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
    header {
        padding: 0;
        display: flex;
        justify-content: center;
        background-color: #411e56;
    }
    header > div {
        display: flex;
        justify-content: space-between;
        background-color: #411e56;
        box-sizing: border-box;
        text-align: left;
        padding: 80px 130px 0;
    }
    @media (min-width: 1200px) {
        header > div {
            max-width: 1180px;
            padding: 80px 0 0;
        }
    }
    header > div > div {
        padding-right: 60px;
    }
    header > div > div > p {
        font: 400 16px 'Open Sans';
    }
    .molecular-desc {
        font: normal 14px 'Open Sans';
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    h1 {
        font: 900 42px 'Open Sans';
        margin-bottom: 20px;
        letter-spacing: -0.5px;
    }
    h3 {
        font: 700 18px 'Open Sans';
        padding: 40px 0 20px;
    }
    .variants {
        display: flex;
        margin-bottom: 15px;
    }
    .variants li {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3px 20px;
        border-right: solid 1px rgba(187, 169, 199, 0.5);
        position: relative;
        font-weight: 400;
        cursor: pointer;
        text-decoration: underline;
        transition: all 0.1s ease-in;
    }
    .variants li.active {
        font-weight: 700;
        text-decoration: none;
    }
    .variants li:before {
        content: '';
        background-color: #bba9c7;
        height: 5px;
        width: 0%;
        position: relative;
        top: calc(100% + 13px);
        transition: all 0.1s ease-in;
    }
    .variants li.active:before {
        width: 100%;
    }
    .variants li:first-of-type {
        padding-left: 0;
    }
    .variants li:last-of-type {
        border-right: none;
    }
    aside {
        display: table;
        padding: 0 0 0 25px;
        font-size: 14px;
        border-left: solid 1px rgba(187, 169, 199, 0.5);
    }
    aside b {
        display: block;
        padding-bottom: 4px;
    }
    aside p {
        font-weight: 400;
        padding-bottom: 12px;
    }
    aside .contributors {
        display: flex;
        padding-top: 6px;
    }
    aside .contributors li {
        display: block;
        height: 45px;
        width: 45px;
        margin-right: 10px;
        background-color: #fff;
        border-radius: 40px;
    }
    article {
        max-width: 1180px;
        margin: 0 auto;
        padding: 60px 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    .component {
        display: none;
    }
    .component.active {
        display: block;
    }
    .syntax {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
    }
    .syntax > div {
        width: calc(50% - 20px);
    }
    .syntax p {
        margin-bottom: 10px;
        font: 700 18px 'Open Sans';
        color: #411e56;
    }
    .syntax pre {
        box-sizing: border-box;
        color: #411e56;
        font: 600 16px 'Open Sans';
        resize: none;
        height: 200px;
        width: 100%;
        overflow: scroll;
    }
</style>
