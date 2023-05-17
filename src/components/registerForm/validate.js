const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Required'
    }

    if (!formValues.surname) {
        errors.surname = 'Required'
    }

    if (!formValues.birthDate) {
        errors.birthDate = 'Required'
    }

    if (!formValues.sex) {
        errors.sex = 'Required'
    }

    if (!formValues.phoneNumber) {
        errors.phoneNumber = 'Required'
    }

    if (!formValues.email) {
        errors.email = 'Required'
    } else if (!/^[A-z\d*]+@[A-z.]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
    }

    if (!formValues.password) {
        errors.password = 'Required'
    } else if (formValues.password) {
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = formValues.password.length;
        const uppercasePassword = uppercaseRegExp.test(formValues.password);
        const lowercasePassword = lowercaseRegExp.test(formValues.password);
        const digitsPassword = digitsRegExp.test(formValues.password);
        const specialCharPassword = specialCharRegExp.test(formValues.password);
        const minLengthPassword = minLengthRegExp.test(formValues.password);
        if (passwordLength === 0) {
            errors.password = "Password is empty";
        } else if (!uppercasePassword) {
            errors.password = "At least one Uppercase";
        } else if (!lowercasePassword) {
            errors.password = "At least one Lowercase";
        } else if (!digitsPassword) {
            errors.password = "At least one digit";
        } else if (!specialCharPassword) {
            errors.password = "At least one Special Characters";
        } else if (!minLengthPassword) {
            errors.password = "At least minumum 8 characters";
        }
    }

    if (!formValues.repeatPassword) {
        errors.repeatPassword = 'Required'
    } else if (formValues.password !== formValues.repeatPassword) {
        errors.repeatPassword = 'Paswords doesn`t match'
    }

    if (!formValues.clinic) {
        errors.clinic = 'Required'
    }

    if (!formValues.clinicAddress) {
        errors.clinicAddress = 'Required'
    }

    if (!formValues.role) {
        errors.clinicAddress = 'Required'
    } else if (formValues.role === 'patient') {
        if (!formValues.weight) {
            errors.weight = 'Required'
        }
        if (!formValues.height) {
            errors.height = 'Required'
        }
    }

    return errors;
}

export default validate;