import constants from "../../enviroment/config";

const get_sports = {
    url: `${constants.api_url}/nutritionist/workouts/sports/`,
    typeRequest: "get",
};

const get_configuration = {
    url: `${constants.api_url}/nutritionist/workouts/#/configuration/`,
    typeRequest: "get",
};

const post_create_configuration = {
    url: `${constants.api_url}/nutritionist/workouts/#/configuration/`,
    typeRequest: "post",
};

const patch_update_configuration = {
    url: `${constants.api_url}/nutritionist/workouts/#/configuration/`,
    typeRequest: "patch",
};

export default {
    get_sports,
    get_configuration,
    post_create_configuration,
    patch_update_configuration,
};
