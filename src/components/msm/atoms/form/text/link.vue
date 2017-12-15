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
    .edit:before,
    .remove:before {
        content: 'Edit';
        display: inline-block;
        height: 22px;
        color: #00aeef;
        position: relative;
        padding: 3px 0 0 24px;
        background-repeat: no-repeat;
        background-size: 20px;
        background-position: left center;
        background-image: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="5" d="M84.4,21.6l-6-6c-1.6-1.5-4-1.5-5.5,0l-42,42l-6.4,17.9L42.5,69l42-42C85.9,25.6,85.9,23.2,84.4,21.6z"/><line stroke-width="3" x1="31" y1="57.5" x2="42.5" y2="69"/><line stroke-width="2" x1="67.1" y1="21.4" x2="78.6" y2="32.9"/><line stroke-width="2" x1="64.1" y1="24.4" x2="75.6" y2="35.9"/><polyline stroke-width="5" points="79.2,53.2 79.2,85.6 14.4,85.6 14.4,20.8 46.8,20.8"/></g></svg>');
    }
    .remove:before {
        content: 'Remove';
        height: 20px;
        background-size: 16px;
        padding-left: 22px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17"><g fill="#00AEEF" fill-rule="evenodd"><path d="M5.893 1.91h3.053v-.163a.835.835 0 0 0-.83-.837H6.723a.835.835 0 0 0-.83.837v.162zm3.414.727H5.531a.363.363 0 0 1-.361-.364v-.526A1.56 1.56 0 0 1 6.723.182h1.393a1.56 1.56 0 0 1 1.553 1.565v.526a.363.363 0 0 1-.362.364zM3.97 12.935V7.736c0-.251.202-.455.452-.455s.452.204.452.455v5.199a.453.453 0 0 1-.452.455.453.453 0 0 1-.452-.455zM10.057 12.935V7.736c0-.251.202-.455.451-.455.25 0 .452.204.452.455v5.199a.453.453 0 0 1-.452.455.453.453 0 0 1-.451-.455z"/><path d="M13.935 4.151a.52.52 0 0 1-.518.522H1.422a.52.52 0 0 1-.518-.522v-.852a.52.52 0 0 1 .518-.522h11.995a.52.52 0 0 1 .518.522v.852zm-2.141 11.656H3.149a.796.796 0 0 1-.792-.799V5.583h10.229v9.425c0 .44-.356.799-.792.799zm1.623-13.94H1.422C.638 1.866 0 2.508 0 3.298v.852c0 .79.638 1.432 1.422 1.432h.031v9.425c0 .943.761 1.71 1.696 1.71h8.645c.935 0 1.696-.767 1.696-1.71V5.58a1.428 1.428 0 0 0 1.349-1.429v-.852c0-.79-.638-1.433-1.422-1.433z"/><path d="M7.013 12.933V7.734c0-.251.203-.455.452-.455.25 0 .452.204.452.455v5.199a.453.453 0 0 1-.452.455.453.453 0 0 1-.452-.455z"/></g></svg>');
    }
</style>
