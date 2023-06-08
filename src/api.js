import axios from "axios";

const baseURL = 'http://ec2-3-88-205-199.compute-1.amazonaws.com:5000/api';
const baseLocalhost = 'http://localhost:5000/api';
const Server = axios.create({
    baseURL: baseURL
});

const getPrescriptions = async (token, assigneeId) => await Server.get(
    `/prescriptions/${assigneeId}`,
    {
        headers: {
            Authorization: token
        }
    });

const getPrescriptionById = async (id, token) => {
    const prescriptions = await Server.get(
        `/prescriptions/${id}`,
        {
            headers: {
                Authorization: token
            }
        }
    );
}
const deletePrescriptionById = async (id, token) => await Server.delete(
    `/prescriptions/${id}`,
    {
        headers: {
            Authorization: token
        }
    }
    );
const createPrescription = async (prescription, token) => await Server.post(
    '/prescriptions',
    prescription,
    {
        headers: {
            Authorization: token
        }
    }
    );
const updatePrescription = async (id, presriptionData, token) => await Server.put(
    `/prescriptions/${id}`,
    presriptionData,
    {
        headers: {
            Authorization: token
        }
    }
    );

const createNewUser = async (newUser) => await Server.post('/users/register', newUser)

const logInUser = async (userData) => await Server.post('/users/auth', userData)

const getUserDataByToken = async (token) => await Server.get('/users/user', {
    headers: {
        Authorization: token
    }
})

const getDoctors = async (clinic, clinicAddress, token, searchField= '', sortField = 'name') => await Server.get('/users/doctors',{
    headers: {
        Authorization: token
    },
    params: {
        clinic: clinic,
        clinicAddress: clinicAddress,
        searchField: searchField,
        sortField: sortField
    }
});

const updateAssignedDoctors = async (userId, doctorId, token) => await Server.patch(`/users/${userId}`, {doctorId},{
    headers: {
        Authorization: token
    }
} )

const getDoctorPatients = async (token, searchField= '', sortField = 'name') => await Server.get('/users/patients', {
    headers: {
        Authorization: token
    },
    params: {
        searchField: searchField,
        sortField: sortField
    }
})

const getDoctorPatientById = async (patientId, token) => await Server.get(`/users/patient/${patientId}`, {
    headers: {
        Authorization: token
    }
})

const getDailyPrescriptions = async (token) => await Server.get('/prescriptions/daily', {
    headers:{
        Authorization: token
    }
})

const changePrescriptionStatus = async (token, prescriptionId) => {
    return await Server.patch(`/prescriptions/${prescriptionId}`,{},
        {
            headers:{
                Authorization: token
            }
        })
}

export {
    getPrescriptions,
    deletePrescriptionById,
    getPrescriptionById,
    createPrescription,
    updatePrescription,
    createNewUser,
    logInUser,
    getUserDataByToken,
    getDoctors,
    updateAssignedDoctors,
    getDoctorPatients,
    getDoctorPatientById,
    getDailyPrescriptions,
    changePrescriptionStatus
}