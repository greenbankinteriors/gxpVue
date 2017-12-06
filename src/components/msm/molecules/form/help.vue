<template>
    <div class="form-help">
        <a href="#" class="form-help-trigger" ref="helpTrigger" @click.prevent="tets()"><span>Need help?</span></a>
        <aside class="form-help-wrap">
            <div>
                <h1>Help title</h1>
                <p>Elit quo quibusdam qui sunt de aliqua doctrina se proident, ex quem enim multos excepteur de litteris quorum ad tempor reprehenderit.</p>
                <p>Lorem nam cernantur <a href="#">sed amet an quo voluptate</a> fidelissimae te tempor si lorem consequat, legam fabulas coniunctione a culpa praesentibus fabulas quem nescius.</p>
                <ul>
                    <li>Fore commodo expetendis.</li>
                    <li>Lorem nam cernantur sed amet an quo voluptate fidelissimae te tempor si lorem.</li>
                    <li>Legam fabulas coniunctione a culpa praesentibus</li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>

export default {

    data() {
        return {
            helpOpen: false
        }
    },
    methods: {
        tets() {
            this.$refs.helpTrigger.classList.toggle('open')
        }
    }
}
</script>

<style scoped>
    .form-help-trigger {
        position: absolute;
        width: 20px;
        height: 20px;
        display: block;
        top: 0px;
        right: 0px;
    }
    .form-help-trigger:before {
        content: '';
        width: 18px;
        height: 18px;
        border: 1px solid #00AEEF;
        border-radius: 50%;
        display: block;
        background: #FFF url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><g stroke="none" fill="#00AEEF"><path id="path3339_1_" d="M18.4,93.9c4.2-2.4,10.9-10.6,13.4-16.3l-2.6-1.1c-5.2,9-13.2,15.7-10.5,4.5l15.8-49.7 C30.4,31,9.5,34.4,6.2,35l-0.5,2.7c7.1,0.2,8.1,3.2,7.6,5.6L1.4,81.2c0,0-1.5,4.3-1.4,7.5C0.1,95.9,9.6,98.7,18.4,93.9z"/><path id="path7182_1_" d="M39.1,10.1c0,5.6-4.5,10.1-10.1,10.1s-10.1-4.5-10.1-10.1C18.9,4.5,23.4,0,29,0S39.1,4.5,39.1,10.1 L39.1,10.1z"/></g></svg>') 6px 3px no-repeat;
        background-size: 13px;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.4s ease-in-out;
        transform: rotate(0deg);
    }
    .form-help-trigger.open:before {
        background: #949899 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100"><g fill="none" stroke="#FFF" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><line x1="33.5" y1="33.5" x2="66.5" y2="66.5"/><line x1="66.5" y1="33.5" x2="33.5" y2="66.5"/></g></svg>') center center no-repeat;
        border-color: #949899;
        transform: rotate(360deg);
    }
    .form-help-trigger span {
        width: 0;
        height: 0;
        display: block;
        overflow: hidden;
    }
    .form-help-wrap {
        position: relative;
        transition: all 0.4s ease-in-out;
    }
    .open + .form-help-wrap {
        margin-top: 30px;
    }
    .question-wrap .open + .form-help-wrap {
        margin-top: 0;
    }
    .form-help-wrap:before {
        content: '';
        border: 10px solid #e4f7fd;
        border-width: 0 10px;
        border-color: transparent transparent #e4f7fd;
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transition: all 0.4s ease-in-out;
    }
    .open + .form-help-wrap:before {
        border-bottom-width: 10px;
        top: -10px;
    }
    .form-help-wrap > div {
        background-color: #e4f7fd;
        padding: 0 20px;
        font-weight: 400;
        line-height: 1.29;
        font-size: 14px;
        margin-left: -20px;
        width: 100%;
        transition: all 0.4s ease-in-out;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
    }
    .form-help-trigger.open + .form-help-wrap > div {
        padding: 15px 20px 0;
        max-height: 1000px;
        margin-bottom: 10px;
        opacity: 1;
    }
    .form-help-wrap h1,
    .form-help-wrap h2 {
        padding-bottom: 12px;
        font-weight: 700;
    }
    .form-help-wrap p,
    .form-help-wrap ul {
        color: #566266;
        padding-bottom: 20px;
    }
    .form-help-wrap li {
        padding: 0 0 6px 15px;
        position: relative;
    }
    .form-help-wrap li:before {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #00AEEF;
        position: absolute;
        top: 5px;
        left: 0;
    }
    .form-help-wrap a {
        color: inherit;
    }
    @media all and ( min-width: 340px ){
        .form-help-wrap > div {
            margin-left: 0;
            width: auto;
            border-top-left-radius: 5px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }
    @media all and ( min-width: 620px ){
        .question-wrap .open + .form-help-wrap,
        .open + .form-help-wrap {
            margin-top: 20px;
        }
        .form-help-trigger {
            position: static;
            width: inherit;
            height: inherit;
            font-size: 14px;
            font-weight: 700;
            line-height: 1.29;
            text-decoration: none;
            margin-left: -5px;
        }
        .form-help-trigger:hover {
            text-decoration: underline;
            color: #0083B3;
        }
        .form-help-trigger:focus {
            color: #00AEEF;
            text-decoration: none;
        }
        .form-help-trigger span {
            width: initial;
            height: initial;
            overflow: visible;
            display: inline-block;
        }
        .form-help-trigger:before,
        .form-help-trigger.open:before {
            position: relative;
            background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#00AEEF" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
            display: inline-block;
            border: 0 none;
            top: 4px;
            left: 1px;
            transition: all 0.2s ease-in-out;
        }
        .form-help-trigger.open:before {
            transform: rotate(90deg);
        }
        .form-help-wrap {
            order: 5;
        }
        .form-help-wrap > div {
            border-radius: 5px;
        }
        .form-help-wrap:before {
            right: initial;
            left: 35px;
        }
    }
</style>
