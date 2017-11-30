<template>
    <gxp-page pageClass="directory">
        <li class="molecules">
            <ul class="pages">
                <li v-for="(page, index) in components[activeVar].pages">
                    <router-link :to="'molecules/' + page.url" exact>
                        <div>IMAGE HERE</div>
                        <p>{{ page.name }}</p>
                        <caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</caption>
                    </router-link>
                </li>
            </ul>
        </li>
    </gxp-page>
</template>

<script>

    import { bus } from '../../main.js'
    import componentData from '../../structure'

    export default {

        data() {
            return {
                components: componentData,
                name: 'Components',
                molecule: 'ATOMIC',
                activeVar: 1,
                variants: ['Atoms', 'Molecules', 'Organisms']
            }
        },
        mounted() {
            bus.$emit('pageInfo', {
                "name":this.name,
                "molecule":this.molecule,
                "rootPage":true,
                "variants": this.variants,
                "activeVar": this.activeVar
            });
        }
    }

</script>

<style>
    .pages {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        max-width: 1180px;
    }
    .pages li {
    }
    .pages a {
        color: #bba9c7;
    }
    .pages li div {
        background-color: #f8f5fa;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
    }
    .pages li p {
        margin: 10px 0 5px;
        font: bold 18px 'Open Sans';
        color: #411e56;
    }
    .pages li caption {
        display: block;
        font: normal 14px 'Open Sans';
        color: #566266;
        text-align: left;
    }
</style>
