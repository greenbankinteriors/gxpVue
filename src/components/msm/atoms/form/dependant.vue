<template>
    <fieldset :id="elId" class="dependant__answers" data-dependant-status="closed">
        <legend>{{ title }}</legend>
        <slot></slot>
    </fieldset>
</template>

<script>

    export default {

        props: {
            elId: "",
            title: ""
        },
        data() {
            return {

            }
        }

    }

</script>

<style scoped>
    /*Dependants*/
    .form .dependant__answers {
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }
    .form .dependant__answers legend {
        padding-left: 15px;
    }
    .form .dependant__answers legend,
    .form [data-dependant] {
        border-left: 5px solid #00AEEF;
        transition: all 0.2s ease-in-out;
    }
    .form [data-dependant] h1 {
        font-size: 24px;
        font-weight: 300;
        color: #2b3133;
        margin-bottom: 10px;
    }
    .form [data-dependant-status='closed'] {
        max-height: 0;
    }
    .form [data-dependant-status='open'],
    .form [data-dependant-status='edit'] {
        max-height: 1500px;
    }
    .form [data-dependant] + [data-dependant] {
        padding-top: 0;
    }
    @media (min-width: 420px) {
        .form .dependant__answers legend,
        .form [data-dependant] {
            margin-left: 20px;
        }
    }
    @media (min-width: 620px) {
        .form .dependant__answers legend,
        .form [data-dependant] {
            border-left-color: #ebf0f2;
            padding-left: 20px;
            border-left-width: 10px;
        }
        .form [data-dependant] h1 {
            display: none;
        }
        .form [data-dependant] > div:nth-of-type(1) {
            width: calc(50% - 5px);
        }
        .form [data-dependant] > div:nth-of-type(2) {
            width: calc(50% + 20px);
        }
    }
</style>
