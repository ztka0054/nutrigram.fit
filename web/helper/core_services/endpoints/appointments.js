import constants from "../../enviroment/config";

const get_appointments = {
    url: `${constants.api_url}/nutritionist/appointments/`,
    typeRequest: "get",
};

const post_new_appointment = {
    url: `${constants.api_url}/nutritionist/appointments/`,
    typeRequest: "post",
};

const patch_edit_appointment = {
    url: `${constants.api_url}/nutritionist/appointments/#/`,
    typeRequest: "patch",
};

const delete_appointment = {
    url: `${constants.api_url}/nutritionist/appointments/#/`,
    typeRequest: "delete",
};

const get_availabilities = {
    url: `${constants.api_url}/nutritionist/appointments/availability/`,
    typeRequest: "get",
};

const post_availabilities = {
    url: `${constants.api_url}/nutritionist/appointments/availability/`,
    typeRequest: "post",
};

const patch_availabilities = {
    url: `${constants.api_url}/nutritionist/appointments/availability/#/`,
    typeRequest: "patch",
};

const delete_availabilities = {
    url: `${constants.api_url}/nutritionist/appointments/availability/#/`,
    typeRequest: "delete",
};

const get_unavailabilities = {
    url: `${constants.api_url}/nutritionist/appointments/unavailability/`,
    typeRequest: "get",
};

const post_unavailabilities = {
    url: `${constants.api_url}/nutritionist/appointments/unavailability/`,
    typeRequest: "post",
};

const patch_unavailabilities = {
    url: `${constants.api_url}/nutritionist/appointments/unavailability/#/`,
    typeRequest: "patch",
};

const delete_unavailabilities = {
    url: `${constants.api_url}/nutritionist/appointments/unavailability/#/`,
    typeRequest: "delete",
};

export default {
    get_appointments,
    post_new_appointment,
    patch_edit_appointment,
    delete_appointment,
    get_availabilities,
    post_availabilities,
    patch_availabilities,
    delete_availabilities,
    get_unavailabilities,
    post_unavailabilities,
    patch_unavailabilities,
    delete_unavailabilities,
};
