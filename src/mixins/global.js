export default {
    methods: {
        // SUPER HELPFUL FUNCTIONS: LET ME TAKE YOU TO FUNC-Y TOWN
        removeDup(arr) { // REMOVES DUPS IN ARRAY
            var unique = arr.filter(function (elem, index, self) {
                return index == self.indexOf(elem);
            });
            return unique;
        },
        //TRAVERSES DOM TO GET PARENT FROM ORIG EL AND CLASS
        getParent(el, cls) {
            while (el.parentNode) {
                el = el.parentNode;
                if (el.classList) {
                    if (el.classList.contains(cls))
                    return el;
                }
            }
            return null;
        },
        // GETS AGE IN mmddyyyy FORMAT
        getAge(birthday) {
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        // CHECKS DATE VALIDATION
        isValidDate(dateString) {
            if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
                return false;

            var parts = dateString.split("/");
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);

            if (year < 1900 || year > 2017 || month == 0 || month > 12)
                return false;

            var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                monthLength[1] = 29;

            return day > 0 && day <= monthLength[month - 1];
        },
        // CLEARS INPUTS
        clearValues(inputs) {
            inputs.forEach(function (i) {
                switch (i.type) {
                    case 'radio':
                    case 'checkbox':
                        i.checked = false;
                        break;
                    case 'text':
                    case 'tel':
                    case 'email':
                    case 'password':
                        i.value = '';
                        break;
                }
            });
        },
        capitalise(string) {
            if (string !== "") {
                return string.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
            }
        }
    }
}
