import React, {useState} from "react";
import './registerForm.scss';
import {Formik, Form, Field, ErrorMessage as Error, ErrorMessageProps} from "formik";
import Button from "../button/button";
import {close as closeRegisterForm} from "../../redux/slices/registerFormSlice";
import {open as openAuthForm} from "../../redux/slices/authFormSlice";
import {useAppDispatch} from "../../hooks";
import validationSchema from "./validate";
import male from "../../assets/man-hair-svgrepo-com 1.png" ;
import female from "../../assets/woman-svgrepo-com 1.png";
import doctor from "../../assets/doctor-male-svgrepo-com 1.png";
import patient from "../../assets/person-sitting-on-a-medical-stretcher-svgrepo-com 1.png";
import {createNewUser} from "../../api";
import ErrorMessage from "../errorMessage/errorMessage";
import {Err} from "../../types/response";
interface RegisterFields {
    name: string,
    surname: string,
    middleName: string,
    dateOfBirth: string,
    sex: string,
    role: string,
    weight?: string,
    height?: string,
    specialisation?: string,
    clinic: string,
    clinicAddress: string,
    phone: string,
    email: string,
    password: string,
    repeatPassword: string
};


const RegisterForm: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (values: RegisterFields) => {
        try {
            const userToCreate = {
                name: values.name,
                surname: values.surname,
                middleName: values.middleName,
                birthDate: values.dateOfBirth,
                sex: values.sex,
                phoneNumber: values.phone,
                email: values.email,
                password: values.password,
                role: values.role,
                weight: values.weight,
                height: values.height,
                clinic: values.clinic,
                clinicAddress: values.clinicAddress,
                specialisation: values.specialisation
            }
            await createNewUser(userToCreate);
            dispatch(closeRegisterForm());
            dispatch(openAuthForm());
        } catch (err: Err ) {
            console.log(err)
            setIsError(true);
            setErrorMessage(err.message ? err.message : "Error!!!")
        }
    }

    const onErrorClose = () => {
        setIsError(false);
    }

    const onErrorButtonClick = () => {
        dispatch(closeRegisterForm());
        dispatch(openAuthForm());
    }

    const initialValues: RegisterFields = {
        name: '',
        surname: '',
        middleName: '',
        dateOfBirth: '',
        sex: '',
        role: '',
        clinic: '',
        clinicAddress: '',
        phone: '',
        email: '',
        password: '',
        repeatPassword: ''
    }

    return (
        <div className={'register'}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    props => {
                        console.log(props)
                        return (
                            <Form>
                                <div className="new-form__field register__field">
                                    <label htmlFor="name">Name</label>
                                    <Field type={"text"}
                                           name={"name"}
                                           id={"name"}
                                           className={'register__input'}
                                    />
                                    <Error name={'name'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="surname">Surname</label>
                                    <Field type={"text"}
                                           name={"surname"}
                                           id={"surname"}
                                           className={'register__input'}
                                    />
                                    <Error name={'surname'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="middleName">Middle name</label>
                                    <Field type={"text"}
                                           name={"middleName"}
                                           id={"middleName"}
                                           className={'register__input'}
                                    />
                                    <Error name={'middleName'}
                                           render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="dateOfBirth">Date of birth</label>
                                    <Field type={"date"}
                                           name={"dateOfBirth"}
                                           id={"dateOfBirth"}
                                           className={'register__input'}
                                    />
                                    <Error name={'dateOfBirth'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className={"register__radio-group register__field"}>
                                    <div className={'register__radio-group__main'}>
                                        <label htmlFor="sex">Sex</label>
                                        <div id={'sex'}>
                                            <div className={'register__radios'}>
                                                <label className={'register__radio'}>
                                                    <Field name="sex"
                                                           type="radio"
                                                           value="male"
                                                    />
                                                    <img alt={'male'} src={male}/>
                                                </label>
                                                <label className={'register__radio'}>
                                                    <Field name="sex"
                                                           type="radio"
                                                           value="female"/>
                                                    <img alt={'female'} src={female}/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <Error name={'sex'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className={"register__radio-group register__field"}>
                                    <div className={'register__radio-group__main'}>
                                        <label htmlFor="role">Role</label>
                                        <div className={'register__radios'}>
                                            <label className={'register__radio'}>
                                                <Field name="role"
                                                       type="radio"
                                                       value="doctor"/>
                                                <img alt={'doctor'}
                                                     src={doctor}/>
                                            </label>
                                            <label className={'register__radio'}>
                                                <Field name="role"
                                                       type="radio"
                                                       value="patient"/>
                                                <img alt={'patient'}
                                                     src={patient}/>
                                            </label>
                                        </div>
                                    </div>
                                    <Error name={'role'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                {props.values.role !== "" && (props.values.role === "patient" ?
                                        <div>
                                            <div className={'new-form__field register__field'}>
                                                <label htmlFor="weight">Weight</label>
                                                <Field id={'weight'} name={"weight"} className={'register__input'}/>
                                                <Error name={'weight'}
                                                              render={msg => <span
                                                                  className={'register__error'}>{msg}</span>}
                                                />
                                            </div>

                                            <div className={'new-form__field register__field'}>
                                                <label htmlFor="height">Height</label>
                                                <Field id={'height'} name={'height'} className={'register__input'}/>
                                                <Error name={"height"}
                                                              render={msg => <span
                                                                  className={'register__error'}>{msg}</span>}
                                                />
                                            </div>
                                        </div>
                                        :
                                        <div className={'new-form__field register__field'}>
                                            <label htmlFor="specialisation">Specialisation</label>
                                            <Field name={'specialisation'}
                                                   id={'specialisation'}
                                                   className={'register__input'}/>
                                            <Error name={'specialisation'}
                                                          render={msg => <span
                                                              className={'register__error'}>{msg}</span>}
                                            />
                                        </div>
                                )}

                                <div className="new-form__field register__field">
                                    <label htmlFor="clinic">Clinic</label>
                                    <Field type={"text"}
                                           name={"clinic"}
                                           id={"clinic"}
                                           className={'register__input'}
                                    />
                                    <Error name={'clinic'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="clinicAddress">Clinic Address</label>
                                    <Field type={"text"}
                                           name={"clinicAddress"}
                                           id={"clinicAddress"}
                                           className={'register__input'}
                                    />
                                    <Error name={'clinicAddress'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="phone">Phone Number</label>
                                    <Field type={"text"}
                                           name={"phone"}
                                           id={"phone"}
                                           className={'register__input'}
                                    />
                                    <Error name={'phone'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="email">Email</label>
                                    <Field type={"email"}
                                           name={"email"}
                                           id={"email"}
                                           className={'register__input'}
                                    />
                                    <Error name={'email'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="password">Password</label>
                                    <Field type={"password"}
                                           name={"password"}
                                           id={"password"}
                                           className={'register__input'}
                                    />
                                    <Error name={'password'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>

                                <div className="new-form__field register__field">
                                    <label htmlFor="repeatPassword">Repeat Password</label>
                                    <Field type={"password"}
                                           name={"repeatPassword"}
                                           id={"repeatPassword"}
                                           className={'register__input'}
                                    />
                                    <Error name={'repeatPassword'}
                                                  render={msg => <span className={'register__error'}>{msg}</span>}
                                    />
                                </div>


                                <div className={'new-form__buttons register__buttons'}>
                                    <Button
                                        buttonType={'submit'}
                                        className={'button button__white button__white--green register__button'}>
                                        Sign up
                                    </Button>
                                    <Button className={'button button__white button__white--gray register__button'}
                                            onButtonClick={(event: { preventDefault: () => void; }) => {
                                                event.preventDefault();
                                                dispatch(closeRegisterForm());
                                            }}>Cancel</Button>
                                </div>
                            </Form>
                        )
                    }
                }
            </Formik>
            {isError &&
                <ErrorMessage isOpen={isError}
                              onFormClose={onErrorClose}
                              title={errorMessage ? errorMessage : "something wrong"}
                              onClose={onErrorClose}
                              onButtonClick={onErrorButtonClick}
                              buttonText={'Log in'}
                />}
        </div>
    );
}

export default RegisterForm;
export type {RegisterFields};

/*
*  */
