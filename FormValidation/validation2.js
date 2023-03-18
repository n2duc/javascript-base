function Validator(seletor) {
    let formRules = {}
    let _ = this

    function getParent(element, seletor) {
        while (element.parentElement) {
            if (element.parentElement.matches(seletor)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    let validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này!'
        },
        email: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : 'Vui lòng nhập email!'
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự!`
            }
        },
        max: function(max) {
            return function(value) {
                return value.length < max ? undefined : `Tối đa là ${max} ký tự!`
            }
        }
    }

    let formElement = document.querySelector(seletor)
    if (formElement) {
        let inputs = formElement.querySelectorAll('[name][rules]')
        for (let input of inputs) {

            let rules = input.getAttribute('rules').split('|')
            for (let rule of rules) {
                let isRuleHasValue = rule.includes(':')
                let ruleFunc = validatorRules[rule]

                if (isRuleHasValue) {
                    let ruleInfo = rule.split(':')
                    // console.log(validatorRules[rule](ruleInfo[1]))
                    ruleFunc = validatorRules[ruleInfo[0]](ruleInfo[1])
                }
                // console.log(rule)
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc)
                } else {
                    formRules[input.name] = [ruleFunc]
                }
            }

            input.onblur = handleValidate
            input.oninput = handleClearError
        }
        function handleValidate(e) {
            let rules = formRules[e.target.name]
            let errorMessage

            for (let rule of rules) {
                errorMessage = rule(e.target.value)
                if (errorMessage) break
            }
            // console.log(errorMessage)
            // Nếu lỗi thì hiển thị ra UI
            if (errorMessage) {
                let formGroup = getParent(e.target, '.form-group')

                if (formGroup) {
                    formGroup.classList.add('invalid')
                    let formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = errorMessage
                    }
                }
            }
            return !errorMessage
        }

        function handleClearError(e) {
            let formGroup = getParent(e.target, '.form-group')
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid')

                let formMessage = formGroup.querySelector('.form-message')
                    if (formMessage) {
                        formMessage.innerText = ''
                    }
            }
        }
    }

    formElement.onsubmit = (e) => {
        e.preventDefault()

        let inputs = formElement.querySelectorAll('[name][rules]')
        let isValid = true
        for (let input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false
            }
        }

        if (isValid) {
            if (typeof _.onSubmit === 'function') {
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
                _.onSubmit(formValues)
            } else {
                formElement.submit()
            }
        }
    }
    // console.log(formRules)
}