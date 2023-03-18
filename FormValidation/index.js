function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    let selectorRules = {}

    //Function implementation validate
    function validate(inputElement, rule) {
        // let errorElement = inputElement.parentElement.querySelector('.form-message')
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
        // let errorMessage = rule.test(inputElement.value)
        let errorMessage

        // lấy ra các rules của selector
        let rules = selectorRules[rule.selector]
        // Lặp qua từng rules & check
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checbox':
                    errorMessage = rules[i](inputElement.value)
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            // Nếu có lỗi thì dừng kiểm tra
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
    }
    // Lất Element của Form
    let formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault()

            let isFormValid = true;

            // Lặp qua từng rule và validate 
            options.rules.forEach((rule) => {
                let inputElement = formElement.querySelector(rule.selector)
                let isValid = validate(inputElement, rule)
                if (!isValid) isFormValid = false
            })
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    let enableInputs = formElement.querySelectorAll('[name]')
                    let formValues = Array.from(enableInputs).reduce((values, input) => {
                        values[input.name] = input.value
                        return values
                    }, {})
                    options.onSubmit(formValues)
                } else {
                    formElement.submit()
                }
            }
        }
        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach((rule) => {
            // Lưu lại các rule trong mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            let inputElement = formElement.querySelector(rule.selector)
            let errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
            if (inputElement) {
                // Xử lý TH blur ra ngoài
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }
                // Xử lý khi người dùng nhập vào input
                inputElement.oninput = () => {
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            }
        })
    }
}
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!'
        }
    }
}
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Trường này phải là email!'
        }
    }
}
Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}
Validator.isConfirmed = function(selector, confirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === confirmValue() ? undefined : message || 'Vui lòng nhập trường này!'
        }
    }
}

Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    rules: [
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirmed('#password_confirmation', function() {
            let value = document.querySelector('#form-1 #password').value
            return value
        }, 'Mật khẩu xác nhận chưa chính xác!'),
        Validator.isRequired('#gender')
    ],
    onSubmit: function(data) {
        console.log(data)
    }
})