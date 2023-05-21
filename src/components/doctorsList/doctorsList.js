import React, {useEffect, useState} from "react";
import {getDoctorsList} from "../../redux/actions";
import user from '../../assets/account.svg';
import {connect} from "react-redux";
import './doctorsList.scss';
import Button from "../button/button";
import sort from '../../assets/filter 1.svg';
import SortForm from "../sortForm/sortForm";
import {updateAssignedDoctors} from "../../api";
import {NavLink} from "react-router-dom";
import Search from "../search/search";

const renderDoctors = (doctors, assignedDoctorsLocal, onClick) => {
    return doctors.map(doctor => {
        return (
            <div className={'doctor__item'} key={doctor.userId}>
                <div className={'doctor__data'}>
                    <img src={user} alt={'Doctor Icon'}/>
                    <div className={'doctor__info'}>
                        <p className={'doctor__name'}>{doctor.surname} {doctor.name} {doctor.middleName}</p>
                        <p className={'doctor__specialisation'}>{doctor.specialisation}</p>
                    </div>
                </div>

                <input type={'checkbox'} className={'doctor__contract'}
                       checked={assignedDoctorsLocal.includes(doctor.userId)} onChange={() => onClick(doctor.userId)}/>
            </div>
        )
    })
}

const DoctorsList = (props) => {
    const [doctorSearch, setDoctorSearch] = useState('');
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortFields = ['name', 'surname', 'specialisation'];
    const [sortField, setSortField] = useState('');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const [assignedDoctorsLocal, setAssignedDoctorsLocal] = useState([...currentUser.assignedDoctors])

    useEffect(() => {
        const getDoctors = async () => {
            const {clinic, clinicAddress} = currentUser;
            return await props.getDoctorsList(clinic, clinicAddress, localStorage.getItem('token'))
        }
        getDoctors().catch(err => console.log(err))
    }, []);

    const onSearchChange = (event) => {
        event.preventDefault();
        setDoctorSearch(event.target.value);
    }

    const onSortFieldChange = (event) => {
        setSortField(event.target.value)
    }

    const onSortFieldSelect = async (event) => {
        event.preventDefault()
        const {clinic, clinicAddress} = JSON.parse(localStorage.getItem('currentUser'));
        await props.getDoctorsList(clinic, clinicAddress, localStorage.getItem('token'), doctorSearch, sortField);
        setIsSortOpen(false)
    }

    const onSearchSubmit = async (event) => {
        event.preventDefault();
        const {clinic, clinicAddress} = JSON.parse(localStorage.getItem('currentUser'));
        await props.getDoctorsList(clinic, clinicAddress, localStorage.getItem('token'), doctorSearch, sortField);
        setDoctorSearch('')
    }

    const onDoctorClick = async (doctorId) => {
        const assignedDoctorList = await updateAssignedDoctors(
            currentUser.userId,
            doctorId,
            localStorage.getItem('token')
        )
        localStorage.setItem('currentUser', JSON.stringify({...currentUser, assignedDoctors: assignedDoctorList.data}));
        await setAssignedDoctorsLocal(assignedDoctorList.data);
    }

    return (
        <React.Fragment>
            {isSortOpen
                ?
                <SortForm sortFields={sortFields}
                          onSubmit={onSortFieldSelect}
                          onChange={onSortFieldChange}/>
                :
                <div className={'doctors'}>
                    <div className={'doctors__header'}>
                        <h3 className={'doctors__title'}>Doctors</h3>
                        <NavLink to={'/patient/main'}><Button className={'button button__green doctors__button'}>Go to daily receipts</Button></NavLink>
                    </div>

                    <Search onSearchSubmit={onSearchSubmit} searchField={doctorSearch} onSearchChange={onSearchChange}/>


                    <div className={'sort'} onClick={() => setIsSortOpen(true)}>
                        <p className="sort__heading">Sort doctors</p>
                        <img src={sort}/>
                    </div>
                    {renderDoctors(props.doctors, assignedDoctorsLocal, onDoctorClick)}
                </div>
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        doctors: state.doctors
    }
}

export default connect(mapStateToProps, {getDoctorsList})(DoctorsList);