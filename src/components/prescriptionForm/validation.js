const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Required'
    }
    if (!formValues.description) {
        errors.description = 'Required'
    }
    if (!formValues.startDate) {
        errors.startDate = 'Required'
    }

    if (!formValues.endDate) {
        errors.endDate = 'Required'
    }
    return errors;
}

export default validate;