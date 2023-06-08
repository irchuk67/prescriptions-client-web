import doctor from "../../assets/doctor-male-svgrepo-com 1.png";
import patient from "../../assets/person-sitting-on-a-medical-stretcher-svgrepo-com 1.png";
import male from "../../assets/man-hair-svgrepo-com 1.png";
import female from "../../assets/woman-svgrepo-com 1.png";
import React from "react";

const renderPatientParamsFields = (fields) => {
    const {weight, height} = fields;
    return (
        <div>
            <div className={'new-form__field register__field'}>
                <label htmlFor="weight">Weight</label>
                <input {...weight.input} id={'weight'} className={'register__input'}/>
                {weight.meta.touched &&
                    ((weight.meta.error && <span className={'register__error'}>{weight.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="height">Height</label>
                <input {...fields.height.input} id={'height'} className={'register__input'}/>
                {height.meta.touched &&
                    ((height.meta.error && <span className={'register__error'}>{height.meta.error}</span>))}
            </div>
        </div>
    )
}

const renderRoleFields = (fields) => {
    return (
        <div>
            <div className={"register__radio-group register__field"}>
                <div className={'register__radio-group__main'}>
                    <label htmlFor="role">Role</label>
                    <div className={'register__radios'}>
                        <label className={'register__radio'}><input {...fields.role.input} name="role" type="radio"
                                                                    value="doctor"/> <img alt={'doctor'}
                                                                                          src={doctor}/></label>
                        <label className={'register__radio'}><input {...fields.role.input} name="role" type="radio"
                                                                    value="patient"/> <img alt={'patient'}
                                                                                           src={patient}/></label>
                    </div>
                </div>
                {fields.role.meta.touched &&
                    ((fields.role.meta.error && <span className={'register__error'}>{fields.role.meta.error}</span>))}
            </div>
        </div>
    )
}

const renderDoctorSpecialisation = (fields) => {
    const {specialisation} = fields;

    return(
        <div>
            <div className={'new-form__field register__field'}>
                <label htmlFor="specialisation">Specialisation</label>
                <input {...specialisation.input} id={'specialisation'} className={'register__input'}/>
                {specialisation.meta.touched &&
                    ((specialisation.meta.error && <span className={'register__error'}>{specialisation.meta.error}</span>))}
            </div>
        </div>
    )
}

const renderClinicFields = (fields) => {
    const {clinic, clinicAddress} = fields;
    return (
        <div>
            <div className={'new-form__field register__field'}>
                <label htmlFor="clinic">Clinic</label>
                <input {...clinic.input} id={'clinic'} className={'register__input'}/>
                {clinic.meta.touched &&
                    ((clinic.meta.error && <span className={'register__error'}>{clinic.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="clinicAddress">Clinic address</label>
                <input {...fields.clinicAddress.input} id={'clinicAddress'} className={'register__input'}/>
                {clinicAddress.meta.touched &&
                    ((clinicAddress.meta.error &&
                        <span className={'register__error'}>{clinicAddress.meta.error}</span>))}
            </div>
        </div>
    )
}

const renderIdentificationFields = (fields) => {
    const {phoneNumber, email, password, repeatPassword} = fields;

    return (
        <div>
            <div className={'new-form__field register__field'}>
                <label htmlFor="phoneNumber">Phone number</label>
                <input {...phoneNumber.input} id={'phoneNumber'} className={'register__input'}/>
                {phoneNumber.meta.touched &&
                    ((phoneNumber.meta.error && <span className={'register__error'}>{phoneNumber.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="email">Email</label>
                <input {...email.input} id={'email'} type={"email"} className={'register__input'}/>
                {email.meta.touched &&
                    ((email.meta.error && <span className={'register__error'}>{email.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="password">Password</label>
                <input {...password.input} id={'password'} type={"password"} className={'register__input'}/>
                {password.meta.touched &&
                    ((password.meta.error && <span className={'register__error'}>{password.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="repeatPassword">Repeat password</label>
                <input {...fields.repeatPassword.input} id={'repeatPassword'} type={"password"}
                       className={'register__input'}/>
                {repeatPassword.meta.touched &&
                    ((repeatPassword.meta.error &&
                        <span className={'register__error'}>{repeatPassword.meta.error}</span>))}
            </div>
        </div>
    )
}

const renderPersonalFields = (fields) => {
    const {name, surname, middleName, dateOfBirth, sex} = fields;
    return (
        <div>
            <div className={'new-form__field register__field'}>
                <label htmlFor="name">Name</label>
                <input {...name.input} id={'name'} className={'register__input'}/>
                {name.meta.touched &&
                    ((name.meta.error && <span className={'register__error'}>{name.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="surname">Surname</label>
                <input {...surname.input} id={'surname'} className={'register__input'}/>
                {surname.meta.touched &&
                    ((surname.meta.error && <span className={'register__error'}>{surname.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="middleName">Middle name</label>
                <input {...middleName.input} id={'middleName'} className={'register__input'}/>
                {middleName.meta.touched &&
                    ((middleName.meta.error && <span className={'register__error'}>{middleName.meta.error}</span>))}
            </div>

            <div className={'new-form__field register__field'}>
                <label htmlFor="dateOfBirth">Date of birth</label>
                <input {...dateOfBirth.input} id={'dateOfBirth'} type={"date"} className={'register__input'}/>
                {dateOfBirth.meta.touched &&
                    ((dateOfBirth.meta.error && <span className={'register__error'}>{dateOfBirth.meta.error}</span>))}
            </div>

            <div className={"register__radio-group register__field"}>
                <div className={'register__radio-group__main'}>
                    <label htmlFor="sex">Sex</label>
                    <div id={'sex'}>
                        <div className={'register__radios'}>
                            <label className={'register__radio'}>
                                <input {...sex.input}
                                    name="sex"
                                    type="radio"
                                    value="male"
                                />
                                <img alt={'male'} src={male}/>
                            </label>
                            <label className={'register__radio'}>
                                <input {...sex.input} name="sex" type="radio" value="female"/> <img
                                alt={'female'} src={female}/></label>
                        </div>
                    </div>
                </div>
                {sex.meta.touched &&
                    ((sex.meta.error && <span className={'register__error'}>{sex.meta.error}</span>))}
            </div>

        </div>
    )
}

export {
    renderPatientParamsFields,
    renderClinicFields,
    renderIdentificationFields,
    renderPersonalFields,
    renderRoleFields,
    renderDoctorSpecialisation
}