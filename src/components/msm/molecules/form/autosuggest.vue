<template>
    <div class="autosuggest">
        <msm-input type="text"
                   elPlaceholder="Type something..."
                   ref="searchBox"
                   @keyup.native="searchAuto" />
        <div v-show="searchFound">
            <ul class="scrollable-select" ref="searchResults"></ul>
        </div>
    </div>
</template>

<script>

    import { globalCount } from '../../../../main.js'
    import msmText from '../../atoms/form/input/default'

    export default {

        components: {
            'msm-input': msmText
        },
        props: {
        },
        data() {
            return {
                gCount: globalCount.counter,
                searchFound: false,
                cities: [
                    'Amsterdam', 'Belfast', 'Cardiff', 'Copenhagen', 'Dublin',
                    'Edinburgh', 'London', 'Paris'
                ]
            }
        },
        methods: {
            splitWords(str) {
                var items = [];
                str.split(/[ -]+/).forEach(function(o){
                    if (o.length > 0) {
                        items.push(o.toLowerCase());
                    }
                });
                return items;
            },
            arrayUnique(array) {
                var a = array.concat();
                for(var i=0; i<a.length; ++i) {
                    for(var j=i+1; j<a.length; ++j) {
                        if(a[i] === a[j])
                            a.splice(j--, 1);
                    }
                }
                return a;
            },
            searchAuto(event) {
                var vueIns = this,
                    el = event.currentTarget,
                    resultsWrap = vueIns.$refs.searchResults,
                    vueAttr = [],
                    val = event.currentTarget.value.toLowerCase(),
                    opts = vueIns.splitWords(val),
                    searchArr = vueIns.cities,
                    results = [];

                for (var i=0, atts = resultsWrap.attributes, n = atts.length; i < n; i++){
                    if (atts[i].nodeName.indexOf('data-v') !== -1) {
                        vueAttr.push(atts[i].nodeName)
                    }

                }

                if (val.length > 2) {
                    searchArr.forEach(function(c){
                        var searchTitle = vueIns.splitWords(c);

                        searchTitle = vueIns.arrayUnique(searchTitle);

                        var getResults = function(array){
                            for (var i = 0; i < array.length; i++) {
                                var findVal = function(match) {
                                   return match == array[i];
                                }
                                if (opts.some(findVal)) {
                                    results.push(c);
                                    break;
                                }
                                if (array[i].search(val) >= 0) {
                                    results.push(c);
                                    break;
                                }
                            }
                        }

                        getResults(searchTitle);
                    })

                    resultsWrap.innerHTML = "";

                    var resultsArr = results;

                    if (resultsArr.length > 0) {
                            resultsArr.forEach(function(r){
                                var item = document.createElement('li'),
                                    str = r;

                                var int = str.search(val);
                                int == -1 ? int = 0 : int = int;

                                var strSplit = str.split(' ');
                                var valSplit = val.split(' ');

                                var highlightVal = "";
                                var matched = [];

                                strSplit.forEach(function(a) {
                                    if (valSplit.indexOf(a.toLowerCase()) >= 0) {
                                        matched.push(a);
                                        highlightVal += "<span class='hg'> " + a + "</span>";
                                    }
                                    else {
                                        highlightVal += ' ' + a + ' ';
                                    }
                                })

                                matched = vueIns.arrayUnique(matched);

                                if (matched.length == 0) {
                                    highlightVal = str.substring(0, int) + "<span class='hg'>" + val + "</span>" + str.substring((int + val.length), str.length);
                                }

                                item.innerHTML = highlightVal;

                                for(var i=0; i < vueAttr.length; i++) {
                                    item.setAttribute(vueAttr[i], '')
                                    item.querySelector('span').setAttribute(vueAttr[i], '')
                                }

                                vueIns.searchFound = true;
                                item.addEventListener('click', function(){
                                    vueIns.$refs.searchBox.$el.value = str;
                                    vueIns.searchFound = false;
                                });
                                resultsWrap.appendChild(item);

                            })
                        }
                        else {
                            vueIns.searchFound = true;
                            var li = document.createElement('li');
                            li.textContent = "No results found";

                            for(var i=0; i < vueAttr.length; i++) {
                                li.setAttribute(vueAttr[i], '')
                            }

                            resultsWrap.appendChild(li);
                        }

                }
                else {
                    vueIns.searchFound = false;
                    resultsWrap.innerHTML = "";
                }

            }
        },
        created() {
            globalCount.counter = globalCount.counter + 1;
        }
    }

</script>

<style scoped>
    .autosuggest {
        position: relative;
    }
    .autosuggest:before {
        content: '';
        height: 24px;
        width: 24px;
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><g stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none" stroke="#949899"><circle cx="58.4" cy="41.6" r="19.9"/><line x1="21.7" y1="78.3" x2="43.3" y2="56.7"/></g></svg>') center center no-repeat;
        background-size: contain;
        position: absolute;
        top: 14px;
        right: 9px;
        transform: scale(-1, 1);
        transform-origin: center;
        z-index: 0;
    }
    .autosuggest input[type=text] {
        padding-right: 40px;
    }
    .autosuggest .scrollable-select {
        position: relative;
        max-height: 200px;
        border-radius: 3px;
        overflow-y: scroll;
        box-shadow: 0 2px 7px 0 #c6cacc;
        font: 700 14px 'Open Sans';
        color: #566266;
        border: solid 1px #c6cacc;
    }
    .autosuggest .scrollable-select li {
        text-transform: capitalize;
        padding: 10px 15px;
        border-bottom: solid 1px #c6cacc;
    }
    .autosuggest .scrollable-select li:last-of-type {
        border: none;
    }
    .autosuggest .scrollable-select li:hover,
    .autosuggest .scrollable-select li:focus {
        background-color: #00aeef;
        color: #fff;
        cursor: pointer;
    }
    .autosuggest .scrollable-select {
        margin-top: 20px;
    }
    .autosuggest > div {
        position: relative;
    }
    .autosuggest > div:before {
        content: '';
        border: 7px solid red;
        border-color: white transparent transparent white;
        box-shadow: -1px -1px 0px 0 #c7cacc;
        transform: rotate(45deg);
        display: block;
        position: absolute;
        top: -6px;
        left: 20px;
        z-index: 1;
    }
    .autosuggest .scrollable-select li .hg {
        color: #fff;
        background-color: #00aeef;
    }
</style>
