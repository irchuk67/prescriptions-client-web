import {Field} from "redux-form";
import React from "react";
import remove from '../../assets/delete 1.svg';

const renderField = ({input, label, type, meta: {touched, error}, className}, props) => (
    <div className={`new-form__field ${className ? className : ''}`}>
        <label className={'new-form__label'}>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} className={'new-form__input prescription-form__input'}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const renderSelect = ({options, label}) => {
    const optionsList = options.map(optionItem => <option value={optionItem}>{optionItem}</option>)
    return (
        <div className={'new-form__field select'}>
            <label className={'new-form__label'}>{label}</label>
            <select className={''}>
                {optionsList}
            </select>
        </div>

    )
}

const renderFieldTextSelect = ({input, label, type, meta: {touched, error}, options, selectName}) => {
    const optionsList = options.map(optionItem => <option value={optionItem}>{optionItem}</option>)
    return (
        < div className={'new-form__field'}>
            <label className={'new-form__label'}> {label}</label>
            <div className={'prescription-form__text-select--group'}>
                <input {...input} type={type} placeholder={label}
                       className={'new-form__input prescription-form__input'}/>
                <div className={'select'}>
                    <Field component={'select'} name={selectName} >
                        {optionsList}
                    </Field>
                </div>
                {touched && error && <span>{error}</span>}
            </div>
        </div>
    )
}

const renderBasicFields = () => {
    return (
        <div>
            <Field name={'title'} type={'text'} component={renderField} label={'Title'}/>
            <Field name={'description'} type={'text'} component={renderField} label={'Description'}/>
            <Field name={'startDate'} type={'date'} component={renderField} label={'Date of start'}/>
            <Field name={'endDate'} type={'date'} component={renderField} label={'Date of end'}/>
        </div>
    )
}

const renderNeedToRepeat = () => {
    return (
        <Field name={'needToRepeat'}
               type={'checkbox'}
               label={'Need to repeat'}
               component={renderField}
               className={'prescription-form__need-to-repeat'}
        />
    )
}

const renderRepeatPeriod = () => {
    return (
        <div>
            <Field name={'periodOfRepeat'}
                   type={'text'}
                   component={renderFieldTextSelect}
                   label={'Period of repeat'}
                   options={['hour', 'day', 'week', 'month', 'year']}
                   selectName={'periodMeasure'}
            />
        </div>
    )
}

const renderSubFields = (medicine, index, fields) => {
    return (
        <div className={'medicines__medicine'}>
            <div className={'medicines__medicine--header'}>
                <h4 className={'medicines__medicine--heading'}>Medicine #{index + 1}</h4>

                <button
                    type="button"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                    className={'medicines__medicine--remove'}
                ><img src={remove} alt={'delete medicine'}/> </button>

            </div>
            <Field
                name={`${medicine}.name`}
                type="text"
                component={renderField}
                label="Name"/>
            <Field
                name={`${medicine}.kind`}
                component={renderSelect}
                label="Type"
                options={['pills', 'cream', 'syrup']}
            />
            <Field
                name={`${medicine}.dose`}
                type="text"
                component={renderField}
                label="Dose"/>
            <Field
                name={`${medicine}.amountForOneTime`}
                type="number"
                component={renderField}
                label="Amount of medicine"/>
            <Field
                name={`${medicine}.featuresOfUse`}
                type="text"
                component={renderField}
                label="Features of drug use"/>

        </div>
    )
}
const renderMedicines = ({fields}) => {
    return (
        <div>
            <div className={'new-form__field register__field'}>
                <div className={'medicines__header'}>
                    <label htmlFor="medicines" className={'new-form__label'}>Medicines</label>
                    <button type="button"
                            onClick={() => fields.push({})}
                            className={'medicines__button'}
                    >
                        Add medicine
                    </button>
                </div>
                {
                    fields.map(renderSubFields)
                }
            </div>
        </div>
    )
}

export {renderMedicines, renderBasicFields, renderRepeatPeriod, renderNeedToRepeat}