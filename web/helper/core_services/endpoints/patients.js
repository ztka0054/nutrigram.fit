import constants from '../../enviroment/config'

const get_patients = {
    'url': `${constants.api_url}/nutritionist/patients/`,
    'typeRequest': 'get',
}

const get_patient = {
    'url': `${constants.api_url}/nutritionist/patients/#/`,
    'typeRequest': 'get',
}

const post_new_patients = {
    'url': `${constants.api_url}/nutritionist/patients/`,
    'typeRequest': 'post-form',
}

const patch_patient = {
    'url': `${constants.api_url}/nutritionist/patients/#/`,
    'typeRequest': 'patch-form',
}

const get_patient_notes = {
    'url': `${constants.api_url}/nutritionist/patients/#/notes/`,
    'typeRequest': 'get',
}

export default {
    get_patients,
    get_patient,
    post_new_patients,
    patch_patient,
    get_patient_notes
}