import {RegisterFields} from "./registerForm";
import * as Yup from "yup";

/*const validate = (values: RegisterFields) => {
    const errors = {
        name: "",
        surname: "",
        middleName: "",
        dateOfBirth: "",
        sex: "",
        role: "",
        weight: "",
        height: "",
        specialisation: "",
        clinic: "",
        clinicAddress: "",
        phone: "",
        email: "",
        password: "",
        repeatPassword: ""
    };
    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.surname) {
        errors.surname = 'Required'
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required'
    }

    if (!values.sex) {
        errors.sex = 'Required'
    }

    if (!values.phone) {
        errors.phone = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-z\d*]+@[A-z.]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password) {
        const uppercaseRegExp = /(?=.*?[A-Z])/;
        const lowercaseRegExp = /(?=.*?[a-z])/;
        const digitsRegExp = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp = /.{8,}/;
        const passwordLength = values.password.length;
        const uppercasePassword = uppercaseRegExp.test(values.password);
        const lowercasePassword = lowercaseRegExp.test(values.password);
        const digitsPassword = digitsRegExp.test(values.password);
        const specialCharPassword = specialCharRegExp.test(values.password);
        const minLengthPassword = minLengthRegExp.test(values.password);
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

    if (!values.repeatPassword) {
        errors.repeatPassword = 'Required'
    } else if (values.password !== values.repeatPassword) {
        errors.repeatPassword = 'Paswords doesn`t match'
    }

    if (!values.clinic) {
        errors.clinic = 'Required'
    }

    if (!values.clinicAddress) {
        errors.clinicAddress = 'Required'
    }

    if (!values.role) {
        errors.clinicAddress = 'Required'
    } else if (values.role === 'patient') {
        if (!values.weight) {
            errors.weight = 'Required'
        }
        if (!values.height) {
            errors.height = 'Required'
        }
    }

    return errors;
}*/


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    dateOfBirth: Yup.date().required('Required'),
    sex: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .matches(/[a-z]/, "At least one Lowercase")
        .matches(/[A-Z]/, "At least one Uppercase")
        .matches(/[0-9]/, "At least one Number")
        .matches(/[~, + , * , ? , ^ , $, @, #]/, "At least one Special Character")
        .min(8, "At least minimum 8 characters"),
    repeatPassword: Yup.string().required("Required")
        .oneOf([Yup.ref("password")],  'Pas"swords doesn`t match'),
    clinic: Yup.string().required('Required'),
    clinicAddress: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
    weight: Yup.string().when("role", {
        is: "patient",
        then: (schema) => schema.required('Required')
    }),
    height: Yup.string().when("role", {
        is: "patient",
        then: (schema) => schema.required('Required')
    }),
    specialisation: Yup.string().when("role", {
        is: "doctor",
        then: (schema) => schema.required('Required')
    }),
})
export default validationSchema;