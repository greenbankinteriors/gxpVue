export default {
    methods: {
        saveDependant(evt) {
            var vueIn = this;

            console.log(vueIn);
            var wrap = vueIn.getParent(evt.currentTarget, 'dependant__answers'),
                field = wrap.parentElement,
                questions = wrap.querySelectorAll('.form-field'),
                cancelLink = field.querySelector('.dependant__cancel'),
                valid = true;

            // VALIDATION
            var validate = function (question) {
                var valid = true;

                var validateDate = function () {
                    // DATES
                    var dInputs = question.querySelectorAll('input[type="tel"]'),
                        dField = question.querySelector('.form-num-wrap'),
                        date = dInputs[0].value + '/' + dInputs[1].value + '/' + dInputs[2].value;

                    for (var i = 0; i < dInputs.length; i++) {
                        if (dInputs[i].value == '') {
                            valid = false;
                            dField.classList.remove('error-input');
                            break;
                        } else if (!isValidDate(date)) {
                            dField.classList.add('error-input');
                        } else {
                            dField.classList.remove('error-input');
                        }
                    }

                }

                var validateText = function () {
                    question.querySelectorAll('input[type="text"]').forEach(function (textField) {
                        if (textField.value == '') {
                            valid = false;
                        }
                    })
                }

                var validateRadio = function () {
                    var checked = false;
                    question.querySelectorAll('input[type="radio"]').forEach(function (radioField) {
                        if (radioField.checked == true) {
                            checked = true;
                        }
                    })
                    valid = checked;
                }

                switch (true) {
                    case question.querySelector('.form-num-wrap') !== null:
                        validateDate();
                        break;
                    case question.querySelector('input[type="text"]') !== null:
                        validateText();
                        break;
                    case question.querySelector('input[type="radio"]') !== null:
                        validateRadio();
                        break;
                }

                if (!valid) {
                    question.classList.add('error');
                } else {
                    question.classList.remove('error');
                }
                console.log(valid)

                return valid;
            }

            for (var i=0; i < questions.length; i++) {
                if (!validate(questions[i])) {
                    valid = false;
                }
            }

            console.log(valid)

            // PASSED VALIDATION
//            if (valid) {
//                var openCard = field.querySelector('.editing');
//                field.setAttribute('data-card', true);
//                var newCard = '';
//                var vals = [];
//
//                var newEntry = {};
//                wrap.querySelectorAll('input').forEach(function (i) {
//                    var val = i.value;
//                    if (i.type == 'text' | i.type == 'tel') {
//                        console.log(this);
//                        val = globalFoo.capitalise(val);
//                    }
//                    vals.push(val);
//                    newEntry[i.id] = val;
//                });
//
//                if (openCard) {
//                    var cardId = openCard.id.split('-')[1];
//                    newCard = openCard;
//                    var arrKey = cardId - 1;
//
//                    cardStore[arrKey] = newEntry;
//                } else {
//                    cardCount = cardCount + 1;
//                    newCard = field.querySelector('.card__primative').cloneNode(true);
//                    field.querySelector('.card-wrap').appendChild(newCard);
//                    newCard.id = 'card-' + cardCount;
//
//                    createUndo(newCard);
//
//                    newCard.querySelector('.edit').addEventListener('click', function () {
//                        field.setAttribute('data-status', 'edit');
//                        var cards = field.querySelectorAll('.card:not(.card__hidden)');
//                        cards.forEach(function (c) {
//                            c.classList.remove('editing');
//                        })
//                        newCard.classList.add('editing');
//                        var cardId = (newCard.id.split('-')[1]) - 1;
//                        var entry = cardStore[cardId];
//                        for (var key in entry) {
//                            if (entry.hasOwnProperty(key)) {
//                                document.getElementById(key).value = entry[key];
//                            }
//                        }
//                    });
//
//                    newCard.querySelector('.remove').addEventListener('click', function () {
//                        newCard.className = 'card removed';
//                        field.setAttribute('data-status', 'closed');
//                    });
//
//                    cardStore.push(newEntry);
//                }
//
//                newCard.className = 'card';
//                newCard.querySelectorAll('.card__name').forEach(function (n) {
//                    n.textContent = vals[0] + ' ' + vals[1];
//                });
//                var age = new Date(vals[4], vals[3] - 1, vals[2]);
//                newCard.querySelector('h2').textContent = getAge(age) + ' years old';
//
//                field.setAttribute('data-status', 'closed');
//            }

        }
    }
}
