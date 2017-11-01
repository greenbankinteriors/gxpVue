<template>
    <main>
        <router-view></router-view>
        <footer>Footer</footer>
    </main>
</template>

<script>

    import { bus } from './main.js'
    import componentData from './components.json'

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

//            var cssSheet = 0;
//
//            function AJAX_CSS_Req(url, tabWrap, title, cssContent) {
//                var AJAX_req = new XMLHttpRequest();
//                AJAX_req.open("GET", url, true);
//                AJAX_req.setRequestHeader("Content-type", "text/css");
//                AJAX_req.onreadystatechange = function () {
//                    if (AJAX_req.readyState == 4 && AJAX_req.status == 200) {
//                        var response = AJAX_req.responseText;
//
//                        var tab = document.createElement('a');
//
//        //                tab.setAttribute('download', title.split('/').pop());
//
//                        tab.textContent = title.split('/').pop();
//                        tab.title = title;
//                        tabWrap.appendChild(tab);
//
//                        tab.addEventListener('click', function() {
//                            var tabs = tabWrap.getElementsByTagName('a');
//                            for (i = 0; i < tabs.length; i++) {
//                                tabs[i].classList.remove('active');
//                            }
//                            this.classList.add('active');
//
//                            cssContent.textContent = '';
//                            cssContent.textContent = response;
//        //                    this.href = "data:application/download;charset=utf-8," + encodeURIComponent(response);
//                        });
//                        if (cssSheet == 0) {
//        //                    console.log('Activated tab')
//                            tab.classList.add('active');
//                            cssSheet = cssSheet + 1;
//                            cssContent.textContent = response;
//                        }
//                    }
//                }
//                AJAX_req.send();
//            };
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
