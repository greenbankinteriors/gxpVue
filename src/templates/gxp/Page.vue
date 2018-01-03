<template>
    <section :class="pageClass">
        <header>
            <router-link class="home-link" to="/"></router-link>
            <div>
                <div class="pageTitle">
                    <div>
                        <p class="molecular-desc">{{ molecule }}</p>
                        <h1>{{ pageName }}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <aside class="pageDetails" v-show="pageType=='comp'">
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
                <div v-if="pageType=='home'" class="pageView">
                    <p>ATOMIC DESIGN | Select to view</p>
                    <ul>
                        <li v-for="(component, index) in components" :class="component.inactive?'inactive':''">
                            <a v-if="component.inactive">{{ component.type }}</a>
                            <router-link v-else :to="'/components/'+component.type" exact>{{ component.type }}</router-link>
                            <p>{{ component.desc }}</p>
                        </li>
                    </ul>
                </div>
                <div v-else-if="pageType=='root'">
                    <h3>Select an element</h3>
                    <ul class="variants">
                        <li v-for="(page, index) in components" :class="page.inactive?'inactive':''">
                            <a v-if="page.inactive">{{ page.type }}</a>
                            <router-link v-else :to="'/components/'+page.type" exact>{{ page.type }}</router-link>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <h3>Select a variant to view</h3>
                    <ul class="variants">
                        <li v-for="(variant, index) in variants" @click="toggleVar">
                            <p>{{ variant }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <article v-if="pageType=='home'">
            <slot></slot>
        </article>
        <article v-else>
            <ul class="components">
                <slot></slot>
            </ul>
        </article>
    </section>
</template>

<script>

    import { bus } from '../../main.js'
    import { globalCount } from '../../main.js'
    import componentData from '../../structure'

    export default {

        props: {
            pageClass: ""
        },
        data() {
            return {
                components: componentData,
                pageName: 'Global Experience Principals',
                molecule: 'components',
                pageType: '',
                rootPage: false,
                contributors: '',
                variants: '',
                activeVar: '',
                htmlCode: '',
                styleCode: '',
                route: this.$route.path
            }
        },
        methods: {
            toggleVar(event) {
                var parent = event.currentTarget.parentElement,
                    variants = parent.children;

                for(var i=0; i<variants.length; i++) {
                    var variant = variants[i];
                    if (variant === event.currentTarget) {
                        this.activeVar = i;
                    }
                }
                this.setVariant()
            },
            setVariant() {
                var variants = document.querySelectorAll('.variants li');
                for(var i=0; i < variants.length; i++) {
                    var variant = variants[i],
                        components = document.querySelector('.components');

                    if (i==this.activeVar) {
                        variant.classList.add('active');
                        if (this.pageType=='comp') {
                            components.style.transform = 'translate3d(-' + i + '00%, 0, 0)';
                        }
                    }
                    else {
                        variant.classList.remove('active');
                    }
                }
            }
        },
        beforeCreate() {
            globalCount.counter = 0;
        },
        beforeMount() {
            bus.$on('pageInfo', (data) => {
                this.pageName = data.name;
                this.molecule = data.molecule;
                this.variants = data.variants;
                this.activeVar = data.activeVar;
                this.pageType = data.pageType ? data.pageType : "comp";
            })
        },
        updated() {
            this.setVariant();
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
        background-color: #2b3133;
        color: #eee;
        padding: 20px;
        text-align: center;
    }
    header {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #411e56;
        padding-top: 100px;
        text-align: left;
    }
    header .home-link:after {
        content: '';
        width: 120px;
        height: 58px;
        display: block;
        position: absolute;
        top: 15px;
        right: 20px;
        background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="116" height="58" viewBox="0 0 116 58"><g fill="none" fill-rule="evenodd"><text fill="#BBA9C7" font-family="OpenSans-Light, Open Sans" font-size="14" font-weight="300" letter-spacing="1.5"><tspan x="26" y="20">GLOBAL</tspan> <tspan x="26" y="36">EXPERIENCE</tspan> <tspan x="26" y="52">PRINCIPLES</tspan></text><path fill="#BBA9C7" fill-opacity=".5" d="M0 0h20v58H0z"/><text fill="#411E56" font-family="OpenSans-Bold, Open Sans" font-size="14" font-weight="bold" letter-spacing="1.5"><tspan x="5" y="20">G</tspan> <tspan x="5" y="36">X</tspan> <tspan x="5" y="52">P</tspan></text></g></svg>') center center no-repeat;
        background-size: 100px;
    }
    header > div {
        margin: 0 auto;
    }
    header .pageTitle {
        display: flex;
        justify-content: space-between;
    }
    header .pageTitle > div {
        padding-right: 275px;
    }
    @media (min-width: 1200px) {
        header > div {
            max-width: 1180px;
/*            padding: 100px 0 0;*/
        }
    }
    header > div > div > p {
        font: 400 16px 'Open Sans';
    }
    .molecular-desc,
    .pageView > p {
        font: normal 14px 'Open Sans';
        text-transform: uppercase;
        margin-bottom: 10px;
        color: #bba9c7;
    }
    h1 {
        font: 400 42px 'gb';
        margin-bottom: 20px;
        letter-spacing: -0.5px;
    }
    h3 {
        font: 700 18px 'Open Sans';
        padding: 30px 0 20px;
    }
    .pageView {
        padding-top: 55px;
    }
    .pageView > p {
        text-transform: none;
        margin-bottom: 15px;
    }
    .pageView ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 30px;
        text-align: center;
        padding-bottom: 40px;
    }
    .pageView ul p {
        padding: 0 10px;
        font: normal 14px 'Open Sans';
    }
    .pageView a {
        width: 100%;
        padding: 90px 0 20px;
        margin-bottom: 15px;
        font: normal 18px 'gb';
        color: #411e56;
        text-transform: capitalize;
        background-color: #fff;
    }
    .pageView li:not(.inactive) {
        cursor: pointer;
        position: relative;
    }
    .pageView li.inactive a {
        color: #bba9c7;
    }
    .pageView li:not(.inactive):hover a {
        background-color: #bba9c7;
        color: #fff;
    }
    .pageView li:not(.inactive):before {
        content: '';
        background-color: #bba9c7;
        height: 5px;
        width: 0%;
        position: absolute;
        top: calc(100% + 35px);
        left: 50%;
        transition: all 0.1s ease-in;
    }
    .pageView li:not(.inactive):hover:before {
        width: 100%;
        left: 0;
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
        font-weight: 700;
        text-transform: capitalize;
        transition: all 0.1s ease-in;
    }
    .variants li:not(.inactive):hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .variants li.inactive a {
        color: #bba9c7;
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
    .variants li a {
        color: #fff;
    }
    .variants li a.disabled {
        color: #bba9c7;
        cursor: default;
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
        max-width: 1184px;
        margin: 0 auto;
        padding: 60px 0;
        overflow: hidden;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    .components {
        display: flex;
        flex-grow: 1;
        position: relative;
        transition: all 0.3s ease-in-out;
        max-width: 1184px;
    }
    .component {
        display: block;
        min-width: 100%;
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

    /*Components page*/

</style>
