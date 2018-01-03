<template>
    <gxp-page pageClass="directory">
        <a @click="principle=true" :class="principle?'active':''">Design Principles</a>
        <span>|</span>
        <a @click="principle=false" :class="principle?'':'active'">Development Principles</a>
        <section v-show="principle">
            <h1>Design Principles</h1>
            <ul>
                <li>
                    <label>User needs first</label>
                    <p>Our experiences will be designed to solve genuine customer problems first and foremost, as identified by robust research and data analysis</p>
                </li>
                <li>
                    <label>Familiar</label>
                    <p>Our experiences will be consistent and recognisably MSM. We will apply the Reset GXP optimally across the website, ensuring interactions are familiar and natural</p>
                </li>
                <li>
                    <label>Insight-led</label>
                    <p>Our experiences will be designed from real customer insight. Where this is not available we will always test and measure our hypotheses with rigour</p>
                </li>
                <li>
                    <label>Mobility</label>
                    <p>Our designs will give customers the ability to quickly complete their task wherever and whenever they need to, regardless of which or how many devices they choose</p>
                </li>
                <li>
                    <label>Simplicity</label>
                    <p>Our experiences will be ruthlessly intuitive and will never need instructions. Our focus on visual simplicity will reduce cognitive &amp; visual noise to build user confidence</p>
                </li>
                <li>
                    <label>Ask once</label>
                    <p>We will never ask the same question twice, or prepopulate forms when we can remove questions entirely. We will only ask for data if it is needed for the task in hand</p>
                </li>
                <li>
                    <label>Personal</label>
                    <p>We will use what we know about customers to help them complete tasks more quickly, to make choices more easily, and save money more often</p>
                </li>
                <li>
                    <label>Whole lifecycle</label>
                    <p>We will design for all stages of a customer relationship – enquirers, buyers, new and returning</p>
                </li>
            </ul>
        </section>
        <section v-show="!principle">
            <h1>Development Principles</h1>
            <ul>
                <li>
                    <label>Keep it simple</label>
                    <p>These components are intentionally simple so they can convey the design and provide a basis for further development to the widest possible audience</p>
                </li>
                <li>
                    <label>Keep it small</label>
                    <p>Reducing code bloat and unneccesary requests are essential for performant components. We should only load what is needed</p>
                </li>
                <li>
                    <label>Device agnostic</label>
                    <p>Components should not be built to cater for specific device types or sizes, rather they should be built for available features</p>
                </li>
                <li>
                    <label>No libraries</label>
                    <p>As these components are to be used by internal and external white-label teams, no libraries are used</p>
                </li>
                <li>
                    <label>Latest standards</label>
                    <p>All components must validate to the latest standards. No effort has been made to make the components here work for legacy browsers</p>
                </li>
                <li>
                    <label>Accessible</label>
                    <p>Components should demonstrate baked-in accessibility standards that can be demostrated at the atomic level</p>
                </li>
            </ul>
        </section>
    </gxp-page>
</template>

<script>

    import { bus } from './main.js'
    import componentData from './structure'

    export default {

        data() {
            return {
                components: componentData,
                name: 'Global Experience Principals',
                molecule: 'Moneysupermarket GXP',
                principle: true
            }
        },
        mounted() {
            bus.$emit('pageInfo', {
                "name": this.name,
                "molecule": this.molecule,
                "pageType": 'home'
            });
        }
    }

</script>

<style scoped>
    a {
        display: inline-block;
        position: relative;
        cursor: pointer;
        font-size: 14px;
    }
    a.active {
        color: #411e56;
    }
    a:before {
        content: '';
        background-color: #411e56;
        height: 5px;
        width: 0%;
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transition: all 0.1s ease-in;
    }
    a.active:before {
        width: 100%;
        left: 0;
    }
    span {
        display: inline-block;
        padding: 0 5px 50px;
    }
    h1 {
        font: 500 36px 'gb';
        color: #411e56;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 30px;
        padding-bottom: 40px;
    }
    ul label {
        display: block;
        font: 700 18px 'Open Sans';
        color: #411e56;
        padding-bottom: 10px;
    }
    ul p {
        font: 500 14px 'Open Sans';
        color: #566266;
    }
</style>
