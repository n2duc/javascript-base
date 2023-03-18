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
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
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
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    values[input.name] = ''
                                    return values
                                }

                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files
                                break
                            default: 
                                values[input.name] = input.value
                        }
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

            let inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach((inputElement) => {
                // Xử lý TH blur ra ngoài
                inputElement.onblur = () => {
                    validate(inputElement, rule)
                }
                // Xử lý khi người dùng nhập vào input
                inputElement.oninput = () => {
                    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })
        })
    }
}
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này!'
        }
    }
}
Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email!'
        }
    }
}
Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
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
        Validator.isRequired('#province'),
        Validator.isConfirmed('#password_confirmation', function() {
            let value = document.querySelector('#form-1 #password').value
            return value
        }, 'Mật khẩu xác nhận chưa chính xác!'),
        Validator.isRequired('input[name="gender"]', 'Vui lòng lựa chọn giới tính!')
    ],
    onSubmit: function(data) {
        console.log(data)
    }
})