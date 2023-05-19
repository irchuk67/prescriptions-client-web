import React, {useEffect, useState} from "react";
import './patientsList.scss';
import {connect} from "react-redux";
import {getPatientsListForDoctor} from "../../redux/actions";
import search from "../../assets/icons8-search 1.svg";
import sort from "../../assets/filter 1.svg";
import SortForm from "../sortForm/sortForm";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../../format";

const patientItems = (patients) => {
    const navigate = useNavigate();
    const OnPatientClick = (patientId) => {
        const currentPatient = patients.filter(patient => patient.userId === patientId)[0];
        localStorage.setItem('currentPatient', JSON.stringify(currentPatient));
        navigate(`/doctor/main/${patientId}`)
    }
    return patients.map(patient => {
        const lastPrescriptionDate = patient.lastPrescriptionDate !== "" ? formatDate(patient.lastPrescriptionDate) : "";
        return (
            <div className={'patient__item'} key={patient.userId} onClick={() => OnPatientClick(patient.userId)}>
                <div className={'patient__info'}>
                    <p className={'patient__name'}>{patient.surname} {patient.name} {patient.middleName}</p>
                    <div className={'patient__lastPrescriptionGroup'}>
                        <p className={'patient__lastPrescription'}>{patient.lastPrescription}</p>
                        <p className={'patient__lastPrescriptionDate'}>{lastPrescriptionDate}</p>
                    </div>
                </div>
            </div>
        )

    })
}

const PatientsList = (props) => {
    const [patientSearch, setPatientSearch] = useState('');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortFields = ['name', 'surname', 'last Prescription Date'];
    const [sortField, setSortField] = useState('');

    useEffect(() => {
        const getPatients = async () => {
            return await props.getPatientsListForDoctor(localStorage.getItem('token'))
        }
        getPatients().catch(err => console.log(err))
    }, []);

    const onSearchSubmit = async (event) => {
        event.preventDefault();
        await props.getPatientsListForDoctor(localStorage.getItem('token'), patientSearch);
        setPatientSearch('')
    }

    const onSearchChange = (event) => {
        event.preventDefault();
        setPatientSearch(event.target.value);
    }

    const onSortFieldChange = (event) => {
        setSortField(event.target.value)
    }

    const onSortFieldSelect = async (event) => {
        event.preventDefault()
        await props.getPatientsListForDoctor(localStorage.getItem('token'), patientSearch, sortField);
        setIsSortOpen(false)
    }
    return (
        <React.Fragment>
            {isSortOpen ?
                <SortForm sortFields={sortFields} onSubmit={onSortFieldSelect} onChange={onSortFieldChange}/>
                :
                <div className={'patient-list'}>
                    <p className={'patient-list__heading'}>Your patients</p>
                    <div className={'search'}>
                        <form onSubmit={(event) => onSearchSubmit(event)}>
                            <input type={'text'} placeholder={'Doctor data'} value={patientSearch}
                                   onChange={event => onSearchChange(event)}/>
                            <img src={search}/>
                        </form>
                    </div>
                    <div className={'sort'} onClick={() => setIsSortOpen(true)}>
                        <p className="sort__heading">Sort patients</p>
                        <img src={sort}/>
                    </div>
                    {patientItems(props.patients)}
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        patients: state.patients
    }
}

export default connect(mapStateToProps, {getPatientsListForDoctor})(PatientsList);