import Button from "../button/button";
import './sortForm.scss';

const SortForm = ({sortFields, onSubmit, onChange}) => {
    const fields = sortFields.map(
        fieldName => {
            return(
                <div className={'sort-form__item'} key={fieldName.split(' ').join()}>
                    <p className={'sort-form__name'}>{fieldName}</p>
                    <input name={'sort-param'}
                           type={'radio'}
                           className={'doctor__contract'}
                           value={fieldName.split(' ').join('')}
                           onChange={event => onChange(event)}/>
                </div>
            )
        }
    )

    return(
        <div className={'sort-form'}>
            <h3>Sorting parameters</h3>
            <form className={'sort-form__content'} onSubmit={(event) => onSubmit(event)}>
                <div className={'sort-form__fields'}>
                    {fields}
                </div>
                <Button className={'button button__lavender sort-form__button'} onButtonClick={(event) => onSubmit(event)}>Sort</Button>
            </form>

        </div>
    )
}

export default SortForm;